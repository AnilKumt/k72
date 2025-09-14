import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

const Agence = () => {
  const imageDivRef = useRef(null);

  
  return (
    <div>
      <div className="section1">
        <div ref={imageDivRef}className="overflow-hidden h-70 w-55 absolute top-60 left-136 rounded-3xl bg-red-500">
          <img
            className="h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg"
          />
        </div>
        <div className="relative">
          <div className="mt-[55vh]">
            <h1 className="text-[17vw] text-center uppercase leading-[15vw]">
              SEVEN7Y
              <br />
              TWO
            </h1>
          </div>
          <div className="pl-[38%] mt-20">
            <p className="text-6xl">
              We’re inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="h-screen"></div>
      </div>
    </div>
  );
};

export default Agence;
