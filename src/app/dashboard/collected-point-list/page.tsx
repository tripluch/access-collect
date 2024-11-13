import CreateButton from "@/app/components/button/createButton"
import CollectedPointList from "../components/CollectedPointList"

const collectedPointList = () => {
    return (
        <>
            <div className="text-midnightBlue font-title font-bold  text-2xl text-center my-6">POINT DE COLLECTE</div>
            <CreateButton />
            <div className="text-2xl font-title text-oliveGreen text-center my-6">Liste de mes points de collectes</div>
            <CollectedPointList />
        </>
    )
}

export default collectedPointList