import { useState, useEffect } from "react";
import {
	Send,
	MapPin,
	Mail,
	Phone,
	Linkedin,
	Twitter,
	Instagram,
	Github,
} from "lucide-react";
import { Button } from "@traken-ui/react";
import axios from "axios";

function PortfolioContact() {
	const [isVisible, setIsVisible] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
	};

	const formId = "46122254";
	const apiKey = "20bc632a-7c54-4198-a44d-bb95509b0518";

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("idle");

		const data = {
			fields: [
				{ name: "full_name", value: formState.name },
				{ name: "email", value: formState.email },
				{ name: "subject", value: formState.subject },
				{ name: "message", value: formState.message },
			],
		};

		try {
			const response = await axios.post(
				`https://api.hsforms.com/submissions/v3/integration/submit/${formId}/${apiKey}`,
				data,
				{
					headers: {
						"Content-Type": "application/json",
					},
				},
			);
			if (response.status === 200) {
				setSubmitStatus("success");
				setFormState({
					name: "",
					email: "",
					subject: "",
					message: "",
				});
				setTimeout(() => setSubmitStatus("idle"), 5000);
			}
		} catch (error) {
			setSubmitStatus("error");
			setTimeout(() => setSubmitStatus("idle"), 5000);
		} finally {
			setIsSubmitting(false);
		}
	};

	const contactInfo = [
		{
			icon: <Mail className='w-6 h-6' />,
			title: "Email",
			value: "rajpootdheeru90@gmail.com",
			link: "mailto:rajpootdheeru90@gmail.com",
			desc: "Drop me a line anytime",
		},
		{
			icon: <Phone className='w-6 h-6' />,
			title: "Phone",
			value: "+91 9026315148",
			link: "tel:+919026315148",
			desc: "Available Mon-Fri, 9AM-6PM",
		},
		{
			icon: <MapPin className='w-6 h-6' />,
			title: "Location",
			value: "Kanpur, Uttar Pradesh, India",
			link: "https://maps.google.com/?q=Kanpur,India",
			desc: "Open for remote & local work",
		},
	];

	return (
		<section
			id='contact'
			className='relative bg-black text-white md:py-20 py-12 overflow-hidden'>
			{/* Background Decorative Elements */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				<div className='absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-600/5 blur-[150px] rounded-full animate-pulse'></div>
				<div className='absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-purple-600/5 blur-[150px] rounded-full animate-pulse delay-700'></div>
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative'>
				{/* Section Header */}
				<div className='flex flex-col items-center text-center mb-20'>
					<div className='flex items-center space-x-3 mb-6'>
						<div className='h-[2px] w-12 bg-gradient-to-r from-indigo-500 to-transparent' />
						<span className='text-indigo-400 uppercase text-xs md:text-sm tracking-[0.3em] font-black'>
							Connect
						</span>
						<div className='h-[2px] w-12 bg-gradient-to-l from-indigo-500 to-transparent' />
					</div>
					<h2 className='text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter'>
						Get In{" "}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x'>
							Touch
						</span>
					</h2>
					<p className='text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium'>
						Whether you have a groundbreaking idea or just want to
						chat about tech, my inbox is always open.
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch'>
					{/* Contact Info Side */}
					<div
						className={`lg:col-span-5 space-y-6 transition-all duration-1000 transform ${
							isVisible
								? "translate-x-0 opacity-100"
								: "-translate-x-12 opacity-0"
						}`}>
						<div className='bg-gray-900/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/5 shadow-2xl h-full flex flex-col'>
							<h3 className='text-2xl font-bold mb-8 text-white'>
								Contact Information
							</h3>

							<div className='space-y-8 flex-grow'>
								{contactInfo.map((item, index) => (
									<div
										key={index}
										className='group flex items-start gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300'>
										<div className='bg-indigo-500/10 text-indigo-400 p-4 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-indigo-500/5'>
											{item.icon}
										</div>
										<div>
											<h4 className='text-sm font-black uppercase tracking-widest text-gray-500 mb-1'>
												{item.title}
											</h4>
											{item.link ? (
												<a
													href={item.link}
													target={
														item.title ===
														"Location"
															? "_blank"
															: "_self"
													}
													rel={
														item.title ===
														"Location"
															? "noopener noreferrer"
															: ""
													}
													className='text-lg font-bold text-gray-200 hover:text-indigo-400 transition-colors block'>
													{item.value}
												</a>
											) : (
												<p className='text-lg font-bold text-gray-200'>
													{item.value}
												</p>
											)}
											<p className='text-xs text-gray-500 font-medium mt-1'>
												{item.desc}
											</p>
										</div>
									</div>
								))}
							</div>

							<div className='mt-12 pt-8 border-t border-white/5'>
								<h4 className='text-sm font-black uppercase tracking-widest text-gray-500 mb-6'>
									Social Ecosystem
								</h4>
								<div className='flex flex-wrap gap-4'>
									{[
										{
											icon: <Linkedin size={20} />,
											href: "https://www.linkedin.com/in/dheerurajpoot/",
											label: "LinkedIn",
											color: "hover:bg-[#0077b5]",
										},
										{
											icon: <Twitter size={20} />,
											href: "https://twitter.com/DheeruRajpoot3",
											label: "Twitter",
											color: "hover:bg-[#1da1f2]",
										},
										{
											icon: <Instagram size={20} />,
											href: "https://www.instagram.com/dheeru_rajpoot_/",
											label: "Instagram",
											color: "hover:bg-[#e4405f]",
										},
										{
											icon: <Github size={20} />,
											href: "https://github.com/dheerurajpoot",
											label: "GitHub",
											color: "hover:bg-[#333]",
										},
									].map((social, index) => (
										<a
											key={index}
											href={social.href}
											target='_blank'
											rel='noopener noreferrer'
											aria-label={social.label}
											className={`w-12 h-12 bg-gray-800/50 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-500 hover:scale-110 shadow-lg ${social.color}`}>
											{social.icon}
										</a>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Form Side */}
					<div
						className={`lg:col-span-7 transition-all duration-1000 delay-300 transform ${
							isVisible
								? "translate-x-0 opacity-100"
								: "translate-x-12 opacity-0"
						}`}>
						<div className='bg-gray-900/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl h-full'>
							<h3 className='text-2xl font-bold mb-8 text-white'>
								Send Me a Message
							</h3>

							<form onSubmit={handleSubmit} className='space-y-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
									<div className='space-y-2'>
										<label
											htmlFor='name'
											className='text-xs font-black uppercase tracking-widest text-gray-500 ml-1'>
											Your Name
										</label>
										<input
											type='text'
											id='name'
											name='name'
											value={formState.name}
											onChange={handleChange}
											required
											className='w-full bg-white/5 border border-white/5 focus:border-indigo-500/50 rounded-2xl py-4 px-6 text-white placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300'
											placeholder='Enter your name'
										/>
									</div>

									<div className='space-y-2'>
										<label
											htmlFor='email'
											className='text-xs font-black uppercase tracking-widest text-gray-500 ml-1'>
											Your Email
										</label>
										<input
											type='email'
											id='email'
											name='email'
											value={formState.email}
											onChange={handleChange}
											required
											className='w-full bg-white/5 border border-white/5 focus:border-indigo-500/50 rounded-2xl py-4 px-6 text-white placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300'
											placeholder='Enter your email'
										/>
									</div>
								</div>

								<div className='space-y-2'>
									<label
										htmlFor='subject'
										className='text-xs font-black uppercase tracking-widest text-gray-500 ml-1'>
										Subject
									</label>
									<input
										type='text'
										id='subject'
										name='subject'
										value={formState.subject}
										onChange={handleChange}
										required
										className='w-full bg-white/5 border border-white/5 focus:border-indigo-500/50 rounded-2xl py-4 px-6 text-white placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300'
										placeholder='What is this regarding?'
									/>
								</div>

								<div className='space-y-2'>
									<label
										htmlFor='message'
										className='text-xs font-black uppercase tracking-widest text-gray-500 ml-1'>
										Your Message
									</label>
									<textarea
										id='message'
										name='message'
										value={formState.message}
										onChange={handleChange}
										required
										rows={5}
										className='w-full bg-white/5 border border-white/5 focus:border-indigo-500/50 rounded-2xl py-4 px-6 text-white placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 resize-none'
										placeholder='Write your message here...'></textarea>
								</div>

								<div className='flex flex-col sm:flex-row items-center gap-6 pt-4'>
									<Button
										type='submit'
										disabled={isSubmitting}
										className={`group relative flex items-center justify-center w-full sm:w-auto px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-500 overflow-hidden ${
											isSubmitting
												? "bg-gray-800 cursor-not-allowed text-gray-500"
												: "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] hover:translate-y-[-2px] active:translate-y-0"
										}`}>
										<span className='relative z-10 flex items-center gap-3'>
											{isSubmitting
												? "Transmitting..."
												: "Send Message"}
											{!isSubmitting && (
												<Send
													size={18}
													className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'
												/>
											)}
										</span>
									</Button>

									{submitStatus === "success" && (
										<p className='text-green-400 font-bold text-sm flex items-center gap-2 animate-bounce'>
											<span className='w-2 h-2 bg-green-400 rounded-full'></span>
											Message Transmitted Successfully!
										</p>
									)}
									{submitStatus === "error" && (
										<p className='text-red-400 font-bold text-sm flex items-center gap-2'>
											<span className='w-2 h-2 bg-red-400 rounded-full'></span>
											Transmission Failed. Try again.
										</p>
									)}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PortfolioContact;
