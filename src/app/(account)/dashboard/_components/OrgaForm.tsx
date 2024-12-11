"use client";
import CancelButton from "@/app/components/button/cancelButton";
import OrangeButton from "@/app/components/button/orangeButton";
import { InputForm } from "@/app/components/InputForm";
import { addOrganisation } from "@/lib/organisationQuery";

const OrgaForm = () => {
  return (
    <form
      action={addOrganisation}
      className="flex flex-col align-center gap-4 px-3 my-4"
    >
      <InputForm name={"name"} label={"Nom: "} placeholder={"Nom"} />
      <InputForm name={"address"} label={"Adresse: "} placeholder={"Adresse"} />
      <InputForm
        name={"phone"}
        label={"N° de téléphone: "}
        placeholder={"Téléphone"}
      />
      <InputForm
        name={"contact"}
        label={"Nom du contact: "}
        placeholder={"Nom contact"}
      />
      <InputForm
        name={"agrement"}
        label={"N° d'agrément: "}
        placeholder={"N° d'agrément"}
      />
      <div className="flex justify-around">
        <CancelButton />
        <OrangeButton label={"Confirmer"} route={"/dashboard/organisation"} />
      </div>
    </form>
  );
};

export default OrgaForm;
