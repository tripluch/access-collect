import { getOrganisation, getUsersWithOrganisationName } from "@/lib/database";
import Form from "@/app/dashboard/components/Form";

export default async function UsersOrganisationsPage() {
  const dataUsers = await getUsersWithOrganisationName();
  const dataOrganisations = await getOrganisation();

  return (
    <div className="flex justify-around">
      <div>
        <Form />
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

      <div className="my-10">
        <h1 className="text-center text-2xl py-4">
          Liste des organisations :{" "}
        </h1>
        <table className="table-auto text-center">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-2 border border-black">Noms</th>
              <th className="p-2 border border-black">Contacts</th>
              <th className="p-2 border border-black">Numéros de téléphone</th>
            </tr>
          </thead>
          <tbody>
            {dataOrganisations.map((organisation) => (
              <tr key={organisation.id}>
                <td className="p-2 border border-black">{organisation.name}</td>
                <td className="p-2 border border-black">
                  {organisation.contact}
                </td>
                <td className="p-2 border border-black">
                  {organisation.phoneNumber}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div></div>
      </div>
    </div>
  );
}
