const DashboardCards = ({ title, icon, iconFunc, count }) => {
  return (
    <div className="shadow-lg rounded-lg p-5 w-full">
      <div className="flex justify-between items-center">
        <p className="text-xl">{title}</p>
        <div onClick={iconFunc}>{icon}</div>
      </div>
      <p className="text-lmsGrayText mt-5">{count}</p>
    </div>
  );
};

export default DashboardCards;
