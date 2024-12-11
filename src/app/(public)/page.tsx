import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Access Collect",
  description: "Access Collect - votre outil pour gérer vos collectes",
};

export default function Home() {
  return (
    <section className="text-midnightBlue">
      <div className="pt-8 mb-4 h-52">
        <p className="mx-4 text-xl font-section">
          {"Optimisez la collecte des déchets en entreprise avec une solution"}
          <span className="text-lightOrange">{" inclusive"}</span> {"et"}{" "}
          <span className="text-lightOrange">{"écologique"}</span>
        </p>
      </div>
      <Image
        className="absolute top-64 left-16"
        src="/containeurs.svg"
        alt={"poubelle"}
        width={250}
        height={100}
      />
      <Image
        className="absolute top-[286px] left-0"
        src="/decoration.svg"
        alt={"poubelle"}
        width={70}
        height={70}
      />
      <div className="bg-transparentImperialYellow  py-4 h-52">
        <p className="mx-4 pt-12">
          {
            "Une application pour faciliter la collecte des déchets recyclables en entreprise, tout en favorisant l’inclusion des personnes handicapées."
          }
        </p>
      </div>
    </section>
  );
}
