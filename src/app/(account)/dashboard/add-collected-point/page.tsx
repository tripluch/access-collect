import CollectedPointForm from "@/app/(account)/dashboard/_components/CollectedPointForm";
import { getOrganisations } from "@/lib/organisationQuery";

export default async function AddCollectedPoint() {
  const dataOrganisations = await getOrganisations();

  return (
    <>
      <div className="text-midnightBlue font-title font-bold  text-2xl text-center my-6">
        POINT DE COLLECTE
      </div>
      <div className="shadow-md shadow-lightOliveGreen mx-6 rounded-b-lg my-6 w-54 md:w-[500px]">
        <div className="bg-transparentImperialYellow p-2 text-oliveGreen text-center uppercase font-title">
          AJOUTER UN POINT DE COLLECTE
        </div>
        <CollectedPointForm organisationInfos={dataOrganisations} />
      </div>
    </>
  );
}
