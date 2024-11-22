"use client";
import { signIn } from "next-auth/react";

export default function loginButton({ credentials }: any) {
  return (
    <>
      <button onClick={() => signIn(credentials)}>{"CONNEXION"}</button>
    </>
  );
}
