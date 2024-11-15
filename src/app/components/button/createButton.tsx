import Image from "next/image";

const CreateButton = ({ name }: { name: string }) => {
  return (
    <>
      <div className="w-[150px] h-[150px] shadow-md shadow-lightOliveGreen mx-6 rounded-lg my-6 flex flex-col justify-center items-center md:w-[360px] md:h-[68px] md:flex-row-reverse md:justify-end">
        <Image
          src="/create.svg"
          alt={"pictogramme ajouter"}
          width={66}
          height={63}
          className="md:w-[46px] md:h-[43px]"
        />
        <button
          name={name}
          className="text-midnightBlue font-title text-2xl mx-24"
        >
          {"Créer"}
        </button>
      </div>
    </>
  );
};
export default CreateButton;
