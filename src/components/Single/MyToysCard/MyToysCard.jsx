import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysCard = ({ myToy }) => {
	const [myToys, setMyToys] = useState(myToy);
	const handleDelete = (_id) => {
		fetch(`https://princess-palette-server-side.vercel.app/toys/${_id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					Swal.fire({
						title: "Are you sure?",
						text: "You won't be able to revert this!",
						icon: "warning",
						showCancelButton: true,
						confirmButtonColor: "#3085d6",
						cancelButtonColor: "#d33",
						confirmButtonText: "Yes, delete it!",
					}).then((result) => {
						if (result.isConfirmed) {
							Swal.fire("Deleted!", "Your file has been deleted.", "success");
						}
					});

					const remaining = myToy.filter((Toy) => Toy._id !== _id);
					setMyToys(remaining);
				}
			});
	};
	const {
		category,
		description,
		email,
		image,
		name,
		price,
		quantity,
		rating,
		sellerName,
		_id,
	} = myToy;
	return (
		<div>
			<div className=''>
				<div className='hero-content flex-col bg-base-200 lg:h-80 gap-5 m-5 lg:p-5 lg:flex-row rounded'>
					<div className=''>
						<img src={image} className='w-40 h-52 rounded-lg shadow-2xl' />
					</div>
					<div className='text-sm'>
						<h1 className='text-md font-bold'>{name}</h1>
						<p className='py-1'>
							<span className='font-bold'>Category: </span>
							{category}
						</p>
						<p className='py-1'>
							<span className='font-bold'>Price: </span>
							{price}
						</p>
						<p className='py-1'>
							<span className='font-bold'>Available Quantity: </span>
							{quantity}
						</p>
						<div className='flex gap-4 text-xl mt-2'>
							<Link
								to={`/update/${_id}`}
								className='bg-pink-500 hover:bg-pink-700 text-white p-2 rounded'
								title='Update'>
								<MdEdit />
							</Link>
							<button
								onClick={() => handleDelete(_id)}
								className='bg-pink-500 hover:bg-pink-700 text-white p-2 rounded'
								title='Delete'>
								<MdDelete />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyToysCard;
