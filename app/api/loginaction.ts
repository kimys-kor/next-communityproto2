"use server";

import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";

export async function LoginServerAction(data: FormData) {
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
      console.error("Login failed:", response.statusText);
    }
  } catch (error) {
    toast.error("로그인에 실패 하였습니다.");
  }
}
