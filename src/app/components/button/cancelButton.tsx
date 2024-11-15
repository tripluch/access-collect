import { useRouter } from "next/navigation";

const CancelButton = () => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => router.back()}
        className="border border-lightOrange text-midnightBlue  p-2 font-title uppercase mb-4"
      >
        ANNULER
      </button>
    </>
  );
};
export default CancelButton;
