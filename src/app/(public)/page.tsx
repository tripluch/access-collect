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
      {/* section de présentation */}
      <section className="text-midnightBlue mb-16">
        <div className="pt-8 mb-4 h-52">
          <Image
            className="absolute top-[136px] left-5 hidden md:block"
            src="/decoration.svg"
            alt={"élément décoratif"}
            width={70}
            height={70}
          />
          <p className="mx-4 text-xl font-section md:w-2/3 md:text-4xl md:ml-16 md:mr-0 md:mt-12">
            {
              "Optimisez la collecte des déchets en entreprise avec une solution"
            }
            <span className="text-lightOrange">{" inclusive"}</span> {"et"}{" "}
            <span className="text-lightOrange">{"écologique"}</span>
          </p>
        </div>
        <div className="hidden md:block md:ml-16 md:mt-16">
          <LogButton label={"Demander une démo"} />
        </div>
        <Image
          className="absolute top-64 left-16 md:bg-transparentImperialYellow md:top-40 md:rounded-full md:p-4 md:left-[880px] md:w-[400px] md:h-[400px]"
          src="/containeurs.svg"
          alt={"poubelle"}
          width={250}
          height={100}
        />
        <Image
          className="absolute top-[286px] left-0 block md:hidden"
          src="/decoration.svg"
          alt={"poubelle"}
          width={70}
          height={70}
        />
        <div className="bg-transparentImperialYellow py-4 h-52 md:bg-white ">
          <p className="mx-4 pt-12  md:w-2/3 md:text-xl md:ml-16 md:mr-0">
            {
              "Une application pour faciliter la collecte des déchets recyclables en entreprise, tout en favorisant l’inclusion des personnes handicapées."
            }
          </p>
        </div>
      </section>

      {/* section Pourquoi choisir notre application? */}

      <section className="text-midnightBlue">
        <h1 className="text-center text-xl text-brightOrange font-section md:text-4xl">
          {"Pourquoi choisir notre application ?"}
        </h1>
        <div className="md:flex md:justify-start md:ml-24">
          <div className="flex justify-center my-8 ">
            <Image
              src="/mobile.png"
              alt={"exemple d'une vue mobile sur un téléphone"}
              width={200}
              height={300}
            />
          </div>
          <div className="mx-4">
            <div className="flex items-start my-4">
              <Image
                className="block md:hidden"
                src="/puceTri.png"
                alt={"image puce tri sélectif"}
                width={20}
                height={5}
              />
              <Image
                className="hidden md:block md:absolute md:ml-16  md:mt-6 md:z-0"
                src="/roundedDecoration1.png"
                alt={"élément décoratif jaune"}
                width={180}
                height={130}
              />
              <p className="md:text-xl md:shadow-md md:shadow-lightOliveGreen md:rounded-md md:px-8 md:py-4 md:w-[600px] md:ml-28 md:mt-24 md:z-10 md:bg-white">
                {"Accessible à tous, simple et intuitif"}
              </p>
            </div>
            <div className="flex items-start my-4 md:my-8">
              <Image
                className=" md:hidden"
                src="/puceTri.png"
                alt={"image puce tri sélectif"}
                width={30}
                height={5}
              />
              <Image
                className="hidden md:block md:absolute md:ml-16  md:z-0 md:ml-[600px]"
                src="/roundedDecoration2.png"
                alt={"élément décoratif jaune"}
                width={200}
                height={200}
              />
              <p className="md:text-xl md:shadow-md md:shadow-lightOliveGreen md:rounded-md md:px-8 md:py-4 md:w-[600px] md:mt-12 md:z-10 md:bg-white md:ml-28">
                {
                  "Favorisez l’inclusion sociale en collaborant avec des collecteurs en situation de handicap, formés et motivés."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
