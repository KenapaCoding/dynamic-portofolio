/** @format */

import React from 'react';

const About = () => {
	return (
		<div>
			<div id='about' className='text-[20px] md:text-[40px] font-sora text-[#FBFBFB] md:leading-[72px]'>
				Let me tell you a little more about myself
			</div>
			<div className='flex flex-col items-center xl:items-stretch xl:flex-row gap-9 mt-[40px]'>
				<img
                    className='object-cover w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-[20px]'
					src={require('../assets/photo-2.jpg')}
					alt=''
				/>
				<div className='bg-[#323443] p-[20px] text-slate-400 rounded-[20px] md:mr-20'>
					Welcome to my portfolio! I'm Jane Doe, a creative and dedicated
					professional based in the vibrant city of New York. With a passion for
					design and a keen eye for detail, I bring a unique perspective to
					every project I undertake. In my journey as a graphic designer, I've
					honed my skills in creating visually stunning and impactful designs. I
					thrive on turning concepts into reality and am constantly pushing the
					boundaries of creativity. My goal is to not just meet but exceed
					client expectations. I specialize in a range of design areas, from
					branding to web design, ensuring a cohesive and compelling visual
					identity for every brand I work with. My work is not just about
					aesthetics; it's about crafting experiences that resonate with the
					audience. Outside of the design world, you'll find me exploring local
					art galleries, seeking inspiration from various forms of creativity.
					These experiences contribute to my innovative approach and help me
					stay on the cutting edge of design trends. Currently, I'm exploring
					new techniques in UI/UX design and staying updated on the latest
					industry tools. Let's connect and discuss how we can bring your
					creative vision to life. Feel free to reach out to me at
					jane.doe@email.com. Thank you for visiting my portfolio, and I look
					forward to the opportunity of collaborating on exciting projects!
				</div>
			</div>
		</div>
	);
};

export default About;
