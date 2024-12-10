import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Access Collect",
  description: "Access Collect - votre outil pour gérer vos collectes",
};

export default function Home() {
  return (
    <div className="font-title text-xl bg-blue h-48">
      Optimisez la collecte des déchets en entreprise avec une solution
      inclusive et écologique
    </div>
  );
}
