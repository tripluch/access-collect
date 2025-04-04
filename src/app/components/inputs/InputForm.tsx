export const InputForm = ({
  name,
  label,
  placeholder,
}: {
  name: string;
  label: string;
  placeholder: string;
}) => {
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
          className="p-2 bg-transparentLightOrange text-midnightBlue text-sm rounded-md  w-72 h-8 md:w-96"
          type="text"
          name={name}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
