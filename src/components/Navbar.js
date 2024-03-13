/** @format */

import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import CV from '../assets/cv-fixed-now.pdf';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 100) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, []);
	return (
		<div
			className={`${
				shadow ? 'shadow-xl shadow-slate-900' : ''
			} fixed right-0 px-[30px] md:px-[100px] bg-black-2 h-[70px] md:h-[100px] w-full z-[1000]  flex items-center justify-between text-white`}>
			<div className='font-poppins font-bold text-[24px]'>Ranggo</div>
			<ul
				className={`md:flex gap-2 md:items-center md:pb-0 pb-12 px-[30px] absolute md:static md:z-auto bg-black-2 z-[100] left-0 w-full md:w-auto  transition-all duration-300 ease-in ${
					nav ? 'top-[70px]' : 'top-[-490px]'
				}`}>
				<li className='bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2'>
					<a href='/#home'>Home</a>
				</li>
				<li className='bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2'>
					<a href='/#about'>About</a>
				</li>
				<li className='bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2'>
					<a href='/#skills'>Skills</a>
				</li>
				<li className='bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2'>
					<a href='/#projects'>Projects</a>
				</li>
				<li className='bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2'>
					<a
						href={CV}
						download='CV-Ranggo Pato'
						target='_blank'
						rel='noreferrer'>
						CV/resume
					</a>
				</li>
				<li className='bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2'>
					<a href='/#contact'>Contact</a>
				</li>
			</ul>
			<div
				className='flex xl:hidden text-2xl font-bold '
				onClick={() => setNav(!nav)}>
				{!nav ? <AiOutlineMenu /> : <IoClose />}
			</div>
		</div>
	);
};

export default Navbar;
