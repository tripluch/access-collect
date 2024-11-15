import { getOrganisations } from "@/lib/organisationQuery";
import UserForm from "../components/UserForm";

export default async function addUserPage() {
  const dataOrganisations = await getOrganisations();

  return (
    <div className="my-10">
      <h1 className="text-center text-2xl py-4">Ajouter un utilisateur :</h1>
      <UserForm organisationInfos={dataOrganisations} />
    </div>
  );
}
