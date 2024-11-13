import { getUsersWithOrganisationName } from "@/lib/userQuery";
import UserForm from "../components/UserForm";
import { getOrganisations } from "@/lib/organisationQuery";

export default async function UsersPage() {
  const dataUsers = await getUsersWithOrganisationName();
  const dataOrganisations = await getOrganisations();

  return (
    <div className="flex justify-around">
      <div className="my-10">
        <h1 className="text-center text-2xl py-4">Ajouter un utilisateur :</h1>
        <UserForm organisationInfos={dataOrganisations} />
      </div>

      <div className="my-10">
        <h1 className="text-center text-2xl py-4">Liste des utilisateurs :</h1>

        <table className="table-auto text-center">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-2 border border-black">Noms</th>
              <th className="p-2 border border-black">Emails</th>
              <th className="p-2 border border-black">Rôles</th>
              <th className="p-2 border border-black">Entreprises</th>
            </tr>
          </thead>
          <tbody>
            {dataUsers.map((data) => (
              <tr key={data.user.id}>
                <td className="p-2 border border-black">{data.user.name}</td>

                <td className="p-2 border border-black">{data.user.email}</td>
                <td className="p-2 border border-black">{data.user.role}</td>
                <td className="p-2 border border-black">
                  {data.organisation?.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
