import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

function isTokenExpiringSoon(accessToken: string): boolean {
  try {
    const tokenPayload = JSON.parse(
      Buffer.from(accessToken.split(".")[1], "base64").toString()
    );

    if (!tokenPayload.exp) {
      console.warn("Token does not contain an expiration field.");
      return false;
    }

    const expirationTime = tokenPayload.exp * 1000; // Convert to milliseconds
    const currentTime = Date.now();
    const timeUntilExpiration = expirationTime - currentTime;

    // console.log("Current Time:", new Date(currentTime).toISOString());
    // console.log("Expiration Time:", new Date(expirationTime).toISOString());
    // console.log("Time Until Expiration (ms):", timeUntilExpiration);

    return timeUntilExpiration <= 1 * 60 * 1000;
  } catch (error) {
    console.error("Error decoding access token:", error);
    return false;
  }
}

export async function middleware(request: NextRequest) {
  console.log("Middleware triggered");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  const cookies = await getCookie();
  if (!cookies) return NextResponse.next();

  const accessToken = cookies["Authorization"]?.replace("Bearer ", "");
  const refreshToken = cookies["refresh_token"];

  console.log("Access Token:", accessToken);
  console.log("Refresh Token:", refreshToken);

  if (!accessToken || !isTokenExpiringSoon(accessToken)) {
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  try {
    const response = await fetch(`${process.env.API_URL}/user/refresh`, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        ...(refreshToken ? { Cookie: `refresh_token=${refreshToken}` } : {}),
      },
    });

    if (!response.ok) {
      console.error(
        "Failed to refresh user data:",
        response.status,
        response.statusText
      );
      const errorDetails = await response.json();
      console.error("Error details:", errorDetails);
      throw new Error(`Failed to refresh user data: ${response.status}`);
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error refreshing user data:", error);
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/:path*"],
};

export async function getCookie() {
  const cookieStore = cookies();
  const allCookies = cookieStore.getAll();

  if (!allCookies || allCookies.length === 0) {
    console.warn("No cookies found.");
    return null;
  }

  console.log("Retrieved cookies:", allCookies);

  const cookieMap = Object.fromEntries(
    allCookies.map((cookie) => [cookie.name, cookie.value])
  );

  return cookieMap;
}
