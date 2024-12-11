import ResetPasswordForm from "@/app/components/resetPassword";
import Image from "next/image";
const forgottenPasswordPage = () => {
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
        <div>
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default forgottenPasswordPage;
