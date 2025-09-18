import React from 'react'

const ProjectCard = ({image1,image2}) => {
  return (
    <>
          <div className="w-1/2 group h-full relative overflow-hidden">
            <img
              className="h-full w-full rounded-none group-hover:rounded-[50px] transition-all object-cover"
              src={image1}
            />
            <div className="opacity-0 cursor-pointer transition-all group-hover:opacity-100 absolute top-0 left-0 h-full w-full bg-black/10 flex justify-center items-center">
              <h2 className="uppercase text-white border-white text-6xl font-[font1] border-2 pt-4 px-4 rounded-full md:text-5xl">
                view Project
              </h2>
            </div>
          </div>
          <div className="w-1/2 group h-full relative overflow-hidden">
            <img
              className="h-full w-full rounded-none group-hover:rounded-[50px] transition-all object-cover"
              src={image2}
            />
            <div className="opacity-0 cursor-pointer transition-all group-hover:opacity-100 absolute top-0 left-0 h-full w-full bg-black/10 flex justify-center items-center">
              <h2 className="uppercase text-white border-white text-6xl font-[font1] border-2 pt-4 px-4 rounded-full ">
                view Project
              </h2>
            </div>
          </div>
    </>
  )
}

export default ProjectCard