/** @format */

import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Projects from './components/Project';
import Skills from './components/Skills';

function App() {
	return (
		<div id='porto' className=' md:px-[100px] px-[30px] w-full bg-black-2 flex flex-col'>
			<Navbar />
			<div className='mt-[70px] md:mt-[100px]'>
				<hr className='bg-[#4D4D4D] border-none h-[1px]  ' />
				<Main />
				<hr className='bg-[#4D4D4D] border-none h-[1px] my-5' />
				<About />
				<hr className='bg-[#4D4D4D] border-none h-[1px] my-5' />
				<Skills />
				<hr className='bg-[#4D4D4D] border-none h-[1px] my-5' />
				<Projects />
				<hr className='bg-[#4D4D4D] border-none h-[1px] my-5' />
				<Contact />
			</div>
		</div>
	);
}

export default App;
