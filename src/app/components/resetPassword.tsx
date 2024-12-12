"use client";
import { sendResetPasswordEmailIfUserExists } from "@/lib/userQuery";
import OrangeButton from "./button/orangeButton";
import { InputFormHome } from "./inputs/InputFormHome";

const ResetPasswordForm = () => {
  return (
    <div>
      <div className="w-[300px] h-[300px] md:w-[450px] md:h-[300px] shadow-md shadow-lightOliveGreen rounded-lg flex flex-col justify-center items-center gap-4">
        <h1 className="text-brightOrange uppercase">{"Mot de passe oublié ?"}</h1>
        <p className="text-midnightBlue text-center mx-2">
          {
            "Pas de panique ! Remplissez le formulaire ci-dessous et nous vous enverrons par mail les informations pour créer un nouveau mot de passe."
          }
        </p>
        <form
          action={sendResetPasswordEmailIfUserExists}
          className="flex flex-col align-center gap-4 px-3 my-4"
        >
          <InputFormHome name={"email"} label={"Email"} placeholder={"Email"}/>
          <OrangeButton route="/login" label={"REINITIALISATION"} />
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
