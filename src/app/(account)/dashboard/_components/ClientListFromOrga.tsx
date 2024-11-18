import { getClientsFromOrganisation } from "@/lib/collectedPointQuery";
import { useState } from "react";
import { User } from "@/lib/schema/user";

export const ClientListFromOrga = async (props: any) => {
  const dataClient = await getClientsFromOrganisation(props.Client);
  const [selectedClient, setSelectedClient] = useState("");

  return (
    <>
      <div className="flex flex-col">
        <label
          className="text-oliveGreen uppercase font-title text-sm"
          htmlFor={"clientId"}
        >
          {"Nom du client:"}
        </label>
        <select
          value={selectedClient}
          onChange={(e) => setSelectedClient(e.target.value)}
          className=" block appearance-none bg-transparentLightOrange leading-tight focus:outline-none focus:bg-transparentBrightOrange  text-midnightBlue rounded-md text-sm w-72 h-8 md:w-96"
          name="clientId"
        >
          <option value="" className="hover:bg-brightOrange">
            --Choisir une option--
          </option>
          {dataClient?.map((user: User, index) => (
            <option key={index} value={user.id}>
              {user.name}
            </option>
          ))}
          ;
        </select>
      </div>
    </>
  );
};
