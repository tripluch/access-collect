const OrangeButton = ({ label, route }: { label: string; route: string }) => {
  return (
    <>
      <button
        onClick={() => route}
        className="bg-lightOrange  text-midnightBlue rounded-full p-2 font-title uppercase mb-4"
      >
        {label}
      </button>
    </>
  );
};
export default OrangeButton;
