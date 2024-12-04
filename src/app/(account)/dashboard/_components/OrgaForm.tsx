"use client";
import CancelButton from "@/app/components/button/cancelButton";
import OrangeButton from "@/app/components/button/orangeButton";
import { InputForm } from "@/app/components/InputForm";
import { InputFormRequired } from "@/app/components/InputFormRequired";
import { addOrganisation } from "@/lib/organisationQuery";

const OrgaForm = () => {
  const handleSubmit = (formData : FormData) => { 
    
    const data = Object.fromEntries(formData); 
    console.log(data)};
  return (
    <form
      action={handleSubmit}
      className="flex flex-col align-center gap-4 px-3 my-4"
    >
      <InputFormRequired
        name={"name"}
        label={"Nom: "}
        placeholder={"OrganisationExemple"}
      />
      <InputFormRequired
        name={"address"}
        label={"Adresse: "}
        placeholder={"1 rue de l'exemple 01234 ExempleVille"}
      />
      <InputFormRequired
        name={"phone"}
        label={"N° de téléphone: "}
        placeholder={"Téléphone"}
      />
      <InputFormRequired
        name={"contact"}
        label={"Nom du contact: "}
        placeholder={"Nom contact"}
      />
      <InputFormRequired
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
