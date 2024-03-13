/** @format */

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import CV from '../assets/cv-fixed-now.pdf'

const Contact = () => {
	return (
		<div
			id='contact'
			className='w-full text-[#FBFBFB]'>
			<div className='flex flex-col '>
				<h1 className='text-[20px] md:text-[40px] font-sora text-[#FBFBFB] md:leading-[72px]'>
					Get in Touch
				</h1>
			</div>
			<div className='m-auto p-4  w-full font-ibm '>
				<div className='grid p-4 lg:grid-cols-5 gap-8'>
					{/* left */}
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl  bg-[#323443] rounded-xl p-4'>
						<div className='lg:p-4 h-full '>
							<div>
								<img
									className='rounded-xl hover:scale-105 ease-in duration-300'
									src={require('../assets/project-unsplash1.jpg')}
									alt='/'
								/>
							</div>
							<div className='font-poppins'>
								<h2 className='py-2 text-white font-bold  text-2xl'>
									Ranggo Pato
								</h2>
								<p>Full Stack Engineer</p>
								<p className='py-4'>
									I am available for freelance or full-time positions. Contact
									me and lets talk.
								</p>
							</div>
							<div>
								<p className='uppercase pt-8 font-poppins'>Connect With Me</p>
								<div className='flex items-center justify-between py-4'>
									<a href='https://www.linkedin.com/in/ranggo-pato-676435192/'>
										<div className='rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] md:p-6 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
											<FaLinkedinIn className='text-navbar' />
										</div>
									</a>
									<a href='https://github.com/ranggopato'>
										<div className='rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] md:p-6 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
											<FaGithub className='text-navbar' />
										</div>
									</a>

									<div className='rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] md:p-6 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
										<AiOutlineMail className='text-navbar' />
									</div>
									<a
										href={CV}
										download='CV-Ranggo Pato'
										target='_blank'
										rel='noreferrer'>
										<div>
											<div className='rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] md:p-6 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
												<BsFillPersonLinesFill className='text-navbar' />
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* right */}
					<div className='col-span-3 w-full h-auto shadow-xl  bg-[#323443] rounded-xl lg:p-4'>
						<div className='p-4'>
							<form
								action='https://getform.io/f/aa57a437-6e8d-4c31-84f6-5cd27dfe72f5'
								method='POST'
								encType='multipart/form-data'
								target='_blank'
								className='text-black'>
								<div className='grid md:grid-cols-2 gap-4 w-full py-2 '>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>Name</label>
										<input
											className='border-2 rounded-lg p-3 flex border-slate-300 outline-navbar'
											type='text'
											name='name'
										/>
									</div>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>
											Phone Number
										</label>
										<input
											className='border-2 rounded-lg p-3 flex border-slate-300 outline-navbar'
											type='text'
											name='phone'
										/>
									</div>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Email</label>
									<input
										className='border-2 rounded-lg p-3 flex border-slate-300 outline-navbar'
										type='email'
										name='email'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Subject</label>
									<input
										className='border-2 rounded-lg p-3 flex border-slate-300 outline-navbar'
										type='text'
										name='subject'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Message</label>
									<textarea
										className='border-2 rounded-lg p-3 outline-navbar border-slate-300'
										rows='10'
										name='message'></textarea>
								</div>

								<button className='w-full p-4 bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] text-navbar  mt-4'>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center py-12'>
					<a href='/#porto'>
						<div>
							<div className='rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
								<HiOutlineChevronDoubleUp
									className='text-navbar'
									size={30}
								/>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};
export default Contact;
