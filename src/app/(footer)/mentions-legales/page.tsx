const MentionsLegales = () => {
  return (
    <>
      <div className="flex flex-col py-6 gap-6 px-6 md:px-48 text-sm md:text-sm">
        <h1 className="pt-6 text-xl md:text-3xl text-oliveGreen">
          Mentions Légales
        </h1>
        <p>
          <u>Propriétaire et Responsable du site :</u>
        </p>
        <p>
          <b>La société accescollect,</b>
        </p>
        <p> Société Anonyme au capital de 2000 euros</p>
        <p> Immatriculée au registre du commerce de Toulon</p>
        <p> Sous le numéro 949 820 013 (00017)</p>
        <p>
          {" "}
          Et dont le siège social est situé au 205 place de la liberté 83000
          Toulon
        </p>
        <p>
          {" "}
          Responsable de publication : Maud Tribaudeau - contact@tripluch.fr –
          06 81 55 41 85
        </p>
        <p>
          <u> Hébergeur :</u>
        </p>
        <p> Vercel</p>
        <p> Vercel Inc – 340 S Lemon Ave #4133 - Walnut, CA 91789</p>
      </div>
    </>
  );
};

export default MentionsLegales;
