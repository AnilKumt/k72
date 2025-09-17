import React, { useRef, useContext } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavbarContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);

  // function gsapAnimation() {
  //   const tl = gsap.timeline();
  //   tl.to("#fullscreennav", {
  //         display: "block",
  //   });
  //   tl.to(".stairing", {
  //     height: '100%',
  //     stagger: {
  //       amount: -0.3,
  //     },
  //   });
  //   tl.to(".link", {
  //     opacity: 1,
  //     rotateX: 0,
  //     stagger: {
  //       amount: 0.2,
  //     },
  //   });
  //   tl.to(".navlink", {
  //     opacity: 1,
  //   });
  // }

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.set("#fullscreennav", { autoAlpha: 1, pointerEvents: "auto" });
    tl.to(".stairing", { height: "100%", stagger: { amount: 0.3 } });
    tl.to(".link", { opacity: 1, rotateX: 0, stagger: { amount: 0.2 } });
  }

  // function gsapAnimationReverse() {
  //   const tl = gsap.timeline();

  //   tl.to(".link", {
  //     opacity: 0,
  //     rotateX: 90,
  //     stagger: {
  //       amount: 0.2,
  //     },
  //   });
  //   tl.to(".stairing", {
  //     height: 0,
  //     stagger: {
  //       amount: 0.3,
  //     },
  //   });
  //   tl.to(".navlink", {
  //     opacity: 0,
  //   });
  //   tl.to("#fullscreennav", {
  //         display: "none"
  //   });
  // }

  function gsapAnimationReverse() {
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
    });


    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: { amount: 0.2, from: "end" }, 
    });

    tl.to(
      ".stairing",
      {
        height: 0,
        stagger: { amount: 0.3, from: "end" },
      },
      "-=0.2"
    );

   
    tl.to("#fullscreennav", {
      autoAlpha: 0,
      pointerEvents: "none",
    });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="absolute inset-0 bg-black h-screen w-full z-400"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full z-20 top-0 flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <div ref={fullNavLinksRef} className="relative">
        <div className="navlink flex w-full justify-between items-start">
          <div className="h-80 w-80 p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="100"
              viewBox="0 0 103 44"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="h-35 w-35 group relative cursor-pointer mt-5 mr-5"
          >
            <div className="h-49 w-[1.5px] -rotate-45 origin-top absolute bg-white group-hover:bg-[#D3FD50]"></div>
            <div className="h-49 w-[1.5px] right-0 rotate-45 origin-top absolute bg-white group-hover:bg-[#D3FD50]"></div>
          </div>
        </div>

        <div id="all-links">
          <div className="h-28 origin-top cursor-pointer link relative border-y border-white uppercase overflow-hidden mt-[-90px]">
            <h1 className="text-center font-[font1] font-black text-[6vw] text-white mt-[-12px]">
              Work
            </h1>
            {/* Infinite Moving Strip */}
            <div className="moveLink absolute top-0 left-0 w-full flex bg-[#D3FD50] text-black">
              {/* First loop */}
              <div className="moveX flex items-center whitespace-nowrap animate-moveX">
                <h2 className="mx-8 font-[font1] font-black text-[6vw]">
                  See Everything
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
                  className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
                />
                <h2 className="mx-8 font-[font1] font-black text-[6vw]">
                  See Everything
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
                  className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
                />
              </div>

              {/* Duplicate for seamless loop */}
              <div className="moveX flex items-center whitespace-nowrap animate-moveX">
                <h2 className="mx-8 font-[font1] font-black text-[6vw]">
                  See Everything
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
                  className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
                />
                <h2 className="mx-8 font-[font1] font-black text-[6vw]">
                  See Everything
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
                  className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
                />
              </div>
            </div>
          </div>
          <div className="h-28 origin-top cursor-pointer link relative border-y border-white uppercase overflow-hidden">
            <h1 className="text-center font-[font1] font-black text-[6vw] text-white mt-[-12px]">
              agency
            </h1>
            {/* Infinite Moving Strip */}
            <div className="moveLink absolute top-0 left-0 w-full flex bg-[#D3FD50] text-black">
              {/* First loop */}
              <div className="moveX flex items-center whitespace-nowrap animate-moveX">
                <h2 className="mx-8 font-[font1] font-black text-[6vw]">
                  Know Us
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
                  className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
                />
                <h2 className="mx-8 font-[font1] font-black text-[6vw]">
                  Know us
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
                  className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
                />
              </div>

              {/* Duplicate for seamless loop */}
              <div className="moveX flex items-center whitespace-nowrap animate-moveX">
                <h2 className="mx-8 font-[font1] font-black text-[6vw]">
                  Know us
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
                  className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
                />
                <h2 className="mx-8 font-[font1] font-black text-[6vw]">
                  know us
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
                  className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
                />
              </div>
            </div>
          </div>
          <div className="h-28 origin-top cursor-pointer link relative border-y border-white uppercase overflow-hidden">
            <h1 className="text-center font-[font1] font-black text-[6vw] text-white mt-[-12px]">
              contact
            </h1>
            {/* Infinite Moving Strip */}
            <div className="moveLink absolute top-0 left-0 w-full flex bg-[#D3FD50] text-black">
              {/* First loop */}
              <div className="moveX flex items-center whitespace-nowrap animate-moveX">
                <h2 className="mx-8 font-[font1] font-black text-[6vw]">
                  send us fax
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
                  className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
                />
                <h2 className="mx-8 font-[font1] font-black text-[6vw]">
                  send us fax
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
                  className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
                />
              </div>

              {/* Duplicate for seamless loop */}
              <div className="moveX flex items-center whitespace-nowrap animate-moveX">
                <h2 className="mx-8 font-[font1] font-black text-[6vw]">
                  send us fax
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
                  className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
                />
                <h2 className="mx-8 font-[font1] font-black text-[6vw]">
                  send us fax
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
                  className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
                />
              </div>
            </div>
          </div>
          <div className="h-28 origin-top cursor-pointer link relative border-y border-white uppercase overflow-hidden">
            <h1 className="text-center font-[font1] font-black text-[6vw] text-white mt-[-12px]">
              blog
            </h1>
            {/* Infinite Moving Strip */}
            <div className="moveLink absolute top-0 left-0 w-full flex bg-[#D3FD50] text-black">
              {/* First loop */}
              <div className="moveX flex items-center whitespace-nowrap animate-moveX">
                <h2 className="mx-8 font-[font1] font-black text-[6vw]">
                  read article
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
                  className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
                />
                <h2 className="mx-8 font-[font1] font-black text-[6vw]">
                  read article
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
                  className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
                />
              </div>

              {/* Duplicate for seamless loop */}
              <div className="moveX flex items-center whitespace-nowrap animate-moveX">
                <h2 className="mx-8 font-[font1] font-black text-[6vw]">
                  read article
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
                  className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
                />
                <h2 className="mx-8 font-[font1] font-black text-[6vw]">
                  read article
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
                  className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
