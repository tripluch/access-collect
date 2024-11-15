import CreateButton from "@/app/components/button/createButton";
import CollectedPointList from "../_components/CollectedPointList";

const collectedPointList = () => {
  return (
    <>
      <div className="text-midnightBlue font-title font-bold  text-2xl text-center my-6">
        POINT DE COLLECTE
      </div>
      <CreateButton name={"Créer un point de collecte"} />
      <div className="text-2xl font-title text-oliveGreen text-center my-6">
        Liste de mes points de collectes
      </div>
      <CollectedPointList />
    </>
  );
};

export default collectedPointList;
