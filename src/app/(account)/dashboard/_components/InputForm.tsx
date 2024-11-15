export const InputForm = ({name, label}: {name : string, label: string}) => {
  return (
    <>
      <div className="flex flex-col">
        <label
          htmlFor={name}
          className="text-oliveGreen uppercase font-title text-sm"
        >
          {label}
        </label>
        <input
          className="p-2 bg-transparentLightOrange rounded-md  w-72 h-8 md:w-96"
          type="text"
          name={name}
        />
      </div>
    </>
  );
};
