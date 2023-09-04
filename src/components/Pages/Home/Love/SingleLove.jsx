import React from "react";

const SingleLove = (love) => {
	const { id, heading, description } = love;
	return (
		<div className=' rounded-lg shadow-lg p-6 sm:h-80 h-auto serviceBox bg-gray-200 mt-10  mx-auto'>
			<div className='flex justify-center items-center m-2 -translate-y-16'>
				{/* <BiCodeBlock className='text-primary text-5xl p-2 rounded-full border-2 border-primary service-icon' /> */}
				<div className='text-3xl p-2 h-16 w-16 text-center  rounded-full bg-violet-500 text-white font-fold'>
					{id}
				</div>
			</div>
			<div className='flex flex-col justify-center items-center'>
				<h1 className='text-xl mb-2 font-semibold'>{heading}</h1>
				<p className='text-neutral text-[13px] text-center'>{description}</p>
			</div>
		</div>
	);
};

export default SingleLove;
