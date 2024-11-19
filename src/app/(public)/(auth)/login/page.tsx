import Image from "next/image";
import LoginForm from "../../../components/loginForm";

const LoginPage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl mt-14 text-midnightBlue font-bold">
        {"Bienvenue sur AccessCollect"}
      </h1>
      <div className="flex justify-around mt-4">
        <div>
          <Image
            src="/tri2.png"
            alt="Illustration bacs de tri"
            width={500}
            height={1}
          />
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
