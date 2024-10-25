"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { savePostRequest, CommentRequest } from "@/app/types";
import { NextResponse } from "next/server";

export const refreshTokenServerAction = async () => {
  const apiResponse = await fetch(process.env.API_URL + "/user/refresh", {
    method: "GET",
    credentials: "include",
  });

  if (apiResponse.ok) {
    const accessToken = apiResponse.headers.get("Authorization");
    const cookieStore = cookies();

    if (accessToken != null) {
      cookieStore.set("Authorization", accessToken, {
        secure: true,
        httpOnly: true,
        maxAge: 1800,
      });
    }

    const setCookieHeader = apiResponse.headers.get("set-cookie");
    const jsonData = await apiResponse.json();

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
      { error: "Refresh failed" },
      { status: apiResponse.status }
    );
  }
};

export const commentSaveServerAction = async (data: CommentRequest) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("Authorization")?.value;

  if (!accessToken) {
    console.error("Authorization token is missing from cookies.");
    return { status: "ERROR", message: "Authorization token is missing." };
  }

  try {
    const response = await fetch(`${process.env.API_URL}/user/write/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to submit comment. Status:", response.status);
      console.error("Response body:", errorText);
      throw new Error("Failed to submit comment");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error in commentSaveServerAction:", error);
    return { status: "ERROR", message: "Failed to submit comment" };
  }
};

export const postSaveServerAction = async (data: savePostRequest) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("Authorization")?.value;

  if (!accessToken) {
    console.error("Authorization token is missing from cookies.");
    return { status: "ERROR", message: "Authorization token is missing." };
  }

  try {
    const response = await fetch(`${process.env.API_URL}/user/save/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to save Post. Status:", response.status);
      console.error("Response body:", errorText);
      throw new Error("Failed to save Post");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error in commentSaveServerAction:", error);
    return { status: "ERROR", message: "Failed to submit comment" };
  }
};

export async function saveCookie(data: string) {
  const cookieStore = cookies();
  cookieStore.set("Authorization", data, {
    secure: true,
    httpOnly: true,
    maxAge: 1800,
  });
}

export async function getCookie() {
  const cookieStore = cookies();
  const token = cookieStore.get("Authorization");
  return token;
}

export async function removeCookie() {
  const cookieStore = cookies();

  cookieStore.set("Authorization", "", {
    secure: true,
    httpOnly: true,
    maxAge: -1,
  });

  cookieStore.set("refresh_token", "", {
    secure: true,
    httpOnly: true,
    maxAge: -1,
  });
}

export async function saveRefreshToken(response: any) {
  const cookieStore = cookies();
  const data = cookieStore.get("refresh_token");
}

export async function refreshServerAction() {
  try {
    const response = await fetch(process.env.API_URL + "/user/refresh", {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      const token = response.headers.get("Authorization");
      revalidatePath("/");
      return token;
    } else {
      return "실패";
    }
  } catch (error) {
    throw error;
  }
}

// export async function loginServerAction(data: FormData) {
//   try {
//     const response = await fetch(process.env.API_URL + "/guest/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//       body: JSON.stringify({
//         username: data.get("username"),
//         password: data.get("password"),
//       }),
//     });

//     if (response.ok) {
//       const token = response.headers.get("Authorization");
//       revalidatePath("/");
//       return token;
//     } else {
//       return "실패";
//     }
//   } catch (error) {
//     throw error;
//   }
// }
