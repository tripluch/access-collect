import { getOrganisations } from "@/lib/organisationQuery";
import UserForm from "../_components/UserForm";

export default async function addUserPage() {
  const dataOrganisations = await getOrganisations();

  return (
    <>
      <div className="w-full flex flex-col justify-center">
        <div className="text-midnightBlue font-title font-bold  text-2xl text-center my-6">
          {"UTILISATEUR"}
        </div>
        <div className="shadow-md shadow-lightOliveGreen mx-6 rounded-b-lg my-6 w-54 md:w-[500px]">
          <div className="bg-transparentImperialYellow p-2 text-oliveGreen text-center uppercase font-title">
            {"AJOUTER UN UTILISATEUR :"}
          </div>
          <UserForm organisationInfos={dataOrganisations} />
        </div>
      </div>
    </>

  );
}
