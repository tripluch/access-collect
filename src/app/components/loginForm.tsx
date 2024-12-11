"use client";
import { InputForm } from "@/app/components/InputForm";
import { InputPassword } from "@/app/components/InputPassword";
import { redirectToHomepage } from "@/lib/actions";
import { signIn } from "next-auth/react";
import Link from "next/link";

export const getLogData = async (formData: any) => {
  const { email, password } = Object.fromEntries(formData);

  const logIn = await signIn("credentials", {
    redirect: false,
    email: email,
    password: password,
  });

  if (logIn?.error) {
    const warningDiv: HTMLElement | null = document.getElementById("warning");
    const warningMessage: string = "Email ou mot de passe incorrect.";

    if (warningDiv != null) {
      warningDiv.innerHTML += `${warningMessage}`;
    }
  } else {
    redirectToHomepage();
  }
};

const LoginForm = () => {
  return (
    <div className="w-[300px] h-[300px] md:w-[450px] md:h-[300px] shadow-md shadow-lightOliveGreen rounded-lg flex flex-col justify-center items-center">
      <form
        action={getLogData}
        className="flex flex-col align-center gap-4 px-3 my-4"
      >
        <div id="warning" className="text-red-500"></div>
        <InputForm
          name={"email"}
          label={"Email: "}
          placeholder="email@exemple.fr"
        />
        <InputPassword name={"password"} label={"Mot de passe: "} />
        <div className="flex justify-center">
          <button className="bg-lightOrange  text-midnightBlue rounded-full p-2 font-title uppercase mb-4">
            {" "}
            {"CONNEXION"}
          </button>
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
