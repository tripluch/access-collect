"use client";
import {
  addCollectedPoint,
  getClientsFromOrganisation,
} from "@/lib/collectedPointQuery";
import { CheckboxDaysOfCollect } from "./CheckboxDaysOfCollect";
import CancelButton from "@/app/components/button/cancelButton";
import { InputForm } from "@/app/components/InputForm";
import { Organisation } from "@/lib/schema/organisation";
import { SetStateAction, useEffect, useState } from "react";
import OrangeButton from "@/app/components/button/orangeButton";
import { User } from "@/lib/schema/user";
import { text } from "stream/consumers";

export const CollectedPointForm = ({
  organisationInfos,
}: {
  organisationInfos: Organisation[];
}) => {
  const [selectedOrga, setSelectedOrga] = useState<string>("");
  const [clients, setClients] = useState<User[]>([]);
  const [selectedClient, setSelectedClient] = useState<string>("");
  const [checkDeliveryDay,setCheckDeliveryDay]=useState<string[]>([]);
    
 
    const changer= (e: { target: { checked: boolean; value: string; }; })=>{
      let checked=e.target.checked;
      console.log(checked);
      console.log(typeof checkDeliveryDay.join(','))
      let value=e.target.value;
      if(checked){
       setCheckDeliveryDay([...checkDeliveryDay,value])
       console.log(checkDeliveryDay)
      }else{
       setCheckDeliveryDay(checkDeliveryDay.filter((verification)=>verification!==value))
       console.log(checkDeliveryDay)
      }
       }



  useEffect(() => {
    const fetchClients = async () => {
      if (selectedOrga) {
        try {
          const result = await getClientsFromOrganisation(selectedOrga);
          if (result) {
            setClients(result);
          }
        } catch (error) {
          console.error("Error retrieving clients :", error);
        }
      }
    };
    fetchClients();
  }, [selectedOrga]);

  return (
    <>
    <form
      action={addCollectedPoint}
      className="flex flex-col align-center gap-4 px-3 my-4"
    >
      <InputForm
        name={"name"}
        label={"Nom du point de collecte :"}
        placeholder={"Point Exemple"}
      />
      <InputForm
        name={"address"}
        label={"Adresse: "}
        placeholder={"3 rue de l'exemple 01234 Exemple-Ville"}
      />
      <div className="text-oliveGreen uppercase font-title text-sm">
        {"Jour de collecte: "}
      </div>
      <div className="flex flex-row flex-wrap">
        <CheckboxDaysOfCollect id="monday" label={"Lundi"} value={"lundi"} onChange={changer}/>
        <CheckboxDaysOfCollect  id="tuesday" label={"Mardi"} value={"mardi"} onChange={changer} />
        <CheckboxDaysOfCollect  id="wednesday" label={"Mercredi"} value={"mercredi"} onChange={changer}/>
        <CheckboxDaysOfCollect  id="thursday" label={"Jeudi"} value={"jeudi"} onChange={changer}/>
        <CheckboxDaysOfCollect  id="friday" label={"Vendredi"} value={"vendredi"} onChange={changer} />
      </div>
      
      <div className="flex flex-col">
        <label
          className="text-oliveGreen uppercase font-title text-sm"
          htmlFor={"organisationId"}
        >
          {"Nom de l'organisation:"}
        </label>
        <select
          value={selectedOrga}
          onChange={(e) => setSelectedOrga(e.target.value)}
          className=" block appearance-none bg-transparentLightOrange leading-tight focus:outline-none focus:bg-transparentBrightOrange  text-midnightBlue rounded-md text-sm w-72 h-8 md:w-96"
          name="organisationId"
        >
          <option value="" className="hover:bg-brightOrange">
            --Choisir une option--
          </option>
          {organisationInfos.map((orga: Organisation, index) => (
            <option key={index} value={orga.id}>
              {orga.name}
            </option>
          ))}
          ;
        </select>
      </div>
      <div className="flex flex-col">
        <label
          className="text-oliveGreen uppercase font-title text-sm"
          htmlFor={"clientId"}
        >
          {"Nom du client:"}
        </label>
        <select
          value={selectedClient}
          onChange={(e) => setSelectedClient(e.target.value)}
          className="block appearance-none bg-transparentLightOrange leading-tight focus:outline-none focus:bg-transparentBrightOrange text-midnightBlue rounded-md text-sm w-72 h-8 md:w-96"
          name="clientId"
          disabled={clients.length === 0}
        >
          <option value="">--Choisir une option--</option>
          {clients.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-around">
        <CancelButton />
        <OrangeButton label={"Confirmer"} route={""}  />
      </div>
    </form>
    </>
  );
};

export default CollectedPointForm;
