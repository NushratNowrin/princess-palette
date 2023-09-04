import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../../Style/style";

const ToyCard = ({ toy }) => {
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
	} = toy;
	return (
		<div>
			<div className=''>
				{toy.lenght === 0 ? (
					<div className="text-center"> No Toy Found</div>
				) : (
					<div className='hero-content flex-col bg-base-200 lg:h-80 gap-5 m-5 lg:p-5 lg:flex-row rounded'>
						<div className=''>
							<img src={image} className='w-48 h-52 rounded-lg shadow-2xl' />
						</div>
						<div className='text-sm'>
							<h1 className='text-md font-bold'>{name}</h1>
							<p className='py-1'>
								<span className='font-bold'>Seller: </span>
								{sellerName}
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

							<div className='h-10'>
								<Link to={`/toys/${_id}`}>
									<button className={`${styles.primaryButton} mt-1`}>
										View Details
									</button>
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ToyCard;
