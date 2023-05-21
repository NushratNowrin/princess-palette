import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";

const AddAToy = () => {
    const { user, loading } = useContext(AuthContext);
    console.log(user?.displayName)
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
						<div className='card-body'>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Image URL</span>
								</label>
								<input
									type='text'
									placeholder='Toy image URL'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<input
									type='text'
									placeholder='Name of your toy'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text' >Seller Name</span>
								</label>
								<input
									type='text'
									placeholder='Name of the Seller'
									className='input input-bordered'
                                    defaultValue={user?.displayName}
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									type='text'
									placeholder='email'
									className='input input-bordered'
                                    defaultValue={user?.email}
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Sub Category</span>
								</label>
								<select name='toys' id='category' className='input input-bordered'>
                                    <option value="" >Choose the Category</option>
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
									type='text'
									placeholder='Price'
									className='input input-bordered'
								/>
							</div>

							<div className='form-control mt-6'>
								<button className='btn btn-primary'>Add</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddAToy;
