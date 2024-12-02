"use client";
import CancelButton from "@/app/components/button/cancelButton";
import OrangeButton from "@/app/components/button/orangeButton";
import { InputForm } from "@/app/components/InputForm";
import { InputPassword } from "@/app/components/InputPassword";
import { Organisation } from "@/lib/schema/organisation";
import { addUser } from "@/lib/userQuery";
import { useState } from "react";

const UserForm = ({
  organisationInfos,
}: {
  organisationInfos: Organisation[];
}) => {
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedOrga, setSelectedOrga] = useState("");

  return (
    <form
      action={addUser}
      className="flex flex-col align-center gap-4 px-3 my-4"
    >
      <InputForm name={"name"} label={"Nom: "} placeholder={"Jean Exemple"} />
      <InputForm
        name={"email"}
        label={"Email: "}
        placeholder={"mail@exemple.fr"}
      />
      <InputPassword name={"password"} label={"Mot de passe: "} />
      <InputForm
        name={"phone"}
        label={"N° de téléphone: "}
        placeholder={"0612345678"}
      />

      <div className="flex flex-col">
        <label
          className="text-oliveGreen uppercase font-title text-sm"
          htmlFor="role"
        >
          {"Rôle: "}
        </label>
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="block appearance-none bg-transparentLightOrange leading-tight focus:outline-none focus:bg-transparentBrightOrange  text-midnightBlue rounded-md text-sm w-72 h-8 md:w-96"
          id="grid-state"
          name="role"
        >
          <option value="" className="hover:bg-brightOrange">
            {"--Choisir une option--"}
          </option>
          <option value="superAdmin">{"superadmin"}</option>
          <option value="admin">{"admin"}</option>
          <option value="client">{"client"}</option>
          <option value="collector">{"collector"}</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label
          className="text-oliveGreen uppercase font-title text-sm"
          htmlFor="organisation"
        >
          {"Organisation: "}
        </label>
        <select
          value={selectedOrga}
          onChange={(e) => setSelectedOrga(e.target.value)}
          className="block appearance-none bg-transparentLightOrange leading-tight focus:outline-none focus:bg-transparentBrightOrange  text-midnightBlue rounded-md text-sm w-72 h-8 md:w-96"
          id="grid-state"
          name="organisationId"
        >
          <option value="" className="hover:bg-brightOrange">
            {"--Choisir une option--"}
          </option>
          {organisationInfos.map((orga: Organisation, index) => (
            <option key={index} value={orga.id}>
              {orga.name}
            </option>
          ))}
          ;
        </select>
      </div>
      <div className="flex justify-around">
        <CancelButton />
        <OrangeButton label={"Confirmer"} route={""} />
      </div>
    </form>
  );
};

export default UserForm;
