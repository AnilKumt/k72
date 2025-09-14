import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div>
      <div className="font-[font1] pt-5 text-center  selection:bg-[#D3FD50] selection:text-black">
        <div className="text-8xl uppercase leading-[8vw] justify-center flex items-center">The Spark for</div>
        <div className="text-8xl uppercase leading-[8vw] flex items-center justify-center">
          all
          <div className="h-[6vw] w-[12vw] rounded-full overflow-hidden">
            <Video/>
          </div>
          things
        </div>
        <div className="text-8xl uppercase leading-[8vw] justify-center flex items-center">creative</div>
      </div>
    </div>
  );
};

export default HomeHeroText;
