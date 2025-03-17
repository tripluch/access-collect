const logButton = ({ label }: { label: string }) => {
  return (
    <>
      <button className="bg-lightOrange lg:hover:bg-brightOrange md:hover:bg-white hover:bg-lightOrange text-midnightBlue rounded p-2 font-title text-normal lg:text-2xl lg:px-10 lg:py-5">
        {label}
      </button>
    </>
  );
};
export default logButton;
