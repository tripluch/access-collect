const logButton = (props: any) => {
  return (
    <>
      <button className="bg-lightOrange lg:hover:bg-white md:hover:bg-white hover:bg-lightOrange text-midnightBlue rounded p-2 font-title">
        {props.label}
      </button>
    </>
  );
};
export default logButton;
