import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const MyToysCard = ({ myToy }) => {
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
	} = myToy;
	return (
		<div>
			<div className=''>
				<div className='hero-content flex-col bg-base-200 lg:h-80 gap-5 m-5 lg:p-5 lg:flex-row rounded'>
					<div className=''>
						<img src={image} className='w-40 h-52 rounded-lg shadow-2xl' />
					</div>
					<div className='text-sm'>
						<h1 className='text-md font-bold'>{name}</h1>
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
						<div className='flex gap-4 text-xl mt-2'>
							<Link to='/' className="bg-pink-500 hover:bg-pink-700 text-white p-2 rounded" title="Update">
								<MdEdit />
							</Link>
							<Link to='/' className="bg-pink-500 hover:bg-pink-700 text-white p-2 rounded" title="Delete">
								<MdDelete />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyToysCard;
