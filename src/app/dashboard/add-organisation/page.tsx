import OrgaForm from "../components/OrgaForm";

export default async function addOrganisationPage() {
  return (
    <div className="my-10">
      <h1 className="text-center text-2xl py-4">
        {"Ajouter une organisation :"}
      </h1>
      <OrgaForm />
    </div>
  );
}
