import React, { useState } from "react";
import './Faq.css'
import { styles } from "../../../Style/style";

const Faq = () => {
    const [isOpen1, setIsOpen1] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);
	const [isOpen4, setIsOpen4] = useState(false);
    const toggleAccordion1 = () => {
		setIsOpen1(!isOpen1);
	};
	const toggleAccordion2 = () => {
		setIsOpen2(!isOpen2);
	};
	const toggleAccordion3 = () => {
		setIsOpen3(!isOpen3);
	};
	const toggleAccordion4 = () => {
		setIsOpen4(!isOpen4);
	};
    return (
        <div className='faq lg:px-40 lg:py-20 sm:px-20 sm:py-10 p-5'>
            <div className='sm:p-20 p-10 bg-violet-950 bg-opacity-30'>
			<div>
				<h2 className={`md:text-3xl text-xl font-semibold tracking-wide mb-5 text-center text-gray-100`}>Frequently Asked Question</h2>
				<p className={`${styles.secondaryHeader} text-white`}>
					Have you Any Question? That can be related with our previous customers Question
				</p>
			</div>
			<div className='accordion m-2 rounded-lg overflow-hidden font-semibold'>
				<div
					className='accordion-header flex justify-between items-center text-lg bg-violet-800 text-white py-3 px-8'
					onClick={toggleAccordion1}>
					<h3>
                    What is Princess Palette?
					</h3>
					<span>{isOpen1 ? "-" : "+"}</span>
				</div>
				{isOpen1 && (
					<div className='text-sm accordion-content bg-violet-200 py-3 px-8'>
						<p>
                        Princess Palette is an online platform dedicated to offering a wide range of makeup toys and related products for kids. We provide a safe and fun way for children to explore the world of cosmetics through play.
                        </p>
					</div>
				)}
			</div>

			<div className='accordion m-2 rounded-lg overflow-hidden font-semibold'>
				<div
					className='accordion-header flex justify-between items-center text-lg bg-violet-800 text-white py-3 px-8'
					onClick={toggleAccordion2}>
					<h3>Are the makeup toys safe for children?</h3>
					<span>{isOpen2 ? "-" : "+"}</span>
				</div>
				{isOpen2 && (
					<div className='text-sm accordion-content bg-violet-200 py-3 px-8'>
						<p>Yes, all the makeup toys listed on our marketplace are rigorously tested for safety and comply with industry standards. We prioritize the well-being of children and ensure that our products are non-toxic and suitable for kids.</p>
					</div>
				)}
			</div>
			<div className='accordion m-2 rounded-lg overflow-hidden font-semibold'>
				<div
					className='accordion-header flex justify-between items-center text-lg bg-violet-800 text-white py-3 px-8'
					onClick={toggleAccordion3}>
					<h3>What age range are these makeup toys suitable for?</h3>
					<span>{isOpen3 ? "-" : "+"}</span>
				</div>
				{isOpen3 && (
					<div className='text-sm accordion-content bg-violet-200 py-3 px-8'>
						<p>Our makeup toys are generally designed for children aged 3 and above. However, please check the specific product descriptions for age recommendations as they may vary.</p>
					</div>
				)}
			</div>
			<div className='accordion m-2 rounded-lg overflow-hidden font-semibold'>
				<div
					className='accordion-header flex justify-between items-center text-lg bg-violet-800 text-white py-3 px-8'
					onClick={toggleAccordion4}>
					<h3>Can I return or exchange a product if I&apos;m not satisfied?</h3>
					<span>{isOpen4 ? "-" : "+"}</span>
				</div>
				{isOpen4 && (
					<div className='text-sm accordion-content bg-violet-200 py-3 px-8'>
						<p>Yes, we have a hassle-free return and exchange policy. If you&apos;re not satisfied with your purchase, please contact our customer support team within 30 days of receiving your order, and they will guide you through the process.</p>
					</div>
				)}
			</div>
		</div>
        </div>
    );
};

export default Faq;