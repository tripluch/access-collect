"use client";
import OrangeButton from "@/app/components/button/orangeButton";

const ForgottenPasswordError = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-56">
      <h1 className="text-brightOrange uppercase">{"Le lien a expiré"}</h1>
      <p className="text-midnightBlue text-center px-6 py-4">
        {
          "Il semble que le lien de réinitialisation a expiré. Si vous souhaitez en générer un nouveau cliquez ici : "
        }
      </p>
      <OrangeButton label={"REINITIALISER"} route={"/forgotten-password"} />
    </div>
  );
};

export default ForgottenPasswordError;
