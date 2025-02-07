"use client";
import OrangeButton from "@/app/components/button/orangeButton";
import { InputPasswordHome } from "@/app/components/inputs/InputPasswordHome";
import Image from "next/image";

const handleSubmitNewPassword = async (formData: FormData) => {
  const {newPassword, newPasswordRepeat} = Object.fromEntries(formData);

  if(newPassword != newPasswordRepeat){
    return;
  }
 

  
};
const resetPasswordIdPage = () => {
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
          <h1 className="text-brightOrange uppercase">
            {"réinitialisez votre mot de passe"}
          </h1>
          <form
            action={handleSubmitNewPassword}
            className="flex flex-col align-center gap-4 px-3 my-4"
          >
            <InputPasswordHome
              name="newPassword"
              label={"Entrez votre nouveau mot de passe :"}
            />
            <InputPasswordHome
              name="newPasswordRepeat"
              label={"Confirmez votre nouveau mot de passe :"}
            />

            <OrangeButton route="/login" label={"REINITIALISATION"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default resetPasswordIdPage;
