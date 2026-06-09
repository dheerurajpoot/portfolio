import { Code, Github, ExternalLink } from "lucide-react";
import quoteart from "/quoteart.jpg";
import library from "/library.jpg";
import lesshopy from "/lesshopy.jpg";
import maverix from "/maverix.png";
import deelzo from "/deelzo.png";

const projects = [
	{
		id: 1,
		title: "Maverix HRM",
		description:
			"A Human Resource Management System (HRM) built with Next.js and Node.js for efficient HR management. It includes features such as employee management, leave tracking, and performance evaluation. It has features such as attendance management, salary management, leave management, and other features.",
		tech: ["NextJS", "Supabase", "Imagekit", "Node-cron", "Git", "Github"],
		status: "Completed",
		category: "web app",
		features: [
			"Employee Management",
			"Leave Tracking",
			"Performance Evaluation",
			"Admin, HR, and Employee Panel",
			"Attendance Management",
			"Salary Management",
			"Leave Management",
			"Other",
		],
		github: "https://github.com/dheerurajpoot/MaveriX-Hrm",
		live: "https://www.maverix.online/",
		image: maverix,
	},
	{
		id: 2,
		title: "Deelzo",
		description:
			"Deelzo is a trusted marketplace for buying and selling digital assets and a shop for digital products. We empower entrepreneurs and digital investors to discover, evaluate, and acquire high-quality digital properties with confidence. It includes features such as digital asset marketplace, admin and employee panel, payu payment integration, and email notification integration.",
		tech: [
			"NextJS",
			"Tailwind",
			"NodeJS",
			"Imagekit",
			"MongoDB",
			"Git",
			"Github",
		],
		status: "Working...",
		category: "web app",
		features: [
			"Digital Asset Marketplace",
			"Admin and Employee Panel",
			"PayU Payment Integration",
			"User Authentication & Authorization",
			"Product and Listing Management",
			"Order Management",
			"User Management",
			"Email Notification Integration",
		],
		github: "https://github.com/dheerurajpoot/deelzo",
		live: "https://www.deelzo.com",
		image: deelzo,
	},
	{
		id: 1,
		title: "QuoteArt.xyz",
		description:
			"A Web application that generates inspirational quotes and automatically posts them to connected social media platforms on scheduled intervals. Built with Next.js and integrated with Facebook Graph API, it eliminates the need for manual content creation and scheduling. Includes custom scheduling options, and social platform auth. Ideal for content creators, influencers",
		tech: [
			"NextJS",
			"Tailwind",
			"NodeJS",
			"Cloudinary",
			"Meta Graph API",
			"MongoDB",
			"Git",
			"Github",
		],
		status: "Completed",
		category: "web app",
		features: [
			"Auto Quote Image Generator",
			"Auto Social Media Poster",
			"Multiple Quote Template",
			"Admin Panel for Management",
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
		id: 3,
		title: "Community Library",
		description:
			"A full-stack web platform where users can list their books for others to borrow, fostering a community-driven sharing system. Includes an intuitive admin panel for managing users, books, and borrow requests. Integrated with email notifications to keep users informed about borrow/return updates. Designed for book lovers who want to share and discover books locally without commercial rentals.",
		tech: [
			"ReactJS",
			"Tailwind",
			"NodeJS",
			"ExpressJS",
			"Cloudinary",
			"MongoDB",
			"Git",
			"Github",
		],
		status: "Completed",
		category: "web app",
		features: [
			"User Book Listing",
			"Borrow & Return System",
			"Admin Panel for Management",
			"Email Notification Integration",
			"User Authentication & Authorization",
			"Responsive Design",
			"Book Search & Filters",
			"Borrow History Tracking",
		],
		github: "https://github.com/dheerurajpoot/community-library",
		live: "#",
		image: library,
	},
	{
		id: 4,
		title: "Lesshopy - E-commerce Platform",
		description:
			"A fully functional e-commerce platform that allows users to browse, search, and purchase products seamlessly. Integrated with Razorpay for secure online payments, it provides a smooth shopping experience. The platform includes a custom-built Admin Panel for managing products, categories, orders, and users efficiently. Built with the MERN stack, it ensures scalability, speed, and security.",
		tech: [
			"ReactJS",
			"NodeJS",
			"Express",
			"Razorpay",
			"Cloudinary",
			"MongoDB",
			"Tailwind",
			"Git",
			"Github",
		],
		status: "Completed",
		category: "web app",
		features: [
			"User Authentication & Authorization",
			"Product Browsing & Search",
			"Add to Cart & Checkout",
			"Razorpay Secure Payment Integration",
			"Custom Admin Panel",
			"Product & Category Management",
			"Order Management System",
			"Responsive UI/UX Design",
		],
		github: "https://github.com/dheerurajpoot/DR-Store-eCommerce",
		live: "https://drstore.vercel.app/",
		image: lesshopy,
	},
];

function ProjectsSection() {
	return (
		<section
			id='projects'
			className='w-full bg-black text-white py-12 md:py-20 overflow-hidden relative'>
			{/* Background Decoration */}
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden'>
				<div className='absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-indigo-600/5 blur-[120px] rounded-full'></div>
				<div className='absolute bottom-[20%] left-[-10%] w-[30%] h-[30%] bg-purple-600/5 blur-[120px] rounded-full'></div>
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 z-10 relative'>
				<div className='flex flex-col items-center mb-16'>
					<div className='flex items-center space-x-3 mb-4'>
						<div className='h-1 w-8 bg-indigo-500 rounded-full' />
						<span className='text-indigo-400 uppercase text-xs md:text-sm tracking-[0.2em] font-bold'>
							My Work
						</span>
					</div>
					<h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-6'>
						Featured{" "}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400'>
							Projects
						</span>
					</h2>
					<p className='text-gray-400 text-center max-w-2xl text-base md:text-lg leading-relaxed'>
						A selection of my recent work, ranging from complex
						enterprise systems to creative web applications. Each
						project is built with a focus on performance,
						scalability, and user experience.
					</p>
				</div>

				{/* Projects Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project) => (
						<div
							key={project.id}
							className='group flex flex-col bg-gray-900/40 backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2'>
							{/* Image Container */}
							<div className='h-64 relative overflow-hidden bg-gray-800/50'>
								{project.image ? (
									<img
										src={project.image}
										alt={project.title}
										className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
									/>
								) : (
									<div className='w-full h-full bg-gradient-to-br from-indigo-900/40 to-purple-900/40 flex items-center justify-center'>
										<Code className='w-12 h-12 text-white/10' />
									</div>
								)}
								{/* Overlay on hover */}
								<div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
									<a
										href={project.github}
										target='_blank'
										rel='noopener noreferrer'
										className='p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-indigo-600 transition-colors duration-300'
										title='View Code'>
										<Github size={22} />
									</a>
									{project.live !== "#" && (
										<a
											href={project.live}
											target='_blank'
											rel='noopener noreferrer'
											className='p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-indigo-600 transition-colors duration-300'
											title='Live Demo'>
											<ExternalLink size={22} />
										</a>
									)}
								</div>
								{/* Badges */}
								<div className='absolute top-4 left-4 flex flex-col gap-2'>
									<span className='px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-600/80 text-white backdrop-blur-md border border-indigo-500/20'>
										{project.category}
									</span>
									<span
										className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${
											project.status === "Completed"
												? "bg-green-500/10 text-green-400 border-green-500/20"
												: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
										}`}>
										{project.status}
									</span>
								</div>
							</div>

							{/* Content Container */}
							<div className='p-8 flex flex-col flex-grow'>
								<h3 className='text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors'>
									{project.title}
								</h3>

								<p className='text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3'>
									{project.description}
								</p>

								{/* Features List */}
								<div className='mb-8'>
									<p className='text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3'>
										Key Highlights
									</p>
									<div className='space-y-2.5'>
										{project.features
											.slice(0, 4)
											.map((feature, i) => (
												<div
													key={i}
													className='flex items-start text-xs text-gray-400 group/item'>
													<div className='mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3 shrink-0 group-hover/item:scale-125 transition-transform' />
													<span className='group-hover/item:text-gray-300 transition-colors'>
														{feature}
													</span>
												</div>
											))}
									</div>
								</div>

								{/* Tech Stack Footer */}
								<div className='mt-auto pt-6 border-t border-white/5'>
									<div className='flex flex-wrap gap-2'>
										{project.tech.map((tech, i) => (
											<span
												key={i}
												className='text-[10px] font-semibold text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/10 hover:bg-indigo-500/20 transition-colors'>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
export default ProjectsSection;
