import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const singleToy = useLoaderData();
    const {
		category,
		description,
		email,
		image,
		name,
		price,
		quantity,
		rating,
		sellerName,
		_id,
	} = singleToy;
    return (
    <div className='pt-32'>
            <div className=' grid sm:grid-cols-2 grid-cols-1 justify-center items-center gap-10 bg-base-200  lg:p-20 rounded'>
					<div className=" ">
                    <img src={image} className=' rounded-lg shadow-2xl' />
                    </div>
					<div className="text-sm">
						<h1 className='text-lg font-bold'>{name}</h1>
						<p className='py-1'>
							<span className='font-bold'>Seller: </span>
							{sellerName}
						</p>
						<p className='py-1'>
							<span className='font-bold'>Email: </span>
							{email}
						</p>
						<p className='py-1'>
							<span className='font-bold'>Category: </span>
							{category}
						</p>
						<p className='py-1'>
							<span className='font-bold'>Price: </span>
							{price}
						</p>
						<p className='py-1'>
							<span className='font-bold'>Available Quantity: </span>
							{quantity}
						</p>
						<p className='py-1'>
							<span className='font-bold'>Ratings: </span>
							{rating}
						</p>
						<p className='py-1'>
							<span className='font-bold'>Description: </span>
							{description}
						</p>

					</div>
				</div>
        </div>
    );
};

export default SingleToy;