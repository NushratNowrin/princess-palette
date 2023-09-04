import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProviders";
import { styles } from "../../../Style/style";

const Category = ({ category }) => {
	const { user } = useContext(AuthContext);
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
			<div className='card shadow-xl md:my-16 my-5 bg-white'>
				<figure className="bg-white py-5">
					<img
						src={image} className="h-52 rounded-lg"
						alt=''
					/>
				</figure>
				<div className='card-body text-center bg-slate-300 h-60'>
					<h2 className='font-bold text-md'>{name}</h2>
					<p><span className="font-semibold">Price: </span>{price}</p>
					<p><span className="font-semibold">Ratings: </span>{rating}</p>
					<Link to= {`/toys/${_id}`} >	
					<div className='card-actions justify-center'>
						<button className={`${styles.primaryButton}`}>View Details</button>
					</div>
					</Link>
					
				</div>
			</div>
		</div>
	);
};

export default Category;
