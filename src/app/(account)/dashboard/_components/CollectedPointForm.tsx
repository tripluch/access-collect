"use client";
import { addCollectedPoint } from "@/lib/collectedPointQuery";
import { CheckboxDaysOfCollect } from "./CheckboxDaysOfCollect";
import { InputForm } from "./InputForm";
import ValidateButton from "@/app/components/button/validateButton";

export const CollectedPointForm = () => {
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
      <InputForm name={"clientId"} label={"Nom du client: "} />
      <InputForm name={"organisationId"} label={"Nom de l'organisation:"} />
      <ValidateButton label={"Confirmer"} />
    </form>
  );
};

export default CollectedPointForm;
