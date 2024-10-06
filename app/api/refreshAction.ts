"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function refreshServerAction() {
  try {
    const response = await fetch(process.env.API_URL + "user/refresh", {
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
