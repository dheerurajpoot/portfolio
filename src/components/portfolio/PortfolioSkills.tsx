import { useState, useEffect } from "react";
import { Code, Database, Server, Github } from "lucide-react";

function PortfolioSkills() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), 500);
		return () => clearTimeout(timeout);
	}, []);

	const skills = [
		{ name: "NextJS", icon: Code, category: "Backend" },
		{ name: "React", icon: Code, category: "Frontend" },
		{ name: "JavaScript", icon: Code, category: "Frontend" },
		{ name: "NodeJS", icon: Server, category: "Backend" },
		{ name: "Express", icon: Server, category: "Backend" },
		{ name: "MongoDB", icon: Database, category: "Database" },
		{ name: "MySQL", icon: Database, category: "Database" },
		{ name: "PostgreSQL", icon: Database, category: "Database" },
		{ name: "Git", icon: Code, category: "Tools" },
		{ name: "Github", icon: Github, category: "Tools" },
		{ name: "Postman", icon: Server, category: "Tools" },
	];

	return (
		<section
			id='skills'
			className='w-full bg-black text-white py-12 md:py-20 lg:py-24 overflow-hidden relative'>
			<div className='max-w-[768px] w-full xl:max-w-[1080px] mx-auto px-4 sm:px-6'>
				<div
					className={`w-full transition-all duration-1000 transform ${
						isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-12 opacity-0"
					}`}>
					<div className='flex items-center justify-center md:justify-start w-full space-x-3 mb-6 md:mb-8'>
						<div className='h-1 w-8 md:w-10 bg-indigo-500' />
						<span className='text-indigo-400 uppercase text-xs md:text-sm tracking-widest font-medium'>
							Tech Stack
						</span>
					</div>

					<h2 className='text-center md:text-left text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-12'>
						Technologies I{" "}
						<span className='text-indigo-400'>Work With</span>
					</h2>

					{/* Optional: Skills by Category */}
					<div className='my-16'>
						<div className='flex flex-wrap justify-center gap-4'>
							{[
								...new Set(
									skills.map((skill) => skill.category)
								),
							].map((category, index) => (
								<span
									key={index}
									className='px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full text-indigo-400 text-sm border border-indigo-400/30 hover:border-indigo-400/50 transition-all cursor-pointer'>
									{category}
								</span>
							))}
						</div>
					</div>

					{/* Skills Grid */}
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{skills.map((skill, index) => (
							<div
								key={index}
								className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group hover:bg-white/10 hover:border-indigo-400/30 transition-all duration-300 hover:transform hover:scale-105'>
								<div className='flex items-center'>
									<skill.icon
										className='text-indigo-400 mr-4 transition-colors'
										size={32}
									/>
									<div>
										<h3 className='text-white font-semibold text-lg group-hover:text-indigo-400 transition-colors'>
											{skill.name}
										</h3>
										<p className='text-gray-400 text-sm group-hover:text-gray-300 transition-colors'>
											{skill.category}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default PortfolioSkills;
