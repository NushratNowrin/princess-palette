import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../../../../assets/image-1.jpg";
import img2 from "../../../../assets/image-2.jpg";
import img3 from "../../../../assets/imagw-3.jpg";
import img4 from "../../../../assets/image-4.jpg";
import { styles } from "../../../Style/style";

import './Gallery.css'

// import required modules
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const Gallery = () => {
	return (
		<div className='py-16 px-10 bg-gray-100 '>
			<div className='text-center text-black mb-10 tracking-wide'>
				<h2 className={`${styles.primaryHeader}`}>Our Toys Image Galley</h2>
				<p className={`${styles.secondaryHeader}`}>
					Your Little Princess deserve the best. <br />
					So search the best Toy Place which will be surprising for her.
				</p>
			</div>

			{/* slider */}
			<div className="mt-20 mb-10">
				<Swiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={"auto"}
					autoplay={{
						delay: 1500,
						disableOnInteraction: true,
					}}
					navigation={true}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={true}
					modules={[Autoplay,EffectCoverflow, Pagination, Navigation]}
					className='mySwiper'>
					<SwiperSlide>
					<img src={img1} className='rounded-box h-60' />
					</SwiperSlide>
					<SwiperSlide>
					<img src={img2} className='rounded-box h-60' />
					</SwiperSlide>
					<SwiperSlide>
					<img src={img3} className='rounded-box h-60' />
					</SwiperSlide>
					<SwiperSlide>
					<img src={img4} className='rounded-box h-60' />
					</SwiperSlide>
					<SwiperSlide>
					<img src={img1} className='rounded-box h-60' />
					</SwiperSlide>
					<SwiperSlide>
					<img src={img2} className='rounded-box h-60' />
					</SwiperSlide>
					<SwiperSlide>
					<img src={img3} className='rounded-box h-60' />
					</SwiperSlide>
					<SwiperSlide>
					<img src={img4} className='rounded-box h-60' />
					</SwiperSlide>
					<SwiperSlide>
					<img src={img1} className='rounded-box h-60' />
					</SwiperSlide>
					<SwiperSlide>
					<img src={img2} className='rounded-box h-60' />
					</SwiperSlide>
					<SwiperSlide>
					<img src={img3} className='rounded-box h-60' />
					</SwiperSlide>
					<SwiperSlide>
					<img src={img4} className='rounded-box h-60' />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Gallery;
