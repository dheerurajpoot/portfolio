import { useState, useEffect } from "react";
import { Code, Figma, Layers, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@traken-ui/react";

function PortfolioAbout() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const skills = [
		{ name: "Frontend Development", icon: <Code className='w-5 h-5' /> },
		{ name: "Backend Development", icon: <Figma className='w-5 h-5' /> },
		{
			name: "Full-Stack Applications",
			icon: <Layers className='w-5 h-5' />,
		},
		{
			name: "Creative Problem Solving",
			icon: <Lightbulb className='w-5 h-5' />,
		},
	];

	const experiences = [
		{
			year: "June, 2024 - July, 2024",
			position: "Full Stack Developer Intern",
			company: "Innobyte Services",
			description:
				"Completed a hands-on Full Stack Developer internship where I developed a fully functional e-commerce web application from scratch. The project included user registration and login, email verification, secure payment gateway integration, and responsive UI design, demonstrating my skills in both frontend and backend development.",
		},
		{
			year: "2024 - 2026",
			position: "Master of Computer Applications",
			company: "Sikkim Skills University",
			description:
				"Currently pursuing a Master's degree in Computer Applications, focusing on advanced software engineering principles, cloud computing, and full-stack architecture.",
		},
		{
			year: "2019 - 2022",
			position: "Bachelor of Science",
			company: "CSJM University Kanpur",
			description:
				"Completed a Bachelor's degree in Science, which provided a solid academic foundation in logical reasoning, analytical thinking, and core programming principles.",
		},
	];

	return (
		<section
			id='about'
			className='relative bg-black text-white py-12 md:py-20 overflow-hidden'>
			{/* Background Decorative Elements */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				<div className='absolute top-[20%] right-[-5%] w-[35%] h-[35%] bg-indigo-600/5 blur-[120px] rounded-full'></div>
				<div className='absolute bottom-[20%] left-[-5%] w-[35%] h-[35%] bg-purple-600/5 blur-[120px] rounded-full'></div>
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative'>
				{/* Section Header */}
				<div className='flex flex-col items-center text-center mb-20'>
					<div className='flex items-center space-x-3 mb-6'>
						<div className='h-[2px] w-12 bg-gradient-to-r from-indigo-500 to-transparent' />
						<span className='text-indigo-400 uppercase text-xs md:text-sm tracking-[0.3em] font-black'>
							The Creator
						</span>
						<div className='h-[2px] w-12 bg-gradient-to-l from-indigo-500 to-transparent' />
					</div>
					<h2 className='text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter'>
						About{" "}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400'>
							Me
						</span>
					</h2>
					<p className='text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium'>
						I bridge the gap between complex engineering and elegant
						design, crafting digital experiences that are as
						powerful as they are beautiful.
					</p>
				</div>

				{/* About Content */}
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
					{/* Experience Timeline */}
					<div
						className={`lg:col-span-7 transition-all duration-1000 delay-300 transform ${
							isVisible
								? "translate-x-0 opacity-100"
								: "-translate-x-12 opacity-0"
						}`}>
						<div className='bg-gray-900/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl'>
							<h3 className='text-2xl font-bold mb-10 flex items-center text-white'>
								<span className='bg-indigo-500/20 text-indigo-400 p-3 rounded-2xl mr-4'>
									<Layers className='w-6 h-6' />
								</span>
								Education & Experience
							</h3>

							<div className='space-y-12 relative'>
								{/* Vertical line for timeline */}
								<div className='absolute left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-indigo-500/50 via-gray-800 to-transparent'></div>

								{experiences.map((exp, index) => (
									<div
										key={index}
										className='relative pl-12 group'>
										<div className='absolute left-0 top-1.5 w-[24px] h-[24px] bg-black rounded-full border-2 border-indigo-500 z-10 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(79,70,229,0.3)]'>
											<div className='w-2 h-2 bg-indigo-500 rounded-full'></div>
										</div>
										<span className='inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest rounded-full mb-3 border border-indigo-500/20'>
											{exp.year}
										</span>
										<h4 className='font-bold text-xl text-white mb-1 group-hover:text-indigo-400 transition-colors'>
											{exp.position}
										</h4>
										<span className='text-gray-500 font-bold text-sm block mb-4 uppercase tracking-tighter'>
											{exp.company}
										</span>
										<p className='text-gray-400 leading-relaxed text-base'>
											{exp.description}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Profile & Skills Summary */}
					<div
						className={`lg:col-span-5 space-y-8 transition-all duration-1000 delay-500 transform ${
							isVisible
								? "translate-x-0 opacity-100"
								: "translate-x-12 opacity-0"
						}`}>
						{/* Bio Card */}
						<div className='bg-gradient-to-br from-gray-900/40 to-black/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/5 shadow-2xl overflow-hidden relative group'>
							<div className='absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full'></div>

							<div className='flex items-center gap-6 mb-8 relative z-10'>
								<div className='w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 p-[2px] shadow-xl group-hover:rotate-3 transition-transform duration-500'>
									<div className='w-full h-full rounded-2xl bg-black overflow-hidden'>
										<img
											src='./IMG_2834.jpg'
											alt='Dheeru Rajpoot'
											className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700'
										/>
									</div>
								</div>
								<div>
									<h3 className='text-2xl font-black text-white tracking-tighter'>
										Dheeru Rajpoot
									</h3>
									<p className='text-indigo-400 text-sm font-bold uppercase tracking-widest'>
										Full Stack Architect
									</p>
								</div>
							</div>

							<p className='text-gray-400 leading-relaxed mb-8 relative z-10 italic'>
								"I don't just write code; I build digital
								ecosystems that scale. My passion lies in
								solving complex architectural challenges with
								minimalist and efficient solutions."
							</p>

							<div className='grid grid-cols-2 gap-4 relative z-10'>
								{skills.map((skill, index) => (
									<div
										key={index}
										className='flex items-center gap-3 bg-white/5 rounded-2xl p-3 border border-white/5 hover:bg-white/10 transition-colors group/skill'>
										<div className='text-indigo-400 group-hover/skill:scale-110 transition-transform'>
											{skill.icon}
										</div>
										<span className='font-bold text-xs text-gray-300'>
											{skill.name.split(" ")[0]}
										</span>
									</div>
								))}
							</div>
						</div>

						{/* Quick Connect */}
						<div className='bg-indigo-600 rounded-[2rem] p-8 md:p-10 text-center relative overflow-hidden group hover:bg-indigo-700 transition-colors duration-500'>
							<div className='absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent'></div>
							<h3 className='text-2xl font-black text-white mb-4 relative z-10 tracking-tight'>
								Ready to start a project?
							</h3>
							<p className='text-indigo-100 mb-8 relative z-10 font-medium'>
								Let's build something exceptional together.
							</p>
							<a
								href='#contact'
								className='relative z-10 inline-block w-full'>
								<Button className='w-full bg-white text-indigo-600 hover:bg-gray-100 font-black py-4 rounded-2xl transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group-hover:gap-4'>
									Get In Touch
									<ArrowRight size={20} />
								</Button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PortfolioAbout;
