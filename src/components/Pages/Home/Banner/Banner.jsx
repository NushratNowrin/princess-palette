import React from "react";
import slider1 from "../../../../assets/slider-1.jpg";
import slider2 from "../../../../assets/slider-2.jpg";
import slider3 from "../../../../assets/slider-3.png";
import slider4 from "../../../../assets/slider-4.png";
import { styles } from "../../../Style/style";

const Banner = () => {
	return (
		<div>
			<div className='carousel w-full h-screen bg-center bg-cover pt-28 bg-slate-400'>
				<div id='slide1' className='relative carousel-item w-full' data-bs-interval="1000">
					<img src={slider1} className='w-full' />
					<div className='absolute flex justify-between items-center transform left-0 right-0 top-0 bottom-0 bg-black bg-opacity-60'>
						<a href='#slide4' className='btn btn-circle'>
							❮
						</a>
						<div className="text-center">
							<div className='font-bold text-neutral-200 tracking-wide md:text-3xl text-xl'>
								Buy the best Makeup palette <br />
								for your princess !!!
							</div>
                            <div className="h-20">
                            <button className="bg-violet-900 bg-opacity-60 text-white font-semibold px-5 py-3 rounded-md mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-opacity-100 duration-300">Buy Now</button>
                            </div>
						</div>
						<a href='#slide2' className='btn btn-circle'>
							❯
						</a>
					</div>
				</div>
				<div id='slide2' className='carousel-item relative w-full' data-bs-interval="1000">
					<img src={slider2} className='w-full' />
					<div className='absolute flex justify-between items-center transform left-0 right-0 top-0 bottom-0 bg-black bg-opacity-60'>
						<a href='#slide1' className='btn btn-circle'>
							❮
						</a>
						<div className="text-center">
							<div className='font-bold text-neutral-200 tracking-wide md:text-3xl text-xl'>
								Buy the best Makeup palette <br />
								for your princess !!!
							</div>
                            <div className="h-20">
                            <button className={`${styles.primaryButton}`}>Buy Now</button>
                            </div>
						</div>
						<a href='#slide3' className='btn btn-circle'>
							❯
						</a>
					</div>
				</div>
				<div id='slide3' className='carousel-item relative w-full' data-bs-interval="1000">
					<img src={slider3} className='w-full' />
					<div className='absolute flex justify-between items-center transform left-0 right-0 top-0 bottom-0 bg-black bg-opacity-60'>
						<a href='#slide2' className='btn btn-circle'>
							❮
						</a>
						<div className="text-center">
							<div className='font-bold text-neutral-200 tracking-wide md:text-3xl text-xl'>
								Buy the best Makeup palette <br />
								for your princess !!!
							</div>
                            <div className="h-20">
                            <button className="bg-violet-900 bg-opacity-60 text-white font-semibold px-5 py-3 rounded-md mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-opacity-100 duration-300">Buy Now</button>
                            </div>
						</div>
						<a href='#slide4' className='btn btn-circle'>
							❯
						</a>
					</div>
				</div>
				<div id='slide4' className='carousel-item relative w-full'>
					<img src={slider4} className='w-full' />
					<div className='absolute flex justify-between items-center transform left-0 right-0 top-0 bottom-0 bg-black bg-opacity-60'>
						<a href='#slide3' className='btn btn-circle'>
							❮
						</a>
						<div className="text-center">
							<div className='font-bold text-neutral-200 tracking-wide md:text-3xl text-xl'>
								Buy the best Makeup palette <br />
								for your princess !!!
							</div>
                            <div className="h-20">
                            <button className="bg-violet-900 bg-opacity-60 text-white font-semibold px-5 py-3 rounded-md mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-opacity-100 duration-300">Buy Now</button>
                            </div>
						</div>
						<a href='#slide1' className='btn btn-circle'>
							❯
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
