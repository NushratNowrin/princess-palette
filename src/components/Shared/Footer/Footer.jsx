import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import { FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='mt-20 '>
			<footer className='text-white footer p-20 bg-violet-900'>
				<div>
					<Link to='/'>
						<img src={logo} className='w-32' alt='' />
					</Link>
				</div>
				<div>
					<p>
						<p className='font-semibold text-lg '>Princess Palette.</p>
						<br />
						The great makeup <br /> toys collection <br /> for your princess
					</p>
				</div>
				<div>
					<span className='footer-title'>Company</span>
					<ActiveLink to='/home'>Home</ActiveLink>
					<ActiveLink to='/all-toys'>All Toys</ActiveLink>
					<ActiveLink to='/blogs'>Blogs</ActiveLink>
				</div>
				<div>
					<span className='footer-title'>Contact info</span>
					<p><span className="text-yellow-300">Email:</span> princesspalette@gmail.com</p>
					<p><span className="text-yellow-300">Phone:</span> +088 01756 091365</p>
					<p><span className="text-yellow-300">Address:</span> East Rampura, Dhaka</p>
				</div>
			</footer>

			{/* Copyright */}
			<div className='footer items-center p-4 bg-violet-950 text-neutral-content'>
				<div className='items-center grid-flow-col'>
					
					<p>Copyright © 2023 - All right reserved</p>
				</div>
				<div className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
					<Link to ="/">
						<FaTwitter />
					</Link>
					<Link to ="/">
						<FaYoutube />
					</Link>
					<Link to ="/">
						<FaFacebookF />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
