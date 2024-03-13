/** @format */

import React from 'react';
import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiTailwindcss, SiGoland } from "react-icons/si";
import {
  FaGit,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaPython,
  FaAngular,
  FaVuejs,
  FaNodeJs,
} from "react-icons/fa";

const Skills = () => {
	return (
		<div id='skills'>
			<div className='text-[20px] md:text-[40px] font-sora text-[#FBFBFB] md:leading-[72px]'>
				here are the skills I have
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  p-4 min-[1300px]:grid-cols-4 gap-8'>
				<div className='p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300'>
					<div className='grid grid-cols-2 gap-4 justify-center items-center'>
						<div className='m-auto'>
							<FaHtml5 className='text-8xl' />
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h3 className='text-4xl'>HTML</h3>
						</div>
					</div>
				</div>
				<div className='p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300'>
					<div className='grid grid-cols-2 gap-4 justify-center items-center'>
						<div className='m-auto'>
							<FaCss3Alt className='text-8xl' />
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h3 className='text-4xl'>CSS</h3>
						</div>
					</div>
				</div>
				<div className='p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300'>
					<div className='grid grid-cols-2 gap-4 justify-center items-center'>
						<div className='m-auto'>
							<SiJavascript className='text-8xl' />
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h3 className='sm:text-4xl text-3xl'>JavaScript</h3>
						</div>
					</div>
				</div>
				<div className='p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300'>
					<div className='grid grid-cols-2 gap-4 justify-center items-center'>
						<div className='m-auto'>
							<FaReact className='text-8xl' />
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h3 className='text-4xl'>React</h3>
						</div>
					</div>
				</div>
				<div className='p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300'>
					<div className='grid grid-cols-2 gap-4 justify-center items-center'>
						<div className='m-auto'>
							<SiTailwindcss className='text-8xl' />
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h3 className='text-4xl'>Tailwind</h3>
						</div>
					</div>
				</div>
				<div className='p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300'>
					<div className='grid grid-cols-2 gap-4 justify-center items-center'>
						<div className='m-auto'>
							<FaNode className='text-8xl' />
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h3 className='text-4xl'>NodeJS</h3>
						</div>
					</div>
				</div>
				<div className='p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300'>
					<div className='grid grid-cols-2 gap-4 justify-center items-center'>
						<div className='m-auto'>
							<FaGit className='text-8xl' />
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h3 className='text-4xl'>Github</h3>
						</div>
					</div>
				</div>
				<div className='p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300'>
					<div className='grid grid-cols-2 gap-4 justify-center items-center'>
						<div className='m-auto'>
							<TbBrandNextjs className='text-8xl' />
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h3 className='text-4xl'>Next</h3>
						</div>
					</div>
				</div>
				<div className='p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300'>
					<div className='grid grid-cols-2 gap-4 justify-center items-center'>
						<div className='m-auto'>
							<FaVuejs className='text-8xl' />
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h3 className='text-4xl'>Vue</h3>
						</div>
					</div>
				</div>
				<div className='p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300'>
					<div className='grid grid-cols-2 gap-4 justify-center items-center'>
						<div className='m-auto'>
							<FaPython className='text-8xl' />
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h3 className='text-4xl'>Python</h3>
						</div>
					</div>
				</div>
				<div className='p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300'>
					<div className='grid grid-cols-2 gap-4 justify-center items-center'>
						<div className='m-auto'>
							<FaAngular className='text-8xl' />
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h3 className='text-4xl'>Angular</h3>
						</div>
					</div>
				</div>
				<div className='p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300'>
					<div className='grid grid-cols-2 gap-4 justify-center items-center'>
						<div className='m-auto'>
							<SiGoland className='text-8xl' />
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h3 className='text-4xl'>Golang</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
