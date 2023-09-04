import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Customer.css";

import { styles } from "../../../Style/style";

// import required modules
import { Autoplay, EffectCube, Pagination,  Navigation } from "swiper/modules";

const Customer = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch("/review.json")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);
	return (
		<section className='relative review py-16 px-10 '>
			{/* <div className="bg-black absolute top-0 bottom-0 left-0 right-0 bg-opacity-30">	
			</div> */}
			<div className="flex flex-col z-50">
				<h2 className={`${styles.primaryHeader} text-gray-800`}>What Our Customer Said</h2>
				<p className={`${styles.secondaryHeader} text-gray-700`}>
					Your Little Princess deserve the best. <br />
					So search the best Toy Place which will be surprising for her.
				</p>
			</div>
			{/* slider */}
			<div className=' my-5 w-full'>
				<div className='lg:w-3/5 sm:2/3 w-11/12 mx-auto '>
					<Swiper
					autoplay={{
						delay: 2500,
						disableOnInteraction: true,
					}}
						effect={"cube"}
						grabCursor={true}
						cubeEffect={{
							shadow: true,
							slideShadows: true,
							shadowOffset: 20,
							shadowScale: 0.94,
						}}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Autoplay, Pagination, EffectCube,  Navigation]}
						className='mySwiper'>
						{reviews.map((review) => (
							<SwiperSlide key={review.id}>
								<div className='bg-blue-700 flex flex-col justify-center items-center py-8 pb-10 lg:mx-20 my-10 rounded-2xl bg-opacity-80 text-white mb-16'>
									<div className='flex justify-center items-center  mb-5 rounded-full border-2 border-black overflow-hidden h-52 w-52 p-2 bg-white'>
										<img src={review.img} className=' ' alt='' />
									</div>
									<div className='flex flex-col justify-center items-center mx-10 text-center'>
										<h2 className='text-3xl font-semibold text-amber-400 mb-3'>{review.name}</h2>
										<p>{review.review}</p>
										<button className={`${styles.primaryButton}`}>Learn More</button>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					
				</div>
				
			</div>
		</section>
	);
};

export default Customer;
