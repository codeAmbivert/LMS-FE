const DashboardCards = ({ title, icon, count }) => {
  return (
    <div className="shadow-lg rounded-lg p-5 w-full">
      <div className="flex justify-between items-center gap-5">
        <p className="text-xl">{title}</p>
        <div className="p-1 rounded-md bg-lmsBlack text-white">{icon}</div>
      </div>
      <p className="text-lmsGrayText mt-5">{count}</p>
    </div>
  );
};

export default DashboardCards;
