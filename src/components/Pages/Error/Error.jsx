import React from "react";
import error from "../../../assets/error_page.png";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className='bg-violet-100 h-[100vh]'>
			<div className='grid justify-center '>
				<img src={error} alt='' />
			</div>
			<div className='text-center'>
				<Link to="/" className='px-5 py-3 bg-violet-400 text-black rounded-lg font-semibold text-lg'>
					Back to Home
				</Link>
			</div>
		</div>
	);
};

export default Error;
