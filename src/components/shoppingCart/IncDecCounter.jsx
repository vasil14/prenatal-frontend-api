import { useState } from 'react';

const IncDecCounter = () => {
  const [num, setNum] = useState(1);

  const incNum = () => {
    if (num < 10) setNum(Number(num) + 1);
  };

  const decNum = () => {
    if (num > 1) setNum(num - 1);
  };
  const handleChange = (e) => {
    setNum(e.target.value);
  };
  return (
    <>
      <div className="flex ">
        <button
          className="font-bold font-poppins w-6 h-6 hover:bg-gray-200"
          type="button"
          onClick={decNum}
        >
          -
        </button>

        <input
          type="text"
          className="w-6 h-6 text-[15px] p-1 text-center font-bold border-[#b8b8b8]"
          value={num}
          onChange={handleChange}
        />

        <button
          className="font-bold font-poppins w-6 h-6 hover:bg-gray-200"
          type="button"
          onClick={incNum}
        >
          +
        </button>
      </div>
    </>
  );
};
export default IncDecCounter;
