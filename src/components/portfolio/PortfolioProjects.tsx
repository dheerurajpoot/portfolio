import { Code, Server, Github, ExternalLink } from "lucide-react";
import quoteart from "/quoteart.jpg";
import toolhub from "/toolhub.jpg";
import wordfinder from "/findwordfinder.jpg";

const projects = [
	{
		id: 1,
		title: "QuoteArt.xyz",
		description:
			"A Web application that generates inspirational or custom quotes and automatically posts them to connected social media platforms (Facebook, Instagram) on scheduled intervals. Built with Next.js and integrated with Facebook Graph API, it eliminates the need for manual content creation and scheduling. Includes custom scheduling options, and social platform auth. Ideal for content creators, influencers, and digital marketers looking to streamline their daily posting.",
		tech: ["NextJS", "Tailwind", "NodeJS", "MongoDB", "Git", "Github"],
		status: "Completed",
		category: "game",
		features: [
			"Auto Quote Image Generator",
			"Auto Social Media Poster",
			"Multiple Quote Template",
			"Multiple Language",
			"Easy Integration",
			"Custom Scheduling",
			"Social Platform Auth",
			"Meta Graph API",
		],
		github: "https://github.com/dheerurajpoot/quote-generator",
		live: "https://www.quoteart.xyz",
		image: quoteart,
	},
	{
		id: 2,
		title: "FindwordFinder.com",
		description:
			"FindWordFinder.com is a word discovery and word game support platform designed to help users enhance their vocabulary, solve puzzles, and win word games like Scrabble, Wordle, and crosswords. The tool allows users to input letters, prefixes, or suffixes and instantly generate meaningful words from a vast dictionary database. It's an essential resource for word game enthusiasts, students, and language learners.",
		tech: [
			"NextJS",
			"Tailwind",
			"NodeJS",
			"MongoDB",
			"Datamuse API",
			"Git",
			"Github",
		],
		status: "Completed",
		category: "web",
		features: [
			"Smart Word Finder",
			"Fun Word Games",
			"Crossword Solver",
			"Real-time Suggestions",
			"Filter & Sort Options",
			"SEO-Optimized",
			"Responsive Design",
		],
		github: "https://github.com/dheerurajpoot/word-finder",
		live: "https://www.findwordfinder.com",
		image: wordfinder,
	},
	{
		id: 3,
		title: "SMMGarden.com",
		description:
			"SMMGarden.com is a comprehensive web application offering 50+ powerful online tools including calculators, converters, generators, and productivity utilities—all under one roof. Built with performance and user experience in mind, the platform serves as a go-to resource for both everyday users and professionals looking for quick solutions without installing any software.",
		tech: ["NextJS", "Tailwind", "NodeJS", "MongoDB", "Git", "Github"],
		status: "Completed",
		category: "web",
		features: [
			"Modern UI/UX",
			"50+ useful tools",
			"SEO-optimized for better visibility",
			"Responsive Design",
			"Secure HTTPS-enabled platform",
			"User-friendly interface",
			"Built for productivity",
			"No login or installation required",
			"Multiple tools in one place",
			"Easy to use",
		],
		github: "https://github.com/dheerurajpoot/thetoolshub",
		live: "https://www.smmgarden.com",
		image: toolhub,
	},
];

function ProjectsSection() {
	return (
		<section
			id='projects'
			className='w-full bg-black text-white py-12 md:py-20 lg:py-24 overflow-hidden relative'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-indigo-400'>
					Featured Projects
				</h2>
				<p className='text-gray-300 text-center mb-12 max-w-2xl mx-auto'>
					Here are some of the projects I've worked on, showcasing my
					skills.
				</p>
				{/* Projects Display */}
				<div className='overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-transparent hover:scrollbar-thumb-purple-500/70 pb-4'>
					<div className='flex gap-6 w-max'>
						{projects.map((project) => (
							<div
								key={project.id}
								className='bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group hover:bg-white/10 transition-all flex-shrink-0 w-80'>
								<div className='h-48 relative overflow-hidden bg-gray-900/50'>
									{project.image ? (
										<>
											<img
												src={project.image}
												alt={`${project.title} screenshot`}
												className='w-full h-full object-contain transition-transform duration-300 group-hover:scale-105'
												onError={(e) => {
													// Fallback to gradient background if image fails to load
													const img =
														e.target as HTMLImageElement;
													img.style.display = "none";
													(
														img.nextElementSibling as HTMLElement
													).style.display = "flex";
												}}
											/>
											{/* Fallback gradient background */}
											<div className='absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 items-center justify-center hidden'>
												<div className='text-6xl text-white/20'>
													{project.category ===
													"web" ? (
														<Code />
													) : (
														<Server />
													)}
												</div>
											</div>
											{/* Overlay for better text readability on hover */}
											<div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
										</>
									) : (
										/* Default gradient background when no image is provided */
										<div className='w-full h-full bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center'>
											<div className='text-6xl text-white/20'>
												{project.category === "web" ? (
													<Code />
												) : (
													<Server />
												)}
											</div>
										</div>
									)}
								</div>
								<div className='p-6'>
									<div className='flex items-center justify-between mb-3'>
										<span
											className={`px-3 py-1 rounded-full text-xs font-medium ${
												project.status === "Completed"
													? "bg-green-500/20 text-green-300"
													: "bg-yellow-500/20 text-yellow-300"
											}`}>
											{project.status}
										</span>
										<div className='flex space-x-2'>
											<a
												href={project.github}
												className='text-gray-400 hover:text-white transition-colors'>
												<Github size={20} />
											</a>
											<a
												href={project.live}
												className='text-gray-400 hover:text-white transition-colors'>
												<ExternalLink size={20} />
											</a>
										</div>
									</div>
									<h3 className='text-xl font-bold text-white mb-3'>
										{project.title}
									</h3>
									<p className='text-gray-300 mb-4 text-sm leading-relaxed'>
										{project.description}
									</p>
									<div className='flex flex-wrap gap-2 mb-4'>
										{project.tech.map((tech, i) => (
											<span
												key={i}
												className='bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-lg text-xs'>
												{tech}
											</span>
										))}
									</div>
									<div className='space-y-1'>
										{project.features.map((feature, i) => (
											<div
												key={i}
												className='flex items-center text-sm text-gray-400'>
												<span className='text-green-400 mr-2'>
													✓
												</span>
												{feature}
											</div>
										))}
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
export default ProjectsSection;
