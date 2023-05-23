import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
	const loadedToy = useLoaderData();
	console.log(loadedToy._id);
	const handleUpdate = (event) => {
		event.preventDefault();
		const form = event.target;
		const price = form.price.value;
		const quantity = form.quantity.value;
		const description = form.description.value;
		const updatedToy = { price, quantity, description };
		console.log(updatedToy);

		fetch(`http://localhost:5000/toys/${loadedToy._id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(updatedToy),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					Swal.fire({
						title: "Success",
						text: "Toy has been updated Successfully",
						icon: "success",
						confirmButtonText: "Okay",
					});
					form.price.value = "";
					form.quantity.value = "";
					form.description.value = "";
				}
			});
	};
	return (
		<div>
			<h2 className="text-xl font-semibold bg-pink-600 text-white text-center p-3 lg:mx-32 my-5 rounded">Update info of {loadedToy.name}</h2>
			<div className='card my-10 mx-32 shadow-2xl bg-base-100'>
				<form className='card-body' onSubmit={handleUpdate}>
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
							defaultValue={loadedToy.price}
						/>
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
							defaultValue={loadedToy.quantity}
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
							defaultValue={loadedToy.description}></textarea>
					</div>
					<div className='form-control mt-6'>
								<button className='btn bg-pink-500 hover:bg-pink-600'>Update</button>
							</div>
				</form>
			</div>
		</div>
	);
};

export default Update;
