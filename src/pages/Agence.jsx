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
    <div>
      <div className="section1">
        <div ref={imageDivRef}  className="overflow-hidden h-70 w-55 absolute top-60 left-136 rounded-3xl">
          <img 
            className="h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg"
          />
        </div>
        <div className="relative">
          <div className="mt-[55vh] text-black">
            <h1 className="text-[17vw] text-center uppercase leading-[15vw]">
              SEVEN7Y
              <br />
              TWO
            </h1>
          </div>
          <div className="pl-[38%] mt-20">
            <p className="text-6xl text-black">
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
