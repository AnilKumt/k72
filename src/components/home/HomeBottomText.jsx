import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex justify-center items-center gap-2 mb-1.5">
      <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50]  h-28 flex items-center px-10 border-white rounded-full uppercase">
        <Link to='/projects' className="text-[4vw] mt-3">Projects</Link>
      </div>
      <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-28 flex items-center px-10 border-white rounded-full uppercase">
        <Link to='/agence' className="text-[4vw] mt-3">Agence</Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
