"use server";

import { revalidatePath } from "next/cache";

export async function refreshServerAction() {
  try {
    const response = await fetch(process.env.API_URL + "user/refresh", {
      method: "GET",
    });

    if (response.ok) {
      const data = await response.json();
      const token = response.headers.get("Authorization");
      console.log("리프레쉬");
      revalidatePath("/");
      return token;
    } else {
      return "실패";
    }
  } catch (error) {
    throw error;
  }
}
