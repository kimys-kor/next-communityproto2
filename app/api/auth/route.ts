import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const apiResponse = await fetch(process.env.API_URL + "/guest/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (apiResponse.ok) {
      const cookieStore = cookies();
      const accessToken = apiResponse.headers.get("Authorization");

      if (accessToken != null) {
        cookieStore.set("Authorization", accessToken, {
          secure: true,
          httpOnly: true,
          maxAge: 1800,
        });
      }

      const setCookieHeader = apiResponse.headers.get("set-cookie");
      const jsonData = await apiResponse.json();

      // Return user data along with the response
      const response = NextResponse.json({
        message: "ok",
        data: jsonData.data,
      });

      if (setCookieHeader) {
        response.headers.set("Set-Cookie", setCookieHeader);
      }

      return response;
    } else {
      return NextResponse.json(
        { error: "Login failed" },
        { status: apiResponse.status }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
