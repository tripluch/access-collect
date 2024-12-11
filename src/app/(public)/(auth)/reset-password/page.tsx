"use client";
import OrangeButton from "@/app/components/button/orangeButton";
import { InputPassword } from "@/app/components/InputPassword";
import Image from "next/image";
const toto = async () => {
  console.log("toto");
};
const resetPasswordPage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl mt-10 text-midnightBlue font-bold">
        {"Bienvenue sur AccessCollect"}
      </h1>
      <div className="flex flex-wrap gap-x-4 justify-around gap-y-8 mb-8 mt-8">
        <div>
          <Image
            src="/tri2.png"
            alt="Illustration bacs de tri"
            width={500}
            height={1}
          />
        </div>

        <div className="w-[300px] h-[300px] md:w-[450px] md:h-[300px] shadow-md shadow-lightOliveGreen rounded-lg flex flex-col justify-center items-center gap-4">
          <h1 className="text-brightOrange">
            {"REINITIALISER VOTRE MOT DE PASSE"}
          </h1>
          <form
            action={toto}
            className="flex flex-col align-center gap-4 px-3 my-4"
          >
            <InputPassword
              name="NewPassword"
              label={"Entrez votre nouveau mot de passe :"}
            />
            <InputPassword
              name="NewPasswordRepeat"
              label={"Confirmez votre nouveau mot de passe :"}
            />

            <OrangeButton route="/login" label={"REINITIALISATION"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default resetPasswordPage;
