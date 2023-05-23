import React from "react";

const Category = ({ category }) => {
    const {
		description,
		email,
		image,
		name,
		price,
		quantity,
		rating,
		sellerName,
		_id,
	} = category;
	return (
		<div>
			<div className='card card-compact p-3 bg-slate-300 shadow-xl my-5'>
				<figure>
					<img
						src={image} className="h-40 rounded-lg"
						alt=''
					/>
				</figure>
				<div className='card-body text-center'>
					<h2 className='font-bold text-md'>{name}</h2>
					<p><span className="font-semibold">Price: </span>{price}</p>
					<p><span className="font-semibold">Ratings: </span>{rating}</p>
					<div className='card-actions justify-center'>
						<button className='btn btn-primary'>View Details</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Category;
