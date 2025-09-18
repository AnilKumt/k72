import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stairs = ({ children }) => {
    const childPageRef = useRef(null);
  const currentPath = useLocation().pathname;

  const stairParentRef = useRef(null);
  useGSAP(
    function () {
      const tl = gsap.timeline();
      tl.to(stairParentRef.current, {
        display: "block",
      });
      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.3,
        },
      });
      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.25,
        },
      });
      tl.to(stairParentRef.current, {
        display: "none",
      });
      tl.to(".stair", {
        y: "0%",
        stagger: {
          amount: -0.25,
        },
      });

      gsap.from(childPageRef.current,{
        opacity:0,
        delay:1.75
      })
    },
    [currentPath]
  );
  return (
    <div>
        <div ref={stairParentRef} className="h-screen w-full fixed z-20 top-0">
      <div className="h-full w-full fixed z-20 top-0 flex">
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
      </div>
    </div>
    <div ref={childPageRef}>
        {children}
    </div>
    </div>
  );
};

export default Stairs;
