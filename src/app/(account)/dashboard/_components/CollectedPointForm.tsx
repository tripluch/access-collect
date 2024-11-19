"use client";
import { addCollectedPoint } from "@/lib/collectedPointQuery";
import { CheckboxDaysOfCollect } from "./CheckboxDaysOfCollect";
import CancelButton from "@/app/components/button/cancelButton";
import { InputForm } from "@/app/components/InputForm";
import { Organisation } from "@/lib/schema/organisation";
import { useState } from "react";
import OrangeButton from "@/app/components/button/orangeButton";
//import { getClientsFromOrganisation } from "@/lib/collectedPointQuery";

export const CollectedPointForm = ({
  organisationInfos,
}: {
  organisationInfos: Organisation[];
}) => {
  const [selectedOrga, setSelectedOrga] = useState("");
  //const [selectedClient, setSelectedClient] = useState("");

  //const dataClient = getClientsFromOrganisation(selectedOrga);

  return (
    <form
      action={addCollectedPoint}
      className="flex flex-col align-center gap-4 px-3 my-4"
    >
      <InputForm name={"name"} label={"Nom du point de collecte :"} />
      <InputForm name={"address"} label={"Adresse: "} />
      <div className="text-oliveGreen uppercase font-title text-sm">
        {"Jour de collecte: "}
      </div>
      <div className="flex flex-row flex-wrap">
        <CheckboxDaysOfCollect label={"Monday"} value={"monday"} />
        <CheckboxDaysOfCollect label={"Tuesday"} value={"tuesday"} />
        <CheckboxDaysOfCollect label={"Wednesday"} value={"wednesday"} />
        <CheckboxDaysOfCollect label={"Thursday"} value={"thursday"} />
        <CheckboxDaysOfCollect label={"Friday"} value={"friday"} />
      </div>
      <div className="flex flex-col">
        <label
          className="text-oliveGreen uppercase font-title text-sm"
          htmlFor={"organisationId"}
        >
          {"Nom de l'organisation:"}
        </label>
        <select
          value={selectedOrga}
          onChange={(e) => setSelectedOrga(e.target.value)}
          className=" block appearance-none bg-transparentLightOrange leading-tight focus:outline-none focus:bg-transparentBrightOrange  text-midnightBlue rounded-md text-sm w-72 h-8 md:w-96"
          name="organisationId"
        >
          <option value="" className="hover:bg-brightOrange">
            --Choisir une option--
          </option>
          {organisationInfos.map((orga: Organisation, index) => (
            <option key={index} value={orga.id}>
              {orga.name}
            </option>
          ))}
          ;
        </select>
      </div>
      <InputForm name={"clientId"} label={"Nom du client: "} />
      <div className="flex justify-around">
        <CancelButton />
        <OrangeButton label={"Confirmer"} route={""} />
      </div>
    </form>
  );
};

export default CollectedPointForm;
