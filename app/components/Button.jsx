const Button = ({ children, onClick, bgColor, extraClass }) => {
  return (
    <button
      className={`${bgColor ? bgColor : "bg-blue-500"} py-3 px-10 font-medium ${
        extraClass && extraClass
      } rounded-md text-white focus:outline-none`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
