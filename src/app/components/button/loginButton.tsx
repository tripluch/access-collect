"use client";
import { signIn } from "@/lib/auth";

export default function loginButton() {
  return (
    <>
      <button onClick={() => signIn()}>{"CONNEXION"}</button>
    </>
  );
}
