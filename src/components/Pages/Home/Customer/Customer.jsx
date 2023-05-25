import React from 'react';
import customer1 from "../../../../assets/customer-1.jpg";
import customer2 from "../../../../assets/customer-2.jpg";
import customer3 from "../../../../assets/customer-3.jpg";
import customer4 from "../../../../assets/customer-4.jpg";

const Customer = () => {
    return (
        <div>
            <div className='my-10'>
				<h2 className='bg-violet-900 text-white py-5 font-semibold text-2xl text-center tracking-wide rounded-t-lg'>
					Customer&lsquo;s Review
				</h2>
				<div className='bg-neutral-100 rounded-b-lg grid sm:grid-cols-4 gap-8 p-8 pb-16 items-center justify-center'>
					<div className='bg-stone-300 text-center p-5 sm:m-0 mx-12 my-6 rounded-lg'>
						<div className='sm:h-40 w-40 sm:w-auto overflow-hidden flex items-center mx-auto rounded-full'>
							<img src={customer1} alt='' />
						</div>
						<h3 className='py-2 font-semibold'>Robin</h3>
						<p className='text-stone-600 text-xs font-medium'>
							Their behavior and delivery is soo good
						</p>
					</div>
					<div className='bg-stone-300 text-center p-5 sm:m-0 mx-12 my-6 rounded-lg'>
						<div className='sm:h-40 w-40 sm:w-auto overflow-hidden flex items-center mx-auto rounded-full'>
							<img src={customer2} alt='' />
						</div>
						<h3 className='py-2 font-semibold'>Bobin</h3>
						<p className='text-stone-600 text-xs font-medium'>
							The product and quality was speechless.
						</p>
					</div>
					<div className='bg-stone-300 text-center p-5 sm:m-0 mx-12 my-6 rounded-lg'>
					<div className='sm:h-40 w-40 sm:w-auto overflow-hidden flex items-center mx-auto rounded-full'>
							<img
								src={customer3}
								alt=''
							/>
						</div>
						<h3 className='py-2 font-semibold'>Ritu</h3>
						<p className='text-stone-600 text-xs font-medium'>
							The Toys marketplace I have ever seen.
						</p>
					</div>
					<div className='bg-stone-300 text-center p-5 sm:m-0 mx-12 my-6 rounded-lg'>
					<div className='sm:h-40 w-40 sm:w-auto overflow-hidden flex items-center mx-auto rounded-full'>
							<img src={customer4} alt='' />
						</div>
						<h3 className='py-2 font-semibold'>Mitu</h3>
						<p className='text-stone-600 text-xs font-medium'>
							Always trusted and qualityfull service.
						</p>
					</div>
				</div>
			</div>
        </div>
    );
};

export default Customer;