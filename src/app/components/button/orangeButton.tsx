import { useRouter } from "next/navigation";

const OrangeButton = ({ label, route }: { label: string; route: string }) => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => route}
        // onClick={() => router.push("/dashboard/collected-point-list")}
        className="bg-lightOrange  text-midnightBlue rounded-full p-2 font-title uppercase mb-4"
      >
        {label}
      </button>
    </>
  );
};
export default OrangeButton;
