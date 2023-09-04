import React from "react";

const SingleLove = (love) => {
	const { id, heading, description } = love;
	return (
		<div className=' rounded-lg shadow-lg p-6 sm:h-80 h-auto serviceBox bg-gray-200 mt-10  mx-auto'>
			<div className='flex justify-center items-center m-2 -translate-y-16'>
				<div className='text-4xl p-2 h-16 w-16 text-center font-serif rounded-full bg-violet-500 text-white font-semi-bold'>
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
