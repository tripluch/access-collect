import { Metadata } from "next";
import Image from "next/image";
import LogButton from "../components/button/logButton";
import LoginCollectButton from "./_components/LoginCollectButton";

export const metadata: Metadata = {
  title: "Access Collect",
  description: "Access Collect - votre outil pour gérer vos collectes",
};

export default function Home() {


  return (
    <>
      {/* section connexion pour le collecteur en version mobile uniquement */}
      <LoginCollectButton />

      {/* section de présentation */}
      <section className="text-midnightBlue md:bg-[url('/backgroundHomepage.svg')] md:bg-cover md:bg-center md:bg-no-repeat">
        <div className="md:mx-24 lg:mx-48 md:flex md:h-screen">
          {/* partie de gauche */}
          <div className="w-full md:flex md:flex-col md:justify-around md:h-3/4 md:mt-12 md:w-1/2">
            <div className="h-64 mt-20 mx-8 md:h-auto md:mt-0 md:mx-0 ">
              <p className="relative text-xl font-section md:text-2xl lg:text-4xl  lg:leading-[2] lg:w-[600px] 
                        before:content-[''] before:absolute before:bg-[url('/decoration.svg')] before:bg-contain before:bg-no-repeat
                        before:w-[50px] before:h-[50px] md:before:w-[70px] md:before:h-[70px] 
                        before:top-0 before:-left-2 md:before:-top-2 md:before:-left-4 lg:before:top-0 lg:before:-left-4
                        before:translate-x-[-50%] before:translate-y-[-50%] 
                        before:scale-75 md:before:scale-100 lg:before:scale-125 ">
                {"Optimisez la collecte des déchets en entreprise avec une solution"}
                <span className="text-lightOrange">{" inclusive"}</span> {"et"}{" "}
                <span className="text-lightOrange">{"écologique"}</span>
              </p>
            </div>
            <div className="hidden md:block">
              <LogButton label={"Demander une démo"} />
            </div>
            <div className="bg-transparentImperialYellow pt-24 pb-10 md:bg-transparent md:pt-auto md:pb-auto
                            before:content-[''] before:absolute before:bg-[url('/containeurs.svg')] before:bg-contain before:bg-no-repeat
                            before:block md:before:hidden
                            before:w-[320px] before:h-[320px]
                            before:top-[410px]  before:left-1/2 before:-translate-x-1/2 ">
              <p className="mx-6 relative text-md md:w-full md:text-xl lg:w-[600px] lg:leading-[2] md:mx-0">
                {
                  "Une application pour faciliter la collecte des déchets recyclables en entreprise, tout en favorisant l’inclusion des personnes en situation de handicap."
                }
              </p>
              <div className="block flex justify-center mt-10 md:hidden">
                <LogButton label={"Demander une démo"} />
              </div>
            </div>
          </div>


          {/* partie de droite */}

          <div className="hidden md:flex md:items-center md:justify-center md:h-3/4 md:mt-12 md:w-1/2">
            {/* Image de la poubelle */}
            <Image
              className="w-full"
              src="/containeurs.svg"
              alt={"photo de poubelle"}
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* section Pourquoi choisir notre application? */}

      <section className="text-midnightBlue mt-24 md:mx-24 lg:mx-48 md:h-screen">
        <h1 className="text-center text-xl text-brightOrange font-section md:text-4xl">
          {"Pourquoi choisir notre application ?"}
        </h1>
        <div className="md:flex md:justify-start md:ml-24 lg:mt-10 ">
          <div className="flex justify-center my-8 lg:mt-12">
            <Image
              src="/mobile.png"
              alt={"exemple d'une vue mobile sur un téléphone"}
              width={180}
              height={300}
              className="w-[180px] h-[300px] md:w-64 md:h-96 lg:w-80 lg:h-[600px]"
            />
          </div>
          <div className="mx-4">
            <div className="flex items-start my-4">
              <Image
                className="block md:hidden lg:hidden"
                src="/puceTri.png"
                alt={"image puce tri sélectif"}
                width={20}
                height={5}
              />
              <Image
                className="hidden md:block md:absolute md:ml-16  md:mt-6 md:z-0 lg:ml-24 lg:mt-20"
                src="/roundedDecoration1.png"
                alt={"élément décoratif jaune"}
                width={180}
                height={130}
              />
              <p className="ml-4 md:text-xl md:shadow-md md:shadow-lightOliveGreen md:rounded-md md:px-8 md:py-4 md:w-[600px] md:ml-28 md:mt-24 md:z-10 md:bg-white lg:mt-40 lg:ml-36">
                {"Accessible à tous, simple et intuitif"}
              </p>
            </div>
            <div className="flex items-start my-4 md:my-8">
              <Image
                className="block md:hidden lg:hidden"
                src="/puceTri.png"
                alt={"image puce tri sélectif"}
                width={20}
                height={5}
              />
              <Image
                className="hidden md:block md:absolute md:ml-16  md:z-0 md:ml-[600px] lg:mt-20"
                src="/roundedDecoration2.png"
                alt={"élément décoratif jaune"}
                width={200}
                height={200}
              />
              <p className="ml-4 w-80 md:text-xl md:shadow-md md:shadow-lightOliveGreen md:rounded-md md:px-8 md:py-4 md:w-[600px] md:mt-12 md:z-10 md:bg-white md:ml-28 lg:mt-32">
                {
                  "Favorisez l’inclusion sociale en collaborant avec des collecteurs en situation de handicap, formés et motivés."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section Les fonctionnalités */}

      <section className="text-midnightBlue mt-24 lg:mt-24">
        <div className=" bg-transparentOliveGreen rounded-r-[50px] w-[90%] rotate-6 -ml-2">
          <h1 className="relative text-center text-xl text-brightOrange font-section py-10 md:py-20 md:text-4xl -rotate-6
                        before:content-[''] before:absolute before:bg-[url('/decoration.svg')] before:bg-contain before:bg-no-repeat
                        before:w-[80px] before:h-[80px] 
                        before:-mt-12 before:ml-52
                        before:scale-x-[-1] 
                        before: md:before:scale-100  lg:before:scale-125 ">{"Les fonctionnalités"}</h1>
        </div>

        <div className="flex-none lg:flex">
          {/* planifier */}
          <div>
            <div className="relative">
              <div className="mt-10 flex justify-start">
                <Image
                  src="/planifier.png"
                  alt={"image représentant une personne qui planifie ses tâches"}
                  width={250}
                  height={1}
                  className="w-[200px] h-[180px] ml-10"
                />
              </div>
              <div>
                <h2 className=" absolute top-20 left-44 bg-white text-center text-lightOrange text-2xl shadow-md shadow-lightOrange w-44 h-11 pt-1">{"PLANIFIER"}</h2>
              </div>
            </div>
            <div className="mb-10">
              <p className="text-midnightBlue mx-4 mt-4">{"Planifiez et anticipez vos collectes avec une gestion centralisée"}</p>
            </div>
          </div>

          {/* saisir */}
          <div>
            <div className="relative">
              <div className="mt-10 flex justify-end">
                <Image
                  src="/saisir.png"
                  alt={"image représentant une personne qui saisie sur un ordinateur portable"}
                  width={250}
                  height={1}
                  className="w-[200px] h-[180px] mr-10"
                />
              </div>
              <div>
                <h2 className="absolute top-20 left-8 bg-white text-center text-oliveGreen text-2xl shadow-md shadow-oliveGreen w-44 h-11 pt-1">{"SAISIR"}</h2>
              </div>
            </div>
            <div className="mb-10">
              <p className="text-midnightBlue mx-4 mt-4">{"Gagnez du temps sur la collecte et la saisie de vos données"}</p>
            </div>
          </div>
        </div>

        <div className="flex-none lg:flex">
          {/* acces client */}
          <div>
            <div className="relative">
              <div className="mt-10 flex justify-start">
                <Image
                  src="/accesClient.png"
                  alt={"image représentant une personne qui tourne une horloge pour représenter le temps qui passe"}
                  width={250}
                  height={1}
                  className="w-[200px] h-[180px] ml-10"
                />
              </div>
              <div>
                <h2 className=" absolute top-20 left-40 bg-white text-center text-strongYellow text-2xl shadow-md shadow-imperialYellow w-52 h-11 pt-1">{"ACCES CLIENT"}</h2>
              </div>
            </div>
            <div className="mb-10">
              <p className="text-midnightBlue mx-4 mt-4">{"Offrez à vos clients une vision en temps réel des collectes grâce à un tableau de bord intuitif."}</p>
            </div>
          </div>

          {/* statistiques */}
          <div>
            <div className="relative">
              <div className="mt-10 flex justify-end">
                <Image
                  src="/statistique.png"
                  alt={"image représentant une personne qui saisie sur un ordinateur portable"}
                  width={250}
                  height={1}
                  className="w-[200px] h-[180px] mr-10"
                />
              </div>
              <div>
                <h2 className="absolute top-20 left-6 bg-white text-center text-midnightBlue text-2xl shadow-md shadow-transparentMidnightBlue w-52 h-11 pt-1">{"STATISTIQUES"}</h2>
              </div>
            </div>
            <div className="mb-40">
              <p className="text-midnightBlue mx-4 mt-4">{"Recevez des rapports détaillés sur vos activités de recyclage et votre impact écologique"}</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
