"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function loginServerAction(data: FormData) {
  try {
    const response = await fetch(process.env.API_URL + "guest/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username: data.get("username"),
        password: data.get("password"),
      }),
    });

    if (response.ok) {
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

export async function saveCookie(data: string) {
  const cookieStore = cookies();
  cookieStore.set("access_token", data, {
    secure: true,
    httpOnly: true,
    maxAge: 1800,
  });
}

export async function getCookie() {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token");
  return token;
}

export async function removeCookie() {
  const cookieStore = cookies();

  cookieStore.set("access_token", "", {
    secure: true,
    httpOnly: true,
    maxAge: -1,
  });

  // refresh_token 삭제
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
