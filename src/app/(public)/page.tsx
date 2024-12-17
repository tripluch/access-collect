import { Metadata } from "next";
import Image from "next/image";
import LogButton from "../components/button/logButton";

export const metadata: Metadata = {
  title: "Access Collect",
  description: "Access Collect - votre outil pour gérer vos collectes",
};

export default function Home() {
  return (
    <section className="text-midnightBlue">
      <div className="pt-8 mb-4 h-52">
        <Image
          className="absolute top-[136px] left-5 hidden md:block"
          src="/decoration.svg"
          alt={"élément décoratif"}
          width={70}
          height={70}
        />
        <p className="mx-4 text-xl font-section md:w-2/3 md:text-4xl md:ml-16 md:mr-0 md:mt-12">
          {"Optimisez la collecte des déchets en entreprise avec une solution"}
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
  );
}
