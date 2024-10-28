"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { savePostRequest, CommentRequest } from "@/app/types";
import { useUserStore } from "../globalStatus/useUserStore";
// import { NextResponse } from "next/server";

export async function refreshUser() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("Authorization")?.value;
  const refreshToken = cookieStore.get("refresh_token")?.value;
  if (refreshToken) {
    try {
      const response = await fetch(`${process.env.API_URL}/user/refresh`, {
        method: "GET",
        credentials: "include",
        headers: {
          ...(accessToken && { Authorization: accessToken }),
          Cookie: `refresh_token=${refreshToken}`,
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
      const { setUserInfo } = useUserStore.getState();
      setUserInfo(data);
      return data;
    } catch (error) {
      console.error("Error refreshing user data:", error);
    }
  }
}

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
