import { addOrganisation } from "@/lib/organisationQuery";

const OrgaForm = () => {
  return (
    <form action={addOrganisation} className="flex flex-col align-center gap-4">
      <div className="flex flex-row">
        <label htmlFor="name">{"Nom de l'organisation:"}</label>
        <input
          className="p-2 border border-black rounded-md"
          type="text"
          name="name"
        />
      </div>
      <div className="flex flex-row">
        <label htmlFor="address">{"Adresse: "}</label>
        <input
          className="p-2 border border-black rounded-md"
          type="text"
          name="address"
        />
      </div>
      <div className="flex flex-row">
        <label htmlFor="phone">{"N° de téléphone: "}</label>
        <input
          className="p-2 border border-black rounded-md"
          type="text"
          name="phone"
        />
      </div>
      <div className="flex flex-row">
        <label htmlFor="contact">{"Nom du contact: "}</label>
        <input
          className="p-2 border border-black rounded-md"
          type="text"
          name="contact"
        />
      </div>
      <div className="flex flex-row">
        <label htmlFor="agrement">{"N° d'agrément:"} </label>
        <input
          className="p-2 border border-black rounded-md"
          type="text"
          name="agrement"
        />
      </div>
      <button className="border border-black rounded-md hover:bg-slate-300">
        Confirmer
      </button>
    </form>
  );
};

export default OrgaForm;
