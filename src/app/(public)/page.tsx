import { Metadata } from "next";
import Image from "next/image";
import LogButton from "../components/button/logButton";

export const metadata: Metadata = {
  title: "Access Collect",
  description: "Access Collect - votre outil pour gérer vos collectes",
};

export default function Home() {
  return (
    <>
      <div className="mx-0 md:mx-0 lg:mx-24 lg:mt-12">
        {/* section de présentation */}
        <section className="text-midnightBlue mb-16">
          <div className="pt-8 mb-4 h-52">
            <Image
              className="hidden md:block md:absolute md:top-[136px] md:left-5 lg:absolute lg:top-[200px] lg:left-28"
              src="/decoration.svg"
              alt={"élément décoratif"}
              width={70}
              height={70}
            />
            <p className="mx-4 text-xl font-section md:w-2/3 md:text-4xl md:ml-16 md:mr-0 md:mt-12 lg:leading-[2] lg:w-[600px]">
              {
                "Optimisez la collecte des déchets en entreprise avec une solution"
              }
              <span className="text-lightOrange">{" inclusive"}</span> {"et"}{" "}
              <span className="text-lightOrange">{"écologique"}</span>
            </p>
          </div>
          <div className="hidden md:block md:ml-16 md:mt-16 lg:mt-52">
            <LogButton label={"Demander une démo"} />
          </div>
          <Image
            className="absolute top-64 left-24 md:bg-transparentImperialYellow md:top-40 md:rounded-full md:p-4 md:left-[880px] md:w-[400px] md:h-[400px] lg:left-[900px] lg:top-52 lg:w-[600px] lg:h-[600px]"
            src="/containeurs.svg"
            alt={"photo de poubelle"}
            width={250}
            height={100}
          />
          <Image
            className="absolute top-[320px] left-3 block md:hidden"
            src="/decoration.svg"
            alt={"photo de poubelle"}
            width={70}
            height={70}
          />
          <div className="bg-transparentImperialYellow py-4 mt-12 h-52 md:bg-white md:mt-0 lg:mt-0">
            <p className="mx-4 pt-12  md:w-2/3 md:text-xl md:ml-16 md:mr-0 lg:w-[600px] lg:leading-[2]">
              {
                "Une application pour faciliter la collecte des déchets recyclables en entreprise, tout en favorisant l’inclusion des personnes en situation de handicap."
              }
            </p>
          </div>
        </section>

        {/* section Pourquoi choisir notre application? */}

        <section className="text-midnightBlue lg:mt-24">
          <h1 className="text-center text-xl text-brightOrange font-section md:text-4xl">
            {"Pourquoi choisir notre application ?"}
          </h1>
          <div className="md:flex md:justify-start md:ml-24 lg:ml-48 lg:mt-10 ">
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

        <section className="text-midnightBlue mt-12 lg:mt-24">
          <div className="ml-3 relative">
            <Image
              src="/titreMobile.png"
              alt={"bandeau titre décoratif"}
              width={440}
              height={1}
              className="z-0 w-[440px] h-[90px]"
            />
            <h1 className="z-10 top-8 left-10 absolute text-center text-2xl text-lightOrange font-section">{"Les fonctionnalités"}</h1>
          </div>

          {/* planifier */}
          <div className="relative">
            <div className="mt-10 ml-8">
              <Image
                src="/planifier.png"
                alt={"image représentant une personne qui planifie ses tâches"}
                width={250}
                height={1}
                className="w-[150px] h-[150px]"
              />
            </div>
            <div>
              <h2 className=" absolute top-12 left-32 bg-white text-center text-lightOrange text-lg shadow-md shadow-lightOrange w-40 h-10">{"PLANIFIER"}</h2>
            </div>
          </div>
          <div>
            <p className="text-midnightBlue mx-4 mt-4">{"Planifiez et anticipez vos collectes avec une gestion centralisée"}</p>
          </div>
        </section>
      </div>
    </>
  );
}
