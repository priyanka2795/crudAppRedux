import React, { useMemo } from "react";
import { BsFillSunFill } from "react-icons/bs";

const MemoizedBsFillSunFill = React.memo(BsFillSunFill);

const ModeToggle = React.memo(({ handleChange }) => {
  return (
    <>
      <button
        className="p-2 text-white bg-[#EAD1B2] rounded-lg"
        onClick={handleChange}
      >
        <MemoizedBsFillSunFill />
      </button>
    </>
  );
});

export default ModeToggle;
