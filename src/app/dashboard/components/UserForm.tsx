"use client";
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
    <form action={addUser} className="flex flex-col align-center gap-4">
      <div className="flex flex-row">
        <label htmlFor="name">Nom: </label>
        <input
          className="p-2 border border-black rounded-md"
          type="text"
          name="name"
        />
      </div>
      <div className="flex flex-row">
        <label htmlFor="email">Email: </label>
        <input
          className="p-2 border border-black rounded-md"
          type="text"
          name="email"
        />
      </div>
      <div className="flex flex-row">
        <label htmlFor="password">Mot de passe: </label>
        <input
          className="p-2 border border-black rounded-md"
          type="password"
          name="password"
          minLength={8}
          required
        />
      </div>
      <div className="flex flex-row">
        <label htmlFor="phone">N° de téléphone: </label>
        <input
          className="p-2 border border-black rounded-md"
          type="text"
          name="phone"
        />
      </div>
      <div className="flex flex-row">
        <label htmlFor="role">Rôle: </label>
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
          name="role"
        >
          <option value="">--Choisir une option--</option>
          <option value="superadmin">superadmin</option>
          <option value="admin">admin</option>
          <option value="client">client</option>
          <option value="collector">collector</option>
        </select>
      </div>
      <div className="flex flex-row">
        <label htmlFor="organisation">Organisation: </label>
        <select
          value={selectedOrga}
          onChange={(e) => setSelectedOrga(e.target.value)}
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
          name="organisationId"
        >
          <option value="">--Choisir une option--</option>
          {organisationInfos.map((orga: Organisation) => (
            <option value={orga.id}>{orga.name}</option>
          ))}
          ;
        </select>
      </div>
      <button className="border border-black rounded-md hover:bg-slate-300">
        Confirmer
      </button>
    </form>
  );
};

export default UserForm;
