import React from "react";

const FullScreenNav = () => {
  return (
    <div id="fullscreennav" className="absolute inset-0 bg-black h-screen w-full">
      <div id="all-links" className="mt-[7vw]">
        <div className="h-28 link relative border-y border-white uppercase overflow-hidden">
          <h1 className="text-center font-[font1] font-black text-[6vw] text-white mt-[-12px]">
            Work
          </h1>
          {/* Infinite Moving Strip */}
          <div className="moveLink absolute top-0 left-0 w-full flex bg-[#D3FD50] text-black">
            {/* First loop */}
            <div className="moveX flex items-center whitespace-nowrap animate-moveX">
              <h2 className="mx-8 font-[font1] font-black text-[6vw]">See Everything</h2>
              <img
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
                className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
              />
              <h2 className="mx-8 font-[font1] font-black text-[6vw]">See Everything</h2>
              <img
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
                className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
              />
            </div>

            {/* Duplicate for seamless loop */}
            <div className="moveX flex items-center whitespace-nowrap animate-moveX">
              <h2 className="mx-8 font-[font1] font-black text-[6vw]">See Everything</h2>
              <img
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
                className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
              />
              <h2 className="mx-8 font-[font1] font-black text-[6vw]">See Everything</h2>
              <img
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
                className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
              />
            </div>
          </div>
        </div>
        <div className="h-28 link relative border-y border-white uppercase overflow-hidden">
          <h1 className="text-center font-[font1] font-black text-[6vw] text-white mt-[-12px]">
            agency
          </h1>
          {/* Infinite Moving Strip */}
          <div className="moveLink absolute top-0 left-0 w-full flex bg-[#D3FD50] text-black">
            {/* First loop */}
            <div className="moveX flex items-center whitespace-nowrap animate-moveX">
              <h2 className="mx-8 font-[font1] font-black text-[6vw]">Know Us</h2>
              <img
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
                className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
              />
              <h2 className="mx-8 font-[font1] font-black text-[6vw]">Know us</h2>
              <img
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
                className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
              />
            </div>

            {/* Duplicate for seamless loop */}
            <div className="moveX flex items-center whitespace-nowrap animate-moveX">
              <h2 className="mx-8 font-[font1] font-black text-[6vw]">Know us</h2>
              <img
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
                className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
              />
              <h2 className="mx-8 font-[font1] font-black text-[6vw]">know us</h2>
              <img
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
                className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
              />
            </div>
          </div>
        </div>
        <div className="h-28 link relative border-y border-white uppercase overflow-hidden">
          <h1 className="text-center font-[font1] font-black text-[6vw] text-white mt-[-12px]">
            contact
          </h1>
          {/* Infinite Moving Strip */}
          <div className="moveLink absolute top-0 left-0 w-full flex bg-[#D3FD50] text-black">
            {/* First loop */}
            <div className="moveX flex items-center whitespace-nowrap animate-moveX">
              <h2 className="mx-8 font-[font1] font-black text-[6vw]">send us fax</h2>
              <img
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
                className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
              />
              <h2 className="mx-8 font-[font1] font-black text-[6vw]">send us fax</h2>
              <img
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
                className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
              />
            </div>

            {/* Duplicate for seamless loop */}
            <div className="moveX flex items-center whitespace-nowrap animate-moveX">
              <h2 className="mx-8 font-[font1] font-black text-[6vw]">send us fax</h2>
              <img
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
                className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
              />
              <h2 className="mx-8 font-[font1] font-black text-[6vw]">send us fax</h2>
              <img
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
                className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
              />
            </div>
          </div>
        </div>
        <div className="h-28 link relative border-y border-white uppercase overflow-hidden">
          <h1 className="text-center font-[font1] font-black text-[6vw] text-white mt-[-12px]">
            blog
          </h1>
          {/* Infinite Moving Strip */}
          <div className="moveLink absolute top-0 left-0 w-full flex bg-[#D3FD50] text-black">
            {/* First loop */}
            <div className="moveX flex items-center whitespace-nowrap animate-moveX">
              <h2 className="mx-8 font-[font1] font-black text-[6vw]">read article</h2>
              <img
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
                className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
              />
              <h2 className="mx-8 font-[font1] font-black text-[6vw]">read article</h2>
              <img
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
                className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
              />
            </div>

            {/* Duplicate for seamless loop */}
            <div className="moveX flex items-center whitespace-nowrap animate-moveX">
              <h2 className="mx-8 font-[font1] font-black text-[6vw]">read article</h2>
              <img
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
                className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
              />
              <h2 className="mx-8 font-[font1] font-black text-[6vw]">read article</h2>
              <img
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
                className="h-24 w-48 shrink-0 rounded-full object-cover mx-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
