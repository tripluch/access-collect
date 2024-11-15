import CreateButton from "@/app/components/button/createButton";
import { getOrganisations } from "@/lib/organisationQuery";
import { Organisation } from "@/lib/schema/organisation";
import Link from "next/link";

export default async function OrganisationsPage() {
  const dataOrganisations = await getOrganisations();

  return (
    <div className="flex justify-around flex-col w-full">
      <div className="text-midnightBlue font-title font-bold  text-2xl text-center my-6 w-full">
        {"ORGANISATION"}
      </div>
      <Link href="/dashboard/add-organisation">
        <CreateButton name={"Créer une organisation"} />
      </Link>

      <div className="my-10 mx-4 flex justify-center flex-col">
        <h1 className="text-2xl font-title text-oliveGreen text-center my-6">
          {"Liste des organisations : "}
        </h1>
        <div className="max-sm:hidden mt-6 text-midnightBlue flex justify-center mb-6">
          <table className="border border-oliveGreen">
            <thead>
              <tr className="border border-oliveGreen text-center">
                <th className="px-8">{"Noms"}</th>
                <th className="px-8">{"Contacts"}</th>
                <th className="px-8">{"Numéros de téléphone"}</th>
              </tr>
            </thead>
            <tbody>
              {dataOrganisations.map((organisation: Organisation, index) => (
                <tr
                  className={`border border-oliveGreen ${
                    index % 2 === 0 ? "bg-transparentOliveGreen" : "bg-white"
                  }`}
                  key={organisation.id}
                >
                  <td className="px-8">{organisation.name}</td>
                  <td className="px-8">{organisation.contact}</td>
                  <td className="px-8">{organisation.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden ">
          {dataOrganisations.map((organisation: Organisation) => (
            <div
              key={organisation.id}
              className="shadow-md shadow-lightOliveGreen mx-6 rounded-b-lg my-6"
            >
              <div className="bg-transparentImperialYellow p-2 text-oliveGreen text-center uppercase font-title">
                {organisation.name}
              </div>
              <div className="flex items-center p-2">
                <div className="text-midnightBlue w-72">
                  {organisation.contact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
