"use client"
import OrangeButton from "@/app/components/button/orangeButton";

const ForgottenPasswordError = () => {
  return (
    
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[300px] h-[300px] md:w-[450px] md:h-[350px] shadow-md shadow-lightOliveGreen rounded-lg flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-brightOrange uppercase">{"Le lien a expiré"}</h1>
        <p className="text-midnightBlue text-center px-6 py-4">{"Il semble que le lien de réinitialisation a expiré. Si vous souhaitez en générer un nouveau cliquez ici : "}</p>
        <OrangeButton label={"REINITIALISER"} route={"/forgotten-password"}/>
      </div>
    </div>
    
  );
};

export default ForgottenPasswordError;
