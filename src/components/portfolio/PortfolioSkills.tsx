import { useState, useEffect } from "react";
import {
	Code,
	Database,
	Server,
	Github,
	Flame,
	Lock,
	HardDrive,
	Box,
	Cpu,
	Globe,
	Cloud,
	Terminal,
	Zap,
	Activity,
	GitBranch,
} from "lucide-react";

function PortfolioSkills() {
	const [isVisible, setIsVisible] = useState(false);
	const [activeCategory, setActiveCategory] = useState("All");

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), 500);
		return () => clearTimeout(timeout);
	}, []);

	const skills = [
		// Frontend
		{
			name: "NextJS",
			icon: Globe,
			category: "Frontend",
			level: "Advanced",
		},
		{ name: "React", icon: Code, category: "Frontend", level: "Advanced" },
		{
			name: "JavaScript",
			icon: Code,
			category: "Frontend",
			level: "Expert",
		},
		{
			name: "TypeScript",
			icon: Code,
			category: "Frontend",
			level: "Expert",
		},
		{
			name: "Tailwind CSS",
			icon: Cloud,
			category: "Frontend",
			level: "Expert",
		},

		// Backend
		{
			name: "NodeJS",
			icon: Server,
			category: "Backend",
			level: "Advanced",
		},
		{ name: "Express", icon: Cpu, category: "Backend", level: "Advanced" },
		{
			name: "Authentication",
			icon: Lock,
			category: "Backend",
			level: "Advanced",
		},
		{
			name: "Firebase",
			icon: Flame,
			category: "Backend",
			level: "Intermediate",
		},

		// Database
		{
			name: "MongoDB",
			icon: Database,
			category: "Database",
			level: "Advanced",
		},
		{
			name: "PostgreSQL",
			icon: Database,
			category: "Database",
			level: "Intermediate",
		},
		{
			name: "MySQL",
			icon: Database,
			category: "Database",
			level: "Intermediate",
		},

		// DevOps & Tools
		{
			name: "Docker",
			icon: Box,
			category: "DevOps",
			level: "Intermediate",
		},
		{
			name: "VPS Hosting",
			icon: HardDrive,
			category: "DevOps",
			level: "Advanced",
		},
		{
			name: "Git & Github",
			icon: Github,
			category: "Tools",
			level: "Expert",
		},
		{
			name: "Terminal/SSH",
			icon: Terminal,
			category: "Tools",
			level: "Advanced",
		},
		{ name: "Postman", icon: Server, category: "Tools", level: "Advanced" },
		{
			name: "AWS",
			icon: Cloud,
			category: "DevOps",
			level: "Intermediate",
		},
		{
			name: "CI/CD",
			icon: GitBranch,
			category: "DevOps",
			level: "Advanced",
		},
		{
			name: "WebSocket",
			icon: Activity,
			category: "Backend",
			level: "Advanced",
		},
		{
			name: "REST APIs",
			icon: Zap,
			category: "Backend",
			level: "Expert",
		},
	];

	const categories = [
		"All",
		...new Set(skills.map((skill) => skill.category)),
	];

	const filteredSkills =
		activeCategory === "All"
			? skills
			: skills.filter((skill) => skill.category === activeCategory);

	return (
		<section
			id='skills'
			className='w-full bg-black text-white py-12 md:py-20 overflow-hidden relative'>
			{/* Advanced Background Decoration */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				<div className='absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-600/10 blur-[150px] rounded-full animate-pulse'></div>
				<div className='absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-600/10 blur-[150px] rounded-full animate-pulse delay-700'></div>
				{/* Grid Pattern Overlay */}
				<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 z-10 relative'>
				<div
					className={`w-full transition-all duration-1000 transform ${
						isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-12 opacity-0"
					}`}>
					{/* Section Header */}
					<div className='flex flex-col items-center mb-20'>
						<div className='flex items-center space-x-3 mb-6'>
							<div className='h-[2px] w-12 bg-gradient-to-r from-indigo-500 to-transparent' />
							<span className='text-indigo-400 uppercase text-xs md:text-sm tracking-[0.3em] font-black'>
								Capabilities
							</span>
							<div className='h-[2px] w-12 bg-gradient-to-l from-indigo-500 to-transparent' />
						</div>
						<h2 className='text-5xl md:text-6xl lg:text-7xl font-black text-center mb-8 tracking-tighter'>
							Tech{" "}
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x'>
								Ecosystem
							</span>
						</h2>
						<p className='text-gray-400 text-center max-w-2xl text-lg md:text-xl leading-relaxed font-medium'>
							Harnessing the power of modern frameworks and
							infrastructure to build robust, industrial-grade
							digital solutions.
						</p>
					</div>

					{/* Category Filter - High Fidelity Tabs */}
					<div className='flex flex-wrap justify-center gap-1.5 mb-12 p-1.5 bg-gray-900/30 backdrop-blur-xl rounded-2xl border border-white/5 w-fit mx-auto'>
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setActiveCategory(category)}
								className={`px-4 md:px-6 py-2 rounded-xl text-xs md:text-sm font-bold transition-all duration-500 ${
									activeCategory === category
										? "bg-indigo-600 text-white shadow-lg translate-y-[-1px]"
										: "text-gray-500 hover:text-gray-200 hover:bg-white/5"
								}`}>
								{category}
							</button>
						))}
					</div>

					{/* Skills Grid - Optimized for Mobile & Smaller Tiles */}
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6'>
						{filteredSkills.map((skill, index) => (
							<div
								key={index}
								className='group relative bg-gradient-to-b from-gray-900/40 to-black/40 backdrop-blur-xl rounded-2xl p-4 md:p-6 border border-white/5 hover:border-indigo-500/40 transition-all duration-500 hover:translate-y-[-4px] flex flex-col items-center text-center overflow-hidden'>
								{/* Animated Border Gradient */}
								<div className='absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

								{/* Icon & Category */}
								<div className='relative z-10 mb-3 md:mb-4'>
									<div className='p-3 bg-indigo-500/10 rounded-xl group-hover:bg-indigo-500/20 transition-colors duration-500'>
										<skill.icon
											className='text-indigo-400 group-hover:text-indigo-300 transition-transform duration-500 group-hover:scale-110'
											size={24}
										/>
									</div>
								</div>

								{/* Name & Level */}
								<div className='relative z-10'>
									<h3 className='text-sm md:text-lg font-bold text-white mb-1 tracking-tight group-hover:text-indigo-400 transition-colors'>
										{skill.name}
									</h3>
									<div className='flex items-center justify-center gap-1.5'>
										<div className='h-1 w-1 bg-indigo-500 rounded-full animate-pulse'></div>
										<span className='text-[8px] md:text-xs font-bold text-gray-500 uppercase tracking-tighter'>
											{skill.level}
										</span>
									</div>
								</div>

								{/* Hover Background Detail */}
								<div className='absolute -bottom-6 -right-6 w-16 h-16 bg-indigo-500/5 blur-2xl rounded-full group-hover:bg-indigo-500/10 transition-all duration-500'></div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default PortfolioSkills;
