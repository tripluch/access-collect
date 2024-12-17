const logButton = ({ label }: { label: string }) => {
  return (
    <>
      <button className="bg-lightOrange lg:hover:bg-white md:hover:bg-white hover:bg-lightOrange text-midnightBlue rounded p-2 font-title">
        {label}
      </button>
    </>
  );
};
export default logButton;
