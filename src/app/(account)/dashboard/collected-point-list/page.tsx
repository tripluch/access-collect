import CreateButton from "@/app/components/button/createButton";
import CollectedPointList from "../_components/CollectedPointList";
import Link from "next/link";

const collectedPointList = async () => {
  return (
    <>
      <div className="flex flex-col gap-y-4 w-full">
        <div className="text-midnightBlue font-title font-bold text-2xl text-center mt-4">
          {"POINT DE COLLECTE"}
        </div>
        <Link href="/dashboard/add-collected-point">
          <CreateButton name={"Créer un point de collecte"} />
        </Link>
        <div className="mx-4 flex justify-center flex-col">
          <h1 className="text-2xl font-title text-oliveGreen text-center ">
            {"Liste de mes points de collectes : "}
          </h1>
        </div>
        <CollectedPointList />
      </div>
    </>
  );
};

export default collectedPointList;
