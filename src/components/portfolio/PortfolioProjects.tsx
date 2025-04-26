import { useState, useEffect } from "react";
import {
	Github,
	ExternalLink,
	PenTool,
	Layout,
	Quote,
	ShoppingBag,
} from "lucide-react";
import { Card, CardBody, CardHeader } from "@traken-ui/react";

function PortfolioProjects() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const projects = [
		{
			title: "QuoteAr: Social Media Automation",
			description:
				"A Web application that generates inspirational or custom quotes and automatically posts them to connected social media platforms (Facebook, Instagram) on scheduled intervals. Built with Next.js and integrated with Facebook Graph API, it eliminates the need for manual content creation and scheduling. Includes custom scheduling options, and social platform auth. Ideal for content creators, influencers, and digital marketers looking to streamline their daily posting.",
			image: "./quoteart.png",
			tags: ["Next.js", "Node.js", "Node cron"],
			githubUrl: "https://github.com/dheerurajpoot/quote-generator",
			liveUrl: "https://www.quoteart.xyz",
			featured: true,
			icon: <Quote className='w-5 h-5' />,
		},
		{
			title: "EVTN: Digital Marketplace",
			description:
				"EVTN is a digital marketplace built with Next.js where users can buy and sell digital assets like websites, Instagram pages, and Facebook pages. It features secure user authentication, asset listing, and admin management, offering a smooth and responsive user experience. Designed for creators and entrepreneurs, EVTN simplifies digital asset trading with a clean UI and efficient workflow.",
			image: "./evtn.png",
			tags: ["Next.js", "Node.js", "Developer Tools"],
			githubUrl: "https://github.com/dheerurajpoot/tech_bazar",
			liveUrl: "https://www.evtn.org",
			featured: true,
			icon: <ShoppingBag className='w-5 h-5' />,
		},
		{
			title: "Connectify: Social Media App",
			description:
				"A dynamic social networking platform developed using Next.js, featuring user authentication, post creation, liking, commenting, following, and real-time chat, built with a secure and responsive design.",
			image: "/api/placeholder/400/300",
			tags: ["React", "Next.js", "Typescript", "Node.js", "Tailwind CSS"],
			githubUrl: "https://github.com/dheerurajpoot/connectify",
			liveUrl: "#",
			featured: false,
			icon: <Layout className='w-5 h-5' />,
		},
		{
			title: "CompressAll",
			description:
				"A web app built with Next.js that allows users to compress images easily while maintaining quality, helping reduce file sizes for faster uploads and web performance.",
			image: "/api/placeholder/400/300",
			tags: ["Next.js", "Typescript", "Desktop App"],
			githubUrl: "https://github.com/dheerurajpoot/compressall",
			liveUrl: "#",
			featured: false,
			icon: <PenTool className='w-5 h-5' />,
		},
		{
			title: "JPG to PNG Converter",
			description:
				"A simple and user-friendly image converter tool created using Next.js, allowing users to convert images between JPG and PNG formats directly in the browser without quality loss.",
			image: "/api/placeholder/400/300",
			tags: ["Next.js", "Typescript", "Tailwind", "Shadcn"],
			githubUrl: "https://github.com/dheerurajpoot/image-converter",
			liveUrl: "https://image-converter-toolz.vercel.app/",
			featured: false,
			icon: <PenTool className='w-5 h-5' />,
		},
		{
			title: "WordPress Theme Detector",
			description:
				"A utility tool built with Next.js that detects the active theme and plugins used on any WordPress website by analyzing its public source code and metadata.",
			image: "/api/placeholder/400/300",
			tags: ["Next.js", "Typescript", "Tailwind"],
			githubUrl: "https://github.com/dheerurajpoot/wp-theme-detector",
			liveUrl: "https://wp-theme-detector.vercel.app/",
			featured: false,
			icon: <PenTool className='w-5 h-5' />,
		},
		{
			title: "Downloader Pro",
			description:
				"A powerful media downloading tool built using Next.js that allows users to download Instagram reels and posts, Facebook videos, and YouTube videos easily with just a URL. The app provides a clean, responsive UI and seamless download experience.",
			image: "/api/placeholder/400/300",
			tags: ["Next.js", "Typescript", "Tailwind", "ytdl-core"],
			githubUrl: "https://github.com/dheerurajpoot/downloader-pro",
			liveUrl: "https://downloader-pro.vercel.app/",
			featured: false,
			icon: <PenTool className='w-5 h-5' />,
		},
		{
			title: "PDF to Word & Word to PDF Converter",
			description:
				"A fast and reliable file conversion tool developed with Next.js, enabling users to convert PDF documents to editable Word files and vice versa with high accuracy and formatting retention.",
			image: "/api/placeholder/400/300",
			tags: ["Next.js", "Typescript", "Tailwind", "Puppeteer", "pdf-lib"],
			githubUrl: "https://github.com/dheerurajpoot/pdf2wordconverter",
			liveUrl: "https://pdf2wordconverter.vercel.app/",
			featured: false,
			icon: <PenTool className='w-5 h-5' />,
		},
	];

	return (
		<section
			id='projects'
			className='bg-black text-white py-16 md:py-24 lg:py-32 overflow-hidden relative'>
			<div className='max-w-[768px] w-full xl:max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<div className='flex items-center justify-center space-x-3 mb-6'>
						<div className='h-1 w-10 bg-indigo-500' />
						<span className='text-indigo-400 uppercase text-sm tracking-widest font-medium'>
							My Work
						</span>
						<div className='h-1 w-10 bg-indigo-500' />
					</div>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
						Featured{" "}
						<span className='text-indigo-400'>Projects</span>
					</h2>
					<p className='text-gray-300 max-w-3xl mx-auto text-base md:text-lg'>
						A collection of projects showcasing my expertise in
						system programming, version control systems, and web
						development.
					</p>
				</div>

				{/* Featured Projects - Improved responsiveness */}
				<div className='flex flex-col md:flex-row items-center justify-center  gap-6 md:gap-12 lg:gap-16 mb-20'>
					{projects
						.filter((project) => project.featured)
						.map((project, index) => (
							<Card
								key={index}
								className={`group relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all duration-500 transform hover:border-indigo-500 p-0 ${
									isVisible
										? "translate-y-0 opacity-100"
										: "translate-y-12 opacity-0"
								}`}>
								<CardHeader className='aspect-video relative overflow-hidden bg-transparent'>
									<img
										src={project.image}
										alt={project.title}
										className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-t-2xl'
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent'></div>

									{/* Project Links */}
									<div className='absolute top-4 right-4 flex space-x-2'>
										<a
											href={project.githubUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='bg-black/50 hover:bg-indigo-600 p-2 rounded-full backdrop-blur-sm transition-colors duration-300'>
											<Github
												size={18}
												className='text-white'
											/>
										</a>
										<a
											href={project.liveUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='bg-black/50 hover:bg-indigo-600 p-2 rounded-full backdrop-blur-sm transition-colors duration-300'>
											<ExternalLink
												size={18}
												className='text-white'
											/>
										</a>
									</div>
								</CardHeader>

								<CardBody className='p-4 sm:p-6 bg-transparent text-gray-300'>
									<div className='flex items-center mb-3'>
										<div className='bg-indigo-500/20 text-indigo-400 p-2 rounded-lg mr-3'>
											{project.icon}
										</div>
										<h3 className='text-lg sm:text-xl md:text-2xl font-bold truncate'>
											{project.title}
										</h3>
									</div>
									<p className='text-gray-300 mb-4 text-sm sm:text-base'>
										{project.description}
									</p>
									<div className='flex flex-wrap gap-2'>
										{project.tags.map((tag, tagIndex) => (
											<span
												key={tagIndex}
												className='bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm'>
												{tag}
											</span>
										))}
									</div>
								</CardBody>
							</Card>
						))}
				</div>

				{/* Other Projects Grid - Improved for better responsiveness */}
				<h3 className='text-xl sm:text-2xl font-bold mb-6 text-center'>
					Other Notable Projects
				</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
					{projects
						.filter((project) => !project.featured)
						.map((project, index) => (
							<div
								key={index}
								className={`group border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:border-indigo-500 transition-all duration-500 transform text-gray-200 ${
									isVisible
										? "translate-y-0 opacity-100"
										: "translate-y-12 opacity-0"
								}`}
								style={{
									transitionDelay: `${(index + 2) * 200}ms`,
								}}>
								<div className='flex items-center justify-between mb-4 '>
									<div className='flex items-center'>
										<div className='bg-indigo-500/20 text-indigo-400 p-2 rounded-lg mr-3'>
											{project.icon}
										</div>
										<h3 className='font-bold text-base sm:text-lg truncate text-gray-200 '>
											{project.title}
										</h3>
									</div>
									<div className='flex space-x-2'>
										<a
											href={project.githubUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='text-gray-400 hover:text-indigo-400 transition-colors duration-300'>
											<Github size={16} />
										</a>
										<a
											href={project.liveUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='text-gray-400 hover:text-indigo-400 transition-colors duration-300'>
											<ExternalLink size={16} />
										</a>
									</div>
								</div>
								<p className='text-gray-300 mb-4 text-xs sm:text-sm line-clamp-2'>
									{project.description}
								</p>
								<div className='flex flex-wrap gap-2'>
									{project.tags.map((tag, tagIndex) => (
										<span
											key={tagIndex}
											className='bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs'>
											{tag}
										</span>
									))}
								</div>
							</div>
						))}
				</div>
			</div>

			{/* Background effects - Positioned to avoid overflow */}
			<div className='absolute top-20 right-0 w-64 h-64 bg-indigo-600 opacity-10 rounded-full blur-3xl pointer-events-none'></div>
			<div className='absolute bottom-20 left-0 w-64 h-64 bg-indigo-600 opacity-10 rounded-full blur-3xl pointer-events-none'></div>
		</section>
	);
}

export default PortfolioProjects;
