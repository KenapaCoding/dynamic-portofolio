import React from 'react';

import calcProject from '../assets/project-unsplash1.jpg';
import freelancerProject from '../assets/project-unsplash1.jpg';
import recipeProject from '../assets/project-unsplash1.jpg';
import youtubeClone from '../assets/project-unsplash1.jpg';
import SliderImage from '../assets/project-unsplash1.jpg';
import RestApi from '../assets/project-unsplash1.jpg';

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full ">
      <div className="flex flex-col">
        <h1 className="text-[20px] md:text-[40px] font-sora text-[#FBFBFB] md:leading-[72px]">
          What I have Build
        </h1>
      </div>

      <div className="grid p-8 md:p-12 md:grid-cols-2 gap-8">
        <ProjectItem
          title="Youtube Clone"
          backgroundImg={youtubeClone}
          projectUrl="https://youtube-clone-ranggo.netlify.app"
          tech="React JS"
        />
        <ProjectItem
          title="Freelancer-App"
          backgroundImg={freelancerProject}
          projectUrl="https://freelancerappbyranggo.netlify.app"
          tech="Vue,Vuex and FireBase"
        />
        <ProjectItem
          title="Recipes Project"
          backgroundImg={recipeProject}
          projectUrl="https://recipebyranggo.netlify.app"
          tech="Angular and FireBase"
        />
        <ProjectItem
          title="Rest-API"
          backgroundImg={RestApi}
          projectUrl="https://node-express-api.up.railway.app/"
          tech="Node, Express, and MongoDb"
        />
        <ProjectItem
          title="Calculator Project"
          backgroundImg={calcProject}
          projectUrl="https://calculatorbyranggo.netlify.app"
          tech="React JS"
        />
        <ProjectItem
          title="Slider Image"
          backgroundImg={SliderImage}
          projectUrl="https://imagesliderbyranggo.netlify.app"
          tech="React JS"
        />
      </div>
    </div>
  );
};

export default Projects;