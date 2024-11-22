"use client";
import { InputForm } from "@/app/components/InputForm";
import { InputPassword } from "@/app/components/InputPassword";
import { signIn } from "next-auth/react";
import Link from "next/link";

export const getLogData = async (formData: any) => {
  const { email, password } = Object.fromEntries(formData);
  console.log(email, password);

  const dataLog = await signIn("credentials", {
    redirect: false,
    email: email,
    password: password,
  });

  if (dataLog === null) {
    //create div ou pop up
    console.log("ERRRRREEEEEUR");
  } else {
    //redirect user
    console.log("yoooooooupiiiiii", dataLog);
  }
};

const LoginForm = () => {
  return (
    <div className="w-[450px] h-[300px] shadow-md shadow-lightOliveGreen rounded-lg flex flex-col justify-center items-center">
      <form
        action={getLogData}
        className="flex flex-col align-center gap-4 px-3 my-4"
      >
        <InputForm name={"email"} label={"Email: "} />
        <InputPassword name={"password"} label={"Mot de passe: "} />
        <div className="flex justify-center">
          <button> {"CONNEXION"}</button>
        </div>
      </form>

      {/* Need to modify the link path */}
      <Link href="/" className="flex justify-start">
        <p className="text-midnightBlue">{"Mot de passe oublié ?"}</p>
      </Link>
    </div>
  );
};

export default LoginForm;
