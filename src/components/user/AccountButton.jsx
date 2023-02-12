const AccountButton = ({ onClick, children }) => {
  return (
    <button
      className="bg-primary rounded-full w-[200px] h-[40px] mt-[8px] text-white text-[16px]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AccountButton;
