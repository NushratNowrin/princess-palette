import React from "react";
import Aboutbg1 from "../../../../assets/MakeupBaby.jpg";
import Aboutbg2 from "../../../../assets/makeupBaby2.jpg";
import { styles } from "../../../Style/style";

const About = () => {
	return (
		<div className='py-20 lg:px-32 md:px-20 sm:px-32 px-10 bg-gray-100'>
			<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-center items-center '>
            <div className='lg:flex hidden'>
					<img src={Aboutbg2} alt='' className='w-100' />
				</div>
				
				<div className="text-center">
					<div className="">
						<h2 className={`${styles.primaryHeader}`}>About Us</h2>
						<p className={`${styles.secondaryHeader} mb-5 text-pink-600`}>
                        Welcome to Princess Palette - Where Imagination Meets Glamour!
						</p>
					</div>
                    <p className="text-sm">
                    At Princess Palette, we believe that every child&apos;s creativity deserves to shine, and what better way to make that happen than with our enchanting makeup toy collection! Founded with a passion for nurturing young minds and fostering creativity, we take pride in offering a world of imagination and endless possibilities through our range of makeup toys.
                    </p>
				</div>
				<div className=''>
					<img src={Aboutbg1} alt='' className='w-100' />
				</div>
			</div>
		</div>
	);
};

export default About;
