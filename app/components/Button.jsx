const Button = ({ children, onClick, bgColor, extraClass, disabled }) => {
  return (
    <button
      className={`${
        bgColor ? bgColor : "bg-lmsPrimary"
      } py-3 px-10 font-medium ${
        extraClass && extraClass
      } rounded-md text-white focus:outline-none relative ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      <div
        className={
          disabled
            ? "absolute top-0 left-0 h-full w-full bg-white bg-opacity-45"
            : ""
        }
      />
    </button>
  );
};

export default Button;
