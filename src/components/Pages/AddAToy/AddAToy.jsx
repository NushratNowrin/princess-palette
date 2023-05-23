import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import Swal from "sweetalert2";

const AddAToy = () => {
	const { user, loading } = useContext(AuthContext);
	const handleform = (event) => {
		event.preventDefault();
		const form = event.target;
		const image = form.image.value;
		const name = form.name.value;
		const sellerName = form.sellerName.value;
		const email = form.email.value;
		const category = form.category.value;
		const price = form.price.value;
		const rating = form.rating.value;
		const quantity = form.quantity.value;
		const description = form.description.value;
		const toy = {
			image,
			name,
			sellerName,
			email,
			category,
			price,
			rating,
			quantity,
			description,
		};
		console.log(toy);
		// form.reset();
		fetch("http://localhost:5000/toys", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(toy),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					Swal.fire({
						title: "Success",
						text: "Toy added Successfully",
						icon: "success",
						confirmButtonText: "Okay",
					});

					form.reset();
				}
			});
	};
	return (
		<div>
			<div className='hero min-h-screen bg-base-200'>
				<div className='hero-content flex-col lg:flex-column'>
					<div className='text-center lg:text-left'>
						<h1 className='text-5xl text-center font-bold'>Add a Toy!</h1>
						<p className='py-6'>
							Please fill the input field with your toy information and have a
							good deal with Princess Palette !!!
						</p>
					</div>
					<div className='card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100'>
						<form className='card-body' onSubmit={handleform}>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Image URL</span>
								</label>
								<input
									type='text'
									name='image'
									id='image'
									placeholder='Toy image URL'
									className='input input-bordered'
									required
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<input
									type='text'
									name='name'
									id='name'
									placeholder='Name of your toy'
									className='input input-bordered'
									required
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Seller Name</span>
								</label>
								<input
									type='text'
									name='sellerName'
									id='sellerName'
									placeholder='Name of the Seller'
									className='input input-bordered'
									defaultValue={user?.displayName}
									required
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									type='text'
									name='email'
									id='email'
									placeholder='email'
									className='input input-bordered'
									defaultValue={user?.email}
									required
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Sub Category</span>
								</label>
								<select
									name='toys'
									id='category'
									className='input input-bordered'
									required>
									<option value=''>Choose the Category</option>
									<option value='lipstick'>Lip Stick</option>
									<option value='makeupbox'>Makeup Box</option>
									<option value='mirror'>Mirror Set</option>
									<option value='comb'>Comb Set</option>
								</select>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Price</span>
								</label>
								<input
									type='number'
									name='price'
									id='price'
									min='0'
									placeholder='Price in BDT'
									className='input input-bordered'
									required
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Rating</span>
								</label>
								<input
									type='number'
									min='0'
									max='5'
									step='0.1'
									name='rating'
									id='rating'
									placeholder='rating'
									className='input input-bordered'
									required
								/>
								{/* <div name='rating'
									id='rating' className='rating rating-lg rating-half'>
									<input
										type='radio'
										name='rating-10'
										className='rating-hidden'
									/>
									<input
										type='radio'
										name='rating-10'
										className='bg-green-500 mask mask-star-2 mask-half-1'
									/>
									<input
										type='radio'
										name='rating-10'
										className='bg-green-500 mask mask-star-2 mask-half-2'
									/>
									<input
										type='radio'
										name='rating-10'
										className='bg-green-500 mask mask-star-2 mask-half-1'
										checked
									/>
									<input
										type='radio'
										name='rating-10'
										className='bg-green-500 mask mask-star-2 mask-half-2'
									/>
									<input
										type='radio'
										name='rating-10'
										className='bg-green-500 mask mask-star-2 mask-half-1'
									/>
									<input
										type='radio'
										name='rating-10'
										className='bg-green-500 mask mask-star-2 mask-half-2'
									/>
									<input
										type='radio'
										name='rating-10'
										className='bg-green-500 mask mask-star-2 mask-half-1'
									/>
									<input
										type='radio'
										name='rating-10'
										className='bg-green-500 mask mask-star-2 mask-half-2'
									/>
									<input
										type='radio'
										name='rating-10'
										className='bg-green-500 mask mask-star-2 mask-half-1'
									/>
									<input
										type='radio'
										name='rating-10'
										className='bg-green-500 mask mask-star-2 mask-half-2'
									/>
								</div> */}
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Quantity</span>
								</label>
								<input
									type='number'
									name='quantity'
									id='quantity'
									min='0'
									placeholder='Available Quantity in number'
									className='input input-bordered'
									required
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Detail Description</span>
								</label>
								<textarea
									name='description'
									id='description'
									className='input input-bordered'
									placeholder='Please write in details about your toy'
									required></textarea>
							</div>

							<div className='form-control mt-6'>
								<button className='btn btn-primary'>Add</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddAToy;
