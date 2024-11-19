"use client";
import OrangeButton from "@/app/components/button/orangeButton";
import { InputForm } from "@/app/components/InputForm";
import { InputPassword } from "@/app/components/InputPassword";
import { logIn } from "@/lib/userQuery";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="w-[450px] h-[300px] shadow-md shadow-lightOliveGreen rounded-lg flex flex-col justify-center items-center">
      <form
        action={logIn}
        className="flex flex-col align-center gap-4 px-3 my-4"
      >
        <InputForm name={"email"} label={"Email: "} />
        <InputPassword name={"password"} label={"Mot de passe: "} />
        <div className="flex justify-center">
          <OrangeButton label={"CONNEXION"} route={""} />
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
