const MentionsLegales = () => {
  return (
    <div className="flex flex-col py-6 gap-6 px-6 md:px-48 text-sm md:text-sm">
      <h1 className="pt-6 md:pt-12 text-4xl font-title text-primary-green">
        {"Mentions Légales"}
      </h1>
      <p>
        <u>{"Propriétaire et Responsable du site :"}</u>
      </p>
      <p>
        <b>{"La société tripluch,"}</b>
      </p>
      <p> {"Société Anonyme au capital de 2000 euros"}</p>
      <p> {"Immatriculée au registre du commerce de Draguignan"}</p>
      <p> {"Sous le numéro 949 820 013 (00017)"}</p>
      <p>
        {" "}
        {
          "Et dont le siège social est situé au 2 impasse des Iris 83136 GAREOULT"
        }
      </p>
      <p>
        {" "}
        {
          "Responsable de publication : Maud Tribaudeau - contact@tripluch.fr – 06 81 55 41 85"
        }
      </p>
      <p>
        <u> {"Hébergement des données :"}</u>
      </p>
      <p> {"Serveur AWS : AWS Paris (eu-west-3)"}</p>
    </div>
  );
};

export default MentionsLegales;
