import { getOrganisations } from "@/lib/organisationQuery";

import OrgaForm from "@/app/dashboard/components/OrgaForm";
import { Organisation } from "@/lib/schema/organisation";

export default async function OrganisationsPage() {
  const dataOrganisations = await getOrganisations();

  return (
    <div className="flex justify-around">
      <div className="my-10">
        <h1 className="text-center text-2xl py-4">
          Ajouter une organisation :
        </h1>
        <OrgaForm />
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
            {dataOrganisations.map((organisation: Organisation) => (
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
