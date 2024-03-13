import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-slate-600 rounded-xl group hover:bg-white hover:scale-[1.05] ease-in-out duration-500">
      <img
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-slate-600 font-bold tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-slate-600 font-bold text-center">{tech}</p>
        <Link to={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] text-navbar font-bold text-lg cursor-pointer hover:shadow-md hover:shadow-slate-500 ease-in duration-500">
            Go to Demo
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;