import { logIn } from "@/lib/userQuery";
import Image from "next/image";

const LoginPage = () => {
  return <div>
    <h1 className="text-center text-2xl mt-14 text-midnightBlue font-bold">{"Bienvenue sur AccessCollect"}</h1>
    <div className="flex">
    <div>
      <Image src="/tri2.png" alt="Illustration bacs de tri" width={500}
                      height={1}/>
    </div>
    <div className="w-[450px] h-[350px] shadow-md shadow-lightOliveGreen rounded-lg flex flex-col justify-center items-center">
    <form action={logIn}>
      <label htmlFor="email">{"Email :"}</label>
      <input className="" type="text" name="email" required/>
      <label htmlFor="password">{"Mot de passe :"}</label>
      <input className="" type="password" name="password" required/>
      <button name="Connexion" className="">{"CONNEXION"}</button>
      </form>
      
      {/* A modifier en link */}
      <div>{"Mot de passe oublié ?"}</div>
   
    </div>
    </div>
  </div>;
};
export default LoginPage;
