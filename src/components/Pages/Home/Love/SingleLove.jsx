import React from "react";

const SingleLove = (love) => {
	const { heading, description } = love;
	return (
		<div className='rounded-lg  border-2 border-primary p-6 sm:h-80 h-auto serviceBox bg-red-200  mx-auto'>
			<div className='flex justify-center items-center m-2 '>
				{/* <BiCodeBlock className='text-primary text-5xl p-2 rounded-full border-2 border-primary service-icon' /> */}
			</div>
			<div className="flex flex-col justify-center items-center">
            <h1 className='text-xl mb-2 font-semibold'>{heading}</h1>
			<p className='text-neutral text-[13px] text-center'>{description}</p>
            </div>
		</div>
	);
};

export default SingleLove;
