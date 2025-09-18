import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
  const imageDivRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_640X960_2-640x960.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg'
  ]

  useGSAP(()=>{
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:'top 30%',
        end:'top -100%',
        pin:true,
        scrub:true,
        onUpdate:function(elem){
          let imageIndex;
          if(elem.progress<1){
            imageIndex = Math.floor(elem.progress * imageArray.length);
          }else{
            imageIndex = imageArray.length - 1;
          }
          //console.log(imageIndex);
          const imageTag = imageDivRef.current.querySelector('img');
          // console.log(imageTag);
          imageTag.src = imageArray[imageIndex];
        }
      }
    })
  })
  return (
    <div >
      <div className="section1 bg-red-600">
        <div ref={imageDivRef}  className="overflow-hidden lg:h-70 lg:w-55 absolute lg:top-60 lg:left-136 rounded-3xl md:top-1 md:left-70 md:h-60 md:w-50 h-35 w-30">
          <img 
            className="h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg"
          />
        </div>
        <div className="relative">
          <div className="lg:mt-[55vh] text-black md:mt-[20vh] md:pt-[10vh] sm:mt-[5vh] mt-[25vh]">
            <h1 className="lg:text-[17vw] text-center font-medium uppercase leading-[15vw] md:text-[20vw] text-[15vw]">
              SEVEN7Y
              <br />
              TWO
            </h1>
          </div>
          <div className="lg:pl-[38%] lg:mt-20 md:p-2 md:mt-15">
            <p className="lg:text-6xl text-black md:text-3xl md:font-semibold font-bold">
              We're inquisitive and open-minded, and we make sure creativity
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
