import { Button } from "@traken-ui/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
	{ name: "Home", href: "#home" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "About", href: "#about" },
	{ name: "Contact", href: "#contact" },
];

function NavbarPortfolio() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<header
			className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-black/80 backdrop-blur-lg border-b border-white/5 py-3"
					: "bg-transparent py-5"
			}`}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
				{/* Logo */}
				<div className='relative group'>
					<a
						href='/'
						className='text-2xl md:text-3xl font-black tracking-tighter text-white'>
						DHEERU<span className='text-indigo-500'>.</span>
					</a>
					<div className='absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full'></div>
				</div>

				{/* Desktop Nav */}
				<nav className='hidden lg:flex items-center space-x-8'>
					<div className='flex items-center space-x-6'>
						{links.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className='text-sm font-medium text-gray-400 hover:text-white transition-colors relative group'>
								{link.name}
								<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full'></span>
							</a>
						))}
					</div>
					<a href='#contact'>
						<Button className='bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer'>
							Hire me
						</Button>
					</a>
				</nav>

				{/* Mobile Toggle */}
				<button
					onClick={toggleMenu}
					className='lg:hidden p-2 text-gray-400 hover:text-white transition-colors focus:outline-none'>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Mobile Menu Overlay */}
			<div
				className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 lg:hidden transition-all duration-500 ease-in-out ${
					isOpen
						? "opacity-100 translate-x-0"
						: "opacity-0 translate-x-full"
				}`}>
				<div className='flex flex-col items-center justify-center h-full space-y-8 px-6'>
					{links.map((link, i) => (
						<a
							key={link.name}
							href={link.href}
							onClick={() => setIsOpen(false)}
							className={`text-3xl font-bold text-white hover:text-indigo-400 transition-colors transform transition-transform duration-500 delay-[${i * 100}ms] ${
								isOpen
									? "translate-y-0 opacity-100"
									: "translate-y-10 opacity-0"
							}`}>
							{link.name}
						</a>
					))}
					<a
						href='#contact'
						onClick={() => setIsOpen(false)}
						className='w-full max-w-xs'>
						<Button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-500/20'>
							Hire me
						</Button>
					</a>
				</div>
				{/* Close button for mobile overlay */}
				<button
					onClick={toggleMenu}
					className='absolute top-6 right-6 p-2 text-gray-400 hover:text-white'>
					<X size={32} />
				</button>
			</div>
		</header>
	);
}

export default NavbarPortfolio;
