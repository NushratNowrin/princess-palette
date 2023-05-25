import React from "react";
import slider1 from "../../../../assets/slider-1.jpg";
import slider2 from "../../../../assets/slider-2.jpg";
import slider3 from "../../../../assets/slider-3.png";
import slider4 from "../../../../assets/slider-4.png";

const Banner = () => {
	return (
		<div>
			<div className=' carousel w-full h-96 bg-center bg-cover '>
				{/* <div className='absolute  top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-slate-600 to-slate-900 w-full h-80 bg-center bg-cover opacity-60 z-10'></div> */}
				<div id='slide1' className='relative carousel-item  w-full'>
					<img src={slider1} className='w-full' />
					<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
						<a href='#slide4' className='btn btn-circle'>
							❮
						</a>
						<div className="text-center">
							<div className='font-bold text-black text-3xl'>
								Buy the best Makeup palette <br />
								for your princess !!!
							</div>
                            <div className="h-20">
                            <button className="bg-black text-white font-semibold px-5 py-3 rounded-md mt-5 hover:text-xl ease-in-out duration-75">Buy Now</button>
                            </div>
						</div>
						<a href='#slide2' className='btn btn-circle'>
							❯
						</a>
					</div>
				</div>
				<div id='slide2' className='carousel-item relative w-full'>
					<img src={slider2} className='w-full' />
					<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
						<a href='#slide1' className='btn btn-circle'>
							❮
						</a>
						<div className="text-center">
							<div className='font-bold text-black text-3xl'>
								Buy the best Makeup palette <br />
								for your princess !!!
							</div>
                            <div className="h-20">
                            <button className="bg-black text-white font-semibold px-5 py-3 rounded-md mt-5 hover:text-xl ease-in-out duration-75">Buy Now</button>
                            </div>
						</div>
						<a href='#slide3' className='btn btn-circle'>
							❯
						</a>
					</div>
				</div>
				<div id='slide3' className='carousel-item relative w-full'>
					<img src={slider3} className='w-full' />
					<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
						<a href='#slide2' className='btn btn-circle'>
							❮
						</a>
						<div className="text-center ">
							<div className='font-bold text-white text-3xl'>
								Buy the best Makeup palette <br />
								for your princess !!!
							</div>
                            <div className="h-20">
                            <button className="bg-white text-black font-semibold px-5 py-3 rounded-md mt-5 hover:text-xl ease-in-out duration-75">Buy Now</button>
                            </div>
						</div>
						<a href='#slide4' className='btn btn-circle'>
							❯
						</a>
					</div>
				</div>
				<div id='slide4' className='carousel-item relative w-full'>
					<img src={slider4} className='w-full' />
					<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
						<a href='#slide3' className='btn btn-circle'>
							❮
						</a>
						<div className="text-center">
							<div className='font-bold text-black text-3xl'>
								Buy the best Makeup palette <br />
								for your princess !!!
							</div>
                            <div className="h-20">
                            <button className="bg-black text-white font-semibold px-5 py-3 rounded-md mt-5 hover:text-xl ease-in-out duration-75">Buy Now</button>
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
