const Tab = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-pink-500"
    : "text-gray-400 border-b border-pink-500";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default Tab;
