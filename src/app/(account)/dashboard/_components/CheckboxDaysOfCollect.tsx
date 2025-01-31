export const CheckboxDaysOfCollect = (props: any) => {
  return (
    <>
      <div className="mr-2">
        <label
          htmlFor="daysOfCollect"
          className="text-midnightBlue mr-1 text-sm"
        >
          {props.label}
        </label>
        <input
          className="p-2 border border-black rounded-md"
          type="checkbox"
          name="daysOfCollect"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </>
  );
};
