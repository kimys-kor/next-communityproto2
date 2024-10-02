"use server";

import { revalidatePath } from "next/cache";

export async function loginServerAction(data: FormData) {
  try {
    const response = await fetch(process.env.API_URL + "guest/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.get("username"),
        password: data.get("password"),
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const token = response.headers.get("Authorization");
      console.log("Response:", token);
      revalidatePath("/");
      return token;
    } else {
      return "실패";
    }
  } catch (error) {
    throw error;
  }
}
