import React from "react";
import "./Discount.css";
import { Link } from "react-router-dom";
import { styles } from "../../../Style/style";

const Discount = () => {
	return (
		<div>
			<div className='discount flex justify-center items-center md:px-48'>
				<div className=' text-center py-12 md:px-20 md:w-11/12 w-80 bg-violet-900 bg-opacity-70 rounded-lg outline-dotted outline-violet-700 outline-4 outline-offset-8'>
					<h2 className='text-amber-500 text-xl font-bold tracking-wide'>
						Get 25% Discount
					</h2>
					<p className='font-bold tracking-wide text-3xl text-white my-5'>
						Get the best toys for your Princess Toy
					</p>
					<div className='h-16 flex items-center justify-center'>
						<Link to='/all-toys'>
							<button className={`${styles.primaryButton} text-white px-5 py-3 font-bold rounded-2xl tracking-wide`}>
								Show All Items
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Discount;
