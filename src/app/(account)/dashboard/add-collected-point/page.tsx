import CollectedPointForm from "@/app/(account)/dashboard/_components/CollectedPointForm";
import { getOrganisations } from "@/lib/organisationQuery";


export default async function AddCollectedPoint() {
  const dataOrganisations = await getOrganisations();
 
  return (
    <>
      <div className="flex flex-col items-center w-full gap-y-10">
        <div className="text-midnightBlue font-title font-bold  text-2xl text-center mt-4">
          {"POINT DE COLLECTE"}
        </div>
        <div className="shadow-md shadow-lightOliveGreen rounded-b-lg  w-54 md:w-[500px] flex flex-col justify-center">
          <div className="bg-transparentImperialYellow p-2 text-oliveGreen text-center uppercase font-title">
            {"AJOUTER UN POINT DE COLLECTE"}
          </div>
          <CollectedPointForm organisationInfos={dataOrganisations} />
        </div>
      </div>
    </>
  );
}
