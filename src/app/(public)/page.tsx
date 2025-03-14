"use client";

//import { Metadata } from "next";
import Image from "next/image";
import LogButton from "../components/button/logButton";
import Link from "next/link";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Access Collect",
//   description: "Access Collect - votre outil pour gérer vos collectes",
// };

export default function Home() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="block mx-4 mt-5 md:hidden">
        <div className="flex items-center  gap-5">
          <p className="text-midnightBlue text-md">{'Vous êtes collecteur ?'}</p>
          <Link
            href="/login"
            onClick={handleClick}
            className="flex justify-center mt-1"
          >
            <LogButton label="SE CONNECTER" />
          </Link>
        </div>
      </div>
      <div className="mx-0 md:mx-0 lg:mx-56 lg:mt-12">
        {/* section de présentation */}
        <section className="text-midnightBlue mb-16">
          <div className="pt-8 mb-4 h-52">
            <Image
              className="hidden md:block md:absolute md:top-[136px] md:left-5 lg:absolute lg:top-[200px] lg:left-56"
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

        <section className="text-midnightBlue mt-12 lg:mt-24">
          <div className="ml-3 relative">
            <Image
              src="/titreMobile.png"
              alt={"bandeau titre décoratif"}
              width={440}
              height={1}
              className="z-0 w-[440px] h-[90px] lg:w-full lg:h-36"
            />
            <h1 className="z-10 top-8 left-16 absolute text-center text-xl text-lightOrange font-section lg:left-[450px] lg:top-12 lg:text-4xl">{"Les fonctionnalités"}</h1>
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
                  <h2 className=" absolute top-20 left-40 bg-white text-center text-lightOrange text-2xl shadow-md shadow-lightOrange w-44 h-11 pt-1">{"PLANIFIER"}</h2>
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
                  <h2 className="absolute top-20 left-20 bg-white text-center text-oliveGreen text-2xl shadow-md shadow-oliveGreen w-44 h-11 pt-1">{"SAISIR"}</h2>
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
                  <h2 className=" absolute top-20 left-44 bg-white text-center text-strongYellow text-2xl shadow-md shadow-imperialYellow w-52 h-11 pt-1">{"ACCES CLIENT"}</h2>
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
      </div>
    </>
  );
}
