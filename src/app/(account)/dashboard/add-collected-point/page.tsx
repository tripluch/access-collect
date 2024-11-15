import CollectedPointForm from "@/app/(account)/dashboard/_components/CollectedPointForm";


export default function AddCollectedPoint() {
  return (
    <>
      <div className="text-midnightBlue font-title font-bold  text-2xl text-center my-6">
        POINT DE COLLECTE
      </div>
      <div className="shadow-md shadow-lightOliveGreen mx-6 rounded-b-lg my-6">
        <div className="bg-transparentImperialYellow p-2 text-oliveGreen text-center uppercase font-title">
          AJOUTER UN POINT DE COLLECTE
        </div>
        <CollectedPointForm />
      </div>
    </>
  );
}
