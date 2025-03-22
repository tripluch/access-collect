import { Metadata } from "next";
import Image from "next/image";
import LogButton from "../components/button/logButton";
import LoginCollectButton from "./_components/LoginCollectButton";
import Arrow from "../components/arrow";
import Spark from "../components/spark";

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
        <div className="md:mx-24 lg:mx-48 md:flex md:items-center md:h-screen">
          {/* partie de gauche */}
          <div className="w-full h-3/4 md:flex md:flex-col md:justify-between md:h-3/4 md:w-1/2 ">
            <div className="h-56 mt-10 mb-20 mx-8 md:h-auto md:-mt-10 md:mx-0 ">
              <div className="-ml-8 block md:hidden">
                <Spark color="text-oliveGreen" width={40} height={50} />
              </div>
              <div className="hidden md:-ml-20 md:block">
                <Spark color="text-oliveGreen" width={100} height={100} />
              </div>
              <p className="relative text-xl font-section -mt-4 md:-mt-8 md:text-2xl lg:text-6xl  lg:leading-[2] lg:w-[900px]">
                {"Optimisez la collecte des déchets en entreprise avec une solution"}
                <span className="text-lightOrange">{" inclusive"}</span> {"et"}{" "}
                <span className="text-lightOrange">{"écologique"}</span>
              </p>
            </div>
            <div className="hidden md:block md:mt-16">
              <LogButton label={"Demander une démo"} />
            </div>
            <div className="bg-transparentImperialYellow md:bg-transparent">
              <div className="bg-oliveGreen relative md:hidden">
                <Image
                  className="w-full absolute top-1/2 -translate-y-1/2"
                  src="/containeurs.svg"
                  alt={"photo de poubelle"}
                  width={1}
                  height={1}
                />
              </div>
              <p className="mx-6 pt-24 relative text-md md:w-full md:text-xl  lg:text-4xl lg:w-[900px] lg:leading-[2] md:mx-0">
                {
                  "Une application pour faciliter la collecte des déchets recyclables en entreprise, tout en favorisant l’inclusion des personnes en situation de handicap."
                }
              </p>
              <div className="block flex mt-10 pb-10 justify-center md:hidden">
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

      <section className="text-midnightBlue mt-24 md:mx-24 lg:mx-48 ">
        <div className="flex">
          <h1 className="relative text-center text-2xl text-brightOrange font-section md:text-4xl">
            <span className="relative inline-block">
              {"Pourquoi"}
              <span
                className="absolute border-b border-midnightBlue 
                 w-[calc(4ch+4px)] md:w-[calc(4ch+6px)] 
                 left-1/4 transform -translate-x-1/2 
                 bottom-0"
              ></span>
            </span>{" choisir notre application ?"}
          </h1>
          <Spark color="text-midnightBlue" width={40} height={50} reverseH={true} />
        </div>


        <div className="mt-10 md:flex md:justify-center md:mx-auto lg:mt-10 max-w-[1200px] ">
          <div className="flex justify-center my-8 lg:mt-12">
            <Image
              src="/mobile.png"
              alt={"exemple d'une vue mobile sur un téléphone"}
              width={180}
              height={300}
              className="w-[180px] h-[300px] md:w-64 md:h-96 lg:w-80 lg:h-[600px]"
            />
          </div>
          <div className="mx-4 pt-10">
            <div className="flex items-start my-4">
              <Image
                className="block -mt-2 md:hidden lg:hidden"
                src="/puceTri.svg"
                alt={"image puce tri sélectif"}
                width={50}
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
            <div className="flex items-start mt-4 md:mt-8">
              <Image
                className="block -mt-2 md:hidden lg:hidden"
                src="/puceTri.svg"
                alt={"image puce tri sélectif"}
                width={50}
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
      </section >

      {/* section Les fonctionnalités */}

      < section className="text-midnightBlue mt-24" >
        <div className=" bg-transparentOliveGreen rounded-r-[50px] w-[90%] rotate-6 md:rotate-3 -ml-2 md:-ml-4">
          <h1 className="relative text-center text-2xl text-brightOrange font-section py-10 md:py-10 md:text-4xl -rotate-6 md:-rotate-3
                        before:content-[''] before:absolute before:bg-[url('/decoration.svg')] md:before:bg-[url('/decorationReverse.png')] before:bg-contain before:bg-no-repeat
                        before:w-[90px] before:h-[90px] md:before:w-[120px] md:before:h-[120px]
                        before:-mt-12 before:ml-60 md:before:-mt-20 md:before:ml-96
                        before:scale-x-[-1] md:before:transform-none">{"Les fonctionnalités"}</h1>
        </div>
        <div className="-mt-6 mx-auto md:mt-10 lg:mt-12 max-w-screen-xl">
          <div className="flex-none gap-x-0 md:flex md:justify-center md:gap-x-20">
            {/* Planifier */}
            <div>
              <div className="relative md:flex md:flex-col md:items-center">
                <div className="mt-10 flex justify-start md:mt-auto">
                  <Image
                    src="/planifier.svg"
                    alt={"image représentant une personne qui planifie ses tâches"}
                    width={250}
                    height={1}
                    className="w-[300px] h-[280px] -ml-8 mb-auto md:ml-0 md:-mb-14"
                  />
                </div>
                <div>
                  <h2 className=" absolute top-20 left-40 bg-white text-center text-lightOrange text-2xl shadow-md shadow-lightOrange w-44 h-11 pt-1 mt-0 md:static">{"PLANIFIER"}</h2>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-midnightBlue mx-4 -mt-12 md:mt-4">{"Planifiez et anticipez vos collectes avec une gestion centralisée"}</p>
              </div>
            </div>

            {/* Saisir */}
            <div>
              <div className="relative md:flex md:flex-col md:items-center">
                <div className="flex justify-end">
                  <Image
                    src="/saisir.svg"
                    alt={"image représentant une personne qui saisie sur un ordinateur portable"}
                    width={250}
                    height={1}
                    className="w-[300px] h-[280px] mb-auto -mr- md:mr-0 md:-mb-14"
                  />
                </div>
                <div>
                  <h2 className="absolute top-28 left-10 bg-white text-center text-oliveGreen text-2xl shadow-md shadow-oliveGreen w-44 h-11 pt-1 mt-0 md:static">{"SAISIR"}</h2>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-midnightBlue mx-4 -mt-12 md:mt-4">{"Gagnez du temps sur la collecte et la saisie de vos données"}</p>
              </div>
            </div>
          </div>

          <div className="flex-none lg:flex">
            {/* Accès client */}
            <div>
              <div className="relative md:flex md:flex-col md:items-center">
                <div className="flex justify-start">
                  <Image
                    src="/accesClient.svg"
                    alt={"image représentant une personne qui tourne une horloge pour représenter le temps qui passe"}
                    width={250}
                    height={1}
                    className="w-[300px] h-[280px] -ml-8 mb-auto md:ml-0 md:-mb-14"
                  />
                </div>
                <div>
                  <h2 className=" absolute top-28 left-40 bg-white text-center text-strongYellow text-2xl shadow-md shadow-imperialYellow w-52 h-11 pt-1 mt-0 md:static md:mt-2">{"ACCES CLIENT"}</h2>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-midnightBlue mx-4 -mt-12 md:mt-4">{"Offrez à vos clients une vision en temps réel des collectes grâce à un tableau de bord intuitif."}</p>
              </div>
            </div>

            {/* Statistiques */}
            <div>
              <div className="relative md:flex md:flex-col md:items-center">
                <div className="flex justify-end">
                  <Image
                    src="/statistiques.svg"
                    alt={"image représentant une personne qui saisie sur un ordinateur portable"}
                    width={250}
                    height={1}
                    className="w-[300px] h-[280px] mb-auto -mr-8 md:mr-0 md:-mb-14"
                  />
                </div>
                <div>
                  <h2 className="absolute top-28 left-6 bg-white text-center text-midnightBlue text-2xl shadow-md shadow-transparentMidnightBlue w-52 h-11 pt-1 mt-0 md:static">{"STATISTIQUES"}</h2>
                </div>
              </div>
              <div className="">
                <p className="text-midnightBlue mx-4 -mt-12 md:mt-4">{"Recevez des rapports détaillés sur vos activités de recyclage et votre impact écologique"}</p>
              </div>
            </div>
          </div>
        </div>

      </section >

      {/* section Les bénéfices */}

      < section className="text-midnightBlue pt-5 pb-20 mt-24 bg-transparentImperialYellow" >
        <div className="mx-6 md:mx-[650px] md:flex md:flex-col md:items-start max-w-screen-xl mt-12">
          <div className="">
            <h1 className="relative text-center text-brightOrange text-3xl font-section md:text-3xl lg:text-4xl md:text-left md:w-full
                        before:content-[''] before:absolute before:bg-[url('/decoration.svg')] before:bg-contain before:bg-no-repeat
                        before:w-[80px] before:h-[80px] md:before:w-[70px] md:before:h-[70px] 
                        before:-top-1 before:left-11 md:before:-top-2 md:before:-left-4 lg:before:top-0 lg:before:-left-4
                        before:translate-x-[-50%] before:translate-y-[-50%] 
                        before:scale-75 md:before:scale-100 lg:before:scale-125
                        after:content-[''] after:absolute after:border after:border-oliveGreen after:w-24
                        after:translate-x-[-70%] after:translate-y-[-50%] 
                        after:top-10 left-0 md:after:top-10">
              {"Les bénéfices"}
            </h1>
          </div>

          {/* REDUCTION DES COUTS */}
          <div className="flex mt-12">
            <div className="-ml-6 -mt-6">
              <Arrow color="text-oliveGreen" width={70} height={70} />
            </div>
            <h2 className="text-xl">{"REDUCTION DES COÛTS"}</h2>
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-24">
            <div className="hidden md:block">
              <Image
                src="/cout.svg"
                alt={"image montrant un escalier de cube avec une flèche pour montrer le coût qui diminue"}
                width={250}
                height={1}
                className="w-[180px] h-[180px]"
              />
            </div>
            <p className="text-normal w-full md:text-xl md:w-[600px] md:lg:leading-[2]"><span className="text-brightOrange text-bold">{"Optimisez"}</span>{" la gestion de vos déchets et "}<span className="text-brightOrange text-bold">{"réduisez vos coûts"}</span>{" opérationnels"}</p>
          </div>

          {/* IMPACT ENVIRONNEMENTAL POSITIF*/}

          <div className="flex mt-12">
            <div className="-ml-6 -mt-6">
              <Arrow color="text-lightOrange" width={70} height={70} />
            </div>
            <h2 className="text-xl md:text-2xl">{"IMPACT ENVIRONNEMENTAL POSITIF"}</h2>
          </div>
          <div className="mt-6 flex items-center justify-center gap-x-24">
            <p className="text-normal w-full md:text-xl md:w-[600px] md:lg:leading-[2]"><span className="text-brightOrange text-bold">{"Mesurez"}</span>{" et "}<span className="text-brightOrange text-bold">{"améliorez"}</span>{" votre contribution à la réduction des déchets"}</p>
            <div className="hidden md:block">
              <Image
                src="/impactEnvironnement.svg"
                alt={"puce pour liste des différents bénéfices"}
                width={250}
                height={1}
                className="w-[180px] h-[180px]"
              />
            </div>
          </div>


          {/* AMELIORATION DE L’IMAGE DE MARQUE*/}

          <div className="flex mt-12">
            <div className="-ml-6 -mt-6">
              <Arrow color="text-strongYellow" width={70} height={70} />
            </div>
            <h2 className="text-xl md:text-2xl">{"AMELIORATION DE L’IMAGE DE MARQUE"}</h2>
          </div>
          <div className="mt-6 flex items-center justify-center gap-x-24">
            <div className="hidden md:block">
              <Image
                src="/imageMarque.svg"
                alt={"puce pour liste des différents bénéfices"}
                width={250}
                height={1}
                className="w-[180px] h-[180px]"
              />
            </div>
            <p className="text-normal w-full md:text-xl md:w-[600px] md:lg:leading-[2]"><span className="text-brightOrange text-bold">{"Renforcez votre engagement social"}</span>{" et "}<span className="text-brightOrange text-bold">{"écologique"}</span>{" auprès de vos partenaires et clients"}</p>
          </div>
        </div>
      </section >

      {/* section accessCollect en chiffre*/}

      < section className="text-midnightBlue pb-20" >
        <div className="md:mx-24 lg:mx-48">
          <div className="">
            <h1 className="relative text-center text-2xl text-brightOrange font-section py-10 md:py-10 md:text-4xl
                        before:content-[''] before:absolute before:bg-[url('/decorationHautD.svg')] before:bg-contain before:bg-no-repeat
                        before:w-[100px] before:h-[100px] md:before:w-[180px] md:before:h-[180px]
                        before:-mt-10 before:ml-[310px] md:before:-mt-20 md:before:ml-[32%]
                        
                        after:content-[''] after:absolute after:border after:border-midnightBlue after:w-16 md:after:w-24
                        after:top-20 after:-translate-y-1/2 after:left-[23%] md:after:left-[38%] after:-translate-x-full">{"AccessCollect en chiffre"}</h1>
          </div>
        </div>
        <div className="mx-6 md:mx-24 lg:mx-96">
          <div className="flex justify-around mt-10">
            <div className="flex flex-col items-center w-1/2">
              <Image
                src="/poubelle.svg"
                alt={"image d'une poubelle"}
                width={250}
                height={1}
                className="w-[130px] h-[130px] md:w-[200px] md:h-[200px]"
              />
              <p className="text-center text-lg md:text-2xl">100<span>T</span></p>
              <p className="text-center md:text-lg">de déchets recyclés</p>
            </div>

            <div className="flex flex-col items-center w-1/2">
              <Image
                src="/collecteur.svg"
                alt={"image d'un éboueur"}
                width={250}
                height={1}
                className="w-[130px] h-[130px] md:w-[200px] md:h-[200px]"
              />
              <p className="text-center mt-2 text-lg md:text-2xl">25</p>
              <p className="text-center md:text-lg">collecteurs en situation de handicap engagés et soutenus</p>
            </div>

          </div>
        </div>
      </section >

      {/* section ils nous ont fait confiance*/}

      < section className="text-midnightBlue pb-20 bg-transparentOliveGreen" >
        <div className="md:mx-24 lg:mx-48">
          <div className="flex">
            <div className="-mt-4 ml-6">
              <Spark color="text-lightOrange" width={60} height={60} />
            </div>
            <h1 className="relative text-2xl font-section  mt-8 md:text-4xl">
              {"Ils nous ont fait "}
              <span className="text-brightOrange relative inline-block">{" confiance"}
                <span className="absolute bottom-0 right-0 w-24 border border-oliveGreen transform translate-x-[10%]"></span>
              </span>
            </h1>
          </div>

        </div>
      </section >

    </>
  );
}
