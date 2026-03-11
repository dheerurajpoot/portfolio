import { Code, Server, Github, ExternalLink } from "lucide-react";
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
		tech: [
			"NextJS",
			"Supabase",
			"Imagekit",
			"Node-cron",
			"Git",
			"Github",
		],
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
								className='bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group hover:bg-white/10 transition-all flex-shrink-0 w-96'>
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
