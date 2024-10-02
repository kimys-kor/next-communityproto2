"use server";

import { revalidatePath } from "next/cache";

export async function handleLogin(data: FormData) {
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
      console.log("Response:", data);
      revalidatePath("/");
      return data;
    } else {
      console.error("Login failed:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
