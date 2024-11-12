import { getCollectedPoint } from "@/lib/collectedPointQuery";
import Image from 'next/image';
require("dotenv").config();

export default async function CollectedPointList() {
    const data = await getCollectedPoint();

    return (
        <>
            <div className="max-sm:hidden mt-6">
                <table>
                    <tr>
                        <th>Nom</th>
                        <th>Adresse</th>
                        <th>Jour de collecte</th>
                        <th>Consulter</th>
                    </tr>
                    {data.map((collectedPoint) => (
                        <tr key={collectedPoint.id}>
                            <td>{collectedPoint.name}</td>
                            <td>{collectedPoint.address}</td>
                            <td>{collectedPoint.daysOfCollect}</td>
                        </tr>
                    ))}
                </table>
            </div>
            <div className="md:hidden ">
                {data.map((collectedPoint) => (
                    <div className="shadow-md shadow-lightOliveGreen mx-6 rounded-b-lg my-6">
                        <div className="bg-transparentImperialYellow p-2 text-oliveGreen text-center uppercase font-title">{collectedPoint.name}</div>
                        <div className="flex items-center p-2">
                            <div className="text-midnightBlue">{collectedPoint.address}</div>
                            <div>
                                <Image src="/consulter.svg" alt="voir point de collecte en détail" width={80} height={120} className='' />
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </>

    );
}