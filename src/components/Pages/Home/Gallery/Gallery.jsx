import React from "react";
import img1 from "../../../../assets/image-1.jpg";
import img2 from "../../../../assets/image-2.jpg";
import img3 from "../../../../assets/imagw-3.jpg";
import img4 from "../../../../assets/image-4.jpg";

const Gallery = () => {
	return (
		<div className="py-16 px-10 bg-pink-300">
            <h2 className="text-center text-black text-3xl font-bold mb-10">Our Toys Image Galley</h2>
			<div className=' space-x-4 h-60 w-full carousel carousel-center  p-6  bg-black rounded-box'>
				<div className='carousel-item'>
					<img
						src={img1}
						className='rounded-box'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src={img2}
						className='rounded-box'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src={img3}
						className='rounded-box'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src={img4}
						className='rounded-box'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src={img1}
						className='rounded-box'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src={img2}
						className='rounded-box'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src={img3}
						className='rounded-box'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src={img4}
						className='rounded-box'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src={img1}
						className='rounded-box'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src={img2}
						className='rounded-box'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src={img3}
						className='rounded-box'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src={img4}
						className='rounded-box'
					/>
				</div>
			</div>
		</div>
	);
};

export default Gallery;