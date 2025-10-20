"use server";
import { cookies } from "next/headers";

const COOKIE = "uniconotify_admin";

export async function setSessionCookie() {
  (await cookies()).set(COOKIE, "1", { httpOnly: true, secure: true, path: "/", sameSite: "lax", maxAge: 60*60*8 });
}

export async function isAuthenticated() {
  const c = (await cookies()).get(COOKIE);
  return c?.value === "1";
}
