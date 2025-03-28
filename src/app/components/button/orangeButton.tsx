const OrangeButton = ({ label, route , onClick }: { label: string; route?: string; onClick?:()=> void}) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-lightOrange  text-midnightBlue rounded-full p-2 font-title uppercase mb-4"
      >
        {label}
      </button>
    </>
  );
};
export default OrangeButton;
