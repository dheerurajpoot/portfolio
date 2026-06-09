import { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
} from "@traken-ui/react";
import "./styles/style.css";

function PortfolioHero() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), 500);
		return () => clearTimeout(timeout);
	}, []);

	const roles = [
		"Full Stack Developer",
		"Frontend Developer",
		"Backend Developer",
	];

	const [roleIndex, setRoleIndex] = useState(0);
	const [typedText, setTypedText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentRole = roles[roleIndex];
		let timeout: number;

		if (!isDeleting && typedText !== currentRole) {
			timeout = window.setTimeout(() => {
				setTypedText(currentRole.substring(0, typedText.length + 1));
			}, 100);
		} else if (isDeleting && typedText !== "") {
			timeout = window.setTimeout(() => {
				setTypedText(currentRole.substring(0, typedText.length - 1));
			}, 50);
		} else if (!isDeleting && typedText === currentRole) {
			timeout = window.setTimeout(() => {
				setIsDeleting(true);
			}, 1000);
		} else if (isDeleting && typedText === "") {
			timeout = window.setTimeout(() => {
				setIsDeleting(false);
				setRoleIndex((prev) => (prev + 1) % roles.length);
			}, 500);
		}

		return () => clearTimeout(timeout);
	}, [typedText, isDeleting, roleIndex]);

	return (
		<section
			id='home'
			className='relative flex items-center justify-center min-h-screen w-full bg-black text-white py-12 md:py-20 overflow-hidden'>
			{/* Background Decorative Elements */}
			<div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
				<div className='absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full'></div>
				<div className='absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full'></div>
			</div>

			<div className='max-w-[768px] w-full xl:max-w-[1200px] flex flex-col items-center md:flex-row md:justify-between gap-12 md:gap-16 px-4 sm:px-6 z-10'>
				{/* Left Content */}
				<Card
					className={`w-full bg-transparent flex flex-col items-center md:items-start md:w-1/2 transition-all duration-1000 transform ${
						isVisible
							? "translate-x-0 opacity-100"
							: "-translate-x-12 opacity-0"
					}`}>
					<CardHeader className='flex bg-transparent items-center justify-center md:justify-start w-full space-x-3 mb-4 md:mb-6 p-0'>
						<div className='h-1 w-8 md:w-10 bg-indigo-500 rounded-full' />
						<span className='text-indigo-400 uppercase text-xs md:text-sm tracking-[0.2em] font-bold'>
							Full Stack Developer
						</span>
					</CardHeader>

					<CardBody className='flex flex-col items-center md:items-start w-full bg-transparent p-0'>
						<h1 className='text-center md:text-left w-full text-4xl sm:text-5xl lg:text-6xl text-gray-100 font-extrabold mb-4 md:mb-6 leading-[1.1]'>
							Hello, I'm <br />
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400'>
								Dheeru Rajpoot
							</span>
							<span className='block mt-3 text-2xl sm:text-3xl lg:text-4xl text-gray-400 font-medium min-h-[1.5em]'>
								{typedText}
								<span className='inline-block w-[2px] h-[0.8em] bg-indigo-500 ml-1 animate-pulse align-middle'></span>
							</span>
						</h1>
						<p className='text-center px-2 md:px-0 md:text-left w-full text-base md:text-lg text-gray-400 mb-8 md:mb-10 max-w-xl leading-relaxed'>
							I'm a passionate Full Stack Developer and Digital
							Entrepreneur dedicated to building exceptional web
							experiences. With expertise in the MERN Stack and
							Next.js, I transform complex ideas into elegant,
							functional digital solutions.
						</p>
					</CardBody>

					<CardFooter className='flex flex-col sm:justify-center md:justify-start sm:flex-row items-center w-full gap-4 md:gap-6 bg-transparent p-0'>
						<a
							href='./Resume.pdf'
							download='./Resume.pdf'
							className='w-full sm:w-auto'>
							<Button className='w-full group flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm md:text-base font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 cursor-pointer border border-indigo-500/20'>
								Download Resume
								<ArrowRight
									size={18}
									className='ml-2 transform group-hover:translate-x-1 transition-transform'
								/>
							</Button>
						</a>

						<div className='flex items-center space-x-5 md:space-x-6'>
							<a
								href='https://github.com/dheerurajpoot'
								aria-label='GitHub'
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-400 hover:text-white transition-all duration-300 hover:scale-110'>
								<Github size={22} />
							</a>
							<a
								href='https://www.linkedin.com/in/dheerurajpoot/'
								aria-label='LinkedIn'
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110'>
								<Linkedin size={22} />
							</a>
							<a
								href='mailto:rajpootdheeru90@gmail.com'
								aria-label='Email'
								className='text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110'>
								<Mail size={22} />
							</a>
						</div>
					</CardFooter>
				</Card>

				{/* Right Image */}
				<div
					className={`w-full md:w-1/2 relative transition-all duration-1000 delay-300 transform ${
						isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-12 opacity-0"
					}`}>
					<div className='relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] mx-auto'>
						{/* Background Glow */}
						<div className='absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse'></div>

						{/* Outer Ring */}
						<div className='absolute inset-0 rounded-full border-2 border-indigo-500/20 animate-[spin_10s_linear_infinite]'></div>
						<div className='absolute inset-2 rounded-full border border-purple-500/10 animate-[spin_15s_linear_infinite_reverse]'></div>

						{/* Main Image Container */}
						<div className='absolute inset-4 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[3px] shadow-2xl shadow-indigo-500/20'>
							<div className='w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden relative group'>
								<div
									className='w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
									style={{
										backgroundImage: `url('./IMG_2834.jpg')`,
										backgroundPosition: "center 20%",
										backgroundSize: "cover",
									}}></div>
								{/* Overlay Gradient */}
								<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40'></div>
							</div>
						</div>

						{/* Floating tags */}
						<div className='absolute -top-4 -right-4 bg-gray-900/80 backdrop-blur-md py-2 px-5 rounded-2xl shadow-xl border border-white/10 animate-float cursor-pointer hover:bg-indigo-600 transition-colors group'>
							<span className='text-xs md:text-sm font-bold text-gray-200 group-hover:text-white'>
								Full Stack
							</span>
						</div>
						<div className='absolute bottom-10 -left-8 bg-gray-900/80 backdrop-blur-md py-2 px-5 rounded-2xl shadow-xl border border-white/10 animate-float-delay cursor-pointer hover:bg-purple-600 transition-colors group'>
							<span className='text-xs md:text-sm font-bold text-gray-200 group-hover:text-white'>
								Frontend
							</span>
						</div>
						<div className='absolute bottom-2 -right-2 bg-gray-900/80 backdrop-blur-md py-2 px-5 rounded-2xl shadow-xl border border-white/10 animate-float-delay-2 cursor-pointer hover:bg-pink-600 transition-colors group'>
							<span className='text-xs md:text-sm font-bold text-gray-200 group-hover:text-white'>
								Backend
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PortfolioHero;
