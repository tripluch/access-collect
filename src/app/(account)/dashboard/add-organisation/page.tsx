import OrgaForm from "../_components/OrgaForm";

export default async function addOrganisationPage() {
  return (
    <>
      <div className="w-full flex flex-col justify-center">
        <div className="text-midnightBlue font-title font-bold  text-2xl text-center my-6">
          {"ORGANISATION"}
        </div>
        <div className="shadow-md shadow-lightOliveGreen mx-6 rounded-b-lg my-6 w-54 md:w-[500px]">
          <div className="bg-transparentImperialYellow p-2 text-oliveGreen text-center uppercase font-title">
            {"AJOUTER UNE ORGANISATION :"}
          </div>
          <OrgaForm />
        </div>
      </div>
    </>


  );
}
