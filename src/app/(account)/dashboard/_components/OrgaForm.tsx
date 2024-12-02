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
      <InputForm
        name={"name"}
        label={"Nom: "}
        placeholder={"OrganisationExemple"}
      />
      <InputForm
        name={"address"}
        label={"Adresse: "}
        placeholder={"1 rue de l'exemple 01234 ExempleVille"}
      />
      <InputForm
        name={"phone"}
        label={"N° de téléphone: "}
        placeholder={"0123456789"}
      />
      <InputForm
        name={"contact"}
        label={"Nom du contact: "}
        placeholder={"Luc Exemple"}
      />
      <InputForm
        name={"agrement"}
        label={"N° d'agrément: "}
        placeholder={"AGR-2023-0567"}
      />
      <div className="flex justify-around">
        <CancelButton />
        <OrangeButton label={"Confirmer"} route={"/dashboard/organisation"} />
      </div>
    </form>
  );
};

export default OrgaForm;
