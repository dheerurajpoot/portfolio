import { useState } from "react";

function PortfolioFooter() {
	const [currentYear] = useState(new Date().getFullYear());

	const navLinks = [
		{ name: "Home", href: "#home" },
		{ name: "Skills", href: "#skills" },
		{ name: "Projects", href: "#projects" },
		{ name: "About", href: "#about" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<footer className='relative w-full bg-black py-10 border-t border-white/5'>
			{/* Subtle Background Glow */}
			<div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-indigo-600/5 blur-[100px] pointer-events-none'></div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<div className='flex flex-col md:flex-row items-center justify-between gap-8'>
					{/* Brand/Logo Section */}
					<div className='flex flex-col items-center md:items-start'>
						<a
							href='#home'
							className='text-xl font-black tracking-tighter text-white mb-2'>
							DHEERU<span className='text-indigo-500'>.</span>
						</a>
						<p className='text-gray-500 text-xs font-medium uppercase tracking-[0.2em]'>
							Full Stack Developer
						</p>
					</div>

					{/* Navigation Links */}
					<nav className='flex flex-wrap justify-center gap-x-8 gap-y-4'>
						{navLinks.map((link, index) => (
							<a
								key={index}
								href={link.href}
								className='text-sm font-bold text-gray-500 hover:text-white transition-colors duration-300 relative group'>
								{link.name}
								<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full'></span>
							</a>
						))}
					</nav>

					{/* Copyright Section */}
					<div className='flex flex-col items-center md:items-end'>
						<div className='flex items-center gap-2 mb-1'>
							<span className='text-white font-bold text-sm'>
								&copy; {currentYear}
							</span>
							<div className='h-1 w-4 bg-indigo-500 rounded-full' />
						</div>
						<p className='text-gray-600 text-[10px] font-black uppercase tracking-widest'>
							Handcrafted by Dheeru Rajpoot
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default PortfolioFooter;
