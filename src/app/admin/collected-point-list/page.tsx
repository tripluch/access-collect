import CollectedPointList from "../components/CollectedPointList"

const collectedPointList = () => {
    return (
        <>
            <div className="text-midnightBlue text-title text-bold  text-2xl">POINT DE COLLECTE</div>
            <div className="text-2xl text-title text-oliveGreen">Liste de mes points de collectes</div>
            <CollectedPointList />
        </>
    )
}

export default collectedPointList