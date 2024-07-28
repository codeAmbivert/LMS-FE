const InputField = ({
  name,
  label,
  value,
  endIcon,
  placeholder,
  onChange,
  type,
  error = "",
}) => {
  return (
    <main className="w-full text-lmsGrayText">
      {label && (
        <label className="text-sm font-medium text-lmsBlack uppercase">
          {label}
        </label>
      )}
      <div className="flex items-center border py-1 px-3 rounded-md w-full">
        <input
          value={value}
          name={name}
          placeholder={placeholder}
          type={type ? type : "text"}
          onChange={onChange}
          className="w-full border-none p-2 focus:outline-none"
        />
        {endIcon && <span>{endIcon}</span>}
      </div>
      {error && <p className="text-red-700 text-xs mt-1">{error}</p>}
    </main>
  );
};

export default InputField;
