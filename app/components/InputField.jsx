const InputField = ({ label, value, endIcon, placeholder, onChange, type }) => {
  return (
    <main className="w-full">
      {label && <label className="text-sm font-medium">{label}</label>}
      <div className="flex items-center border py-1 px-3 rounded-md w-full">
        <input
          value={value}
          placeholder={placeholder}
          type={type ? type : "text"}
          onChange={onChange}
          className="w-full border-none p-2 focus:outline-none"
        />
        {endIcon && <span>{endIcon}</span>}
      </div>
    </main>
  );
};

export default InputField;
