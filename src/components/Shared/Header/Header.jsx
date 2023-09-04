import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HiDotsVertical, HiX } from "react-icons/hi";
import logo from "../../../assets/logo.png";

import ActiveLink from "../ActiveLink/ActiveLink";
import { AuthContext } from "../../Provider/AuthProviders";
import "./Header.css";

const Header = () => {
	const [open, setOpen] = useState(false);
	const { user, logout } = useContext(AuthContext);
	// console.log(user.displayName)

	const handleLogOut = () => {
		logout()
			.then((result) => {
				// Sign-out successful
			})
			.catch((error) => {});
	};
	return (
		<div className='w-full flex justify-between items-center fixed z-50 bg-violet-900 bg-opacity-75 md:px-20 p-5 text-white'>
			<h3>
				<Link to='/'>
					<img src={logo} className='w-24' alt='' />
				</Link>
			</h3>
			{/* hambarger */}
			<div onClick={() => setOpen(!open)} className='md:hidden'>
				<span>
					{open === true ? (
						<HiX className='text-right absolute right-5 top-12 h-6 w-6 text-white' />
					) : (
						<HiDotsVertical className='h-6 w-6 text-white' />
					)}
				</span>
				{/* Mobile Menu */}
				<div
					className={`${
						!open ? "hidden" : "flex flex-col"
					} p-6 bg-violet-900 bg-opacity-90 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
					<ul className='list-none flex flex-col justify-end items-start tracking-wide gap-4'>
						<li className='mx-8 font-semibold menu-item'>
							<ActiveLink to='/'>Home</ActiveLink>
						</li>
						<li className='mx-8 font-semibold menu-item'>
							<ActiveLink to='/all-toys'>All Toys</ActiveLink>
						</li>

						{user ? (
							<li className='mx-8 font-semibold menu-item'>
								<ActiveLink to='/my-toys'>My Toys</ActiveLink>
							</li>
						) : (
							""
						)}
						{user ? (
							<li className='mx-8 font-semibold menu-item'>
								<ActiveLink to='/add-a-toy'>Add a Toy</ActiveLink>
							</li>
						) : (
							""
						)}
						<li className='mx-8 font-semibold menu-item'>
							<ActiveLink to='/blogs'>Blogs</ActiveLink>
						</li>
						{user ? (
							<div className='flex flex-col gap-5 mx-8'>
								{user.photoURL != null ? (
									<img
										className='h-10 w-10 rounded-full'
										src={user.photoURL}
										title={user.displayName}
										alt=''
									/>
								) : (
									<img
										className='h-10 w-10 rounded-full'
										src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
										title={user.email}
									/>
								)}

								<div className='h-10 '>
									<button
										onClick={handleLogOut}
										className=' bg-black bg-opacity-60 text-neutral-200 px-5 py-2 font-bold rounded-md hover:bg-opacity-90'>
										Logout
									</button>
								</div>
							</div>
						) : (
							<button className=' bg-black bg-opacity-60 text-neutral-200 px-5 py-2 font-bold rounded-md hover:bg-opacity-90 mx-8'>
								<ActiveLink to='/login'>Login</ActiveLink>
							</button>
						)}
					</ul>
				</div>
			</div>

			{/* desktop icon */}
			<div
				className={`md:flex justify-between items-center ${
					open ? "" : "hidden"
				}`}>
				<ul className='md:flex hidden items-center tracking-wide'>
					<li className='mx-8 font-semibold menu-item'>
						<ActiveLink to='/'>Home</ActiveLink>
					</li>
					<li className='mx-8 font-semibold menu-item'>
						<ActiveLink to='/all-toys'>All Toys</ActiveLink>
					</li>

					{user ? (
						<li className='mx-8 font-semibold menu-item'>
							<ActiveLink to='/my-toys'>My Toys</ActiveLink>
						</li>
					) : (
						""
					)}
					{user ? (
						<li className='mx-8 font-semibold menu-item'>
							<ActiveLink to='/add-a-toy'>Add a Toy</ActiveLink>
						</li>
					) : (
						""
					)}
					<li className='mx-8 font-semibold menu-item'>
						<ActiveLink to='/blogs'>Blogs</ActiveLink>
					</li>
					{user ? (
						<div className='flex gap-5 items-center'>
							{user.photoURL != null ? (
								<img
									className='h-10 w-10 rounded-full'
									src={user.photoURL}
									title={user.displayName}
									alt=''
								/>
							) : (
								<img
									className='h-10 w-10 rounded-full'
									src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
									title={user.email}
								/>
							)}

							<div className='h-10 '>
								<button
									onClick={handleLogOut}
									className=' bg-black bg-opacity-60 text-neutral-200 px-5 py-2 font-bold rounded-md hover:bg-opacity-90'>
									Logout
								</button>
							</div>
						</div>
					) : (
						<button className=' bg-black bg-opacity-60 text-neutral-200 px-5 py-2 font-bold rounded-md hover:bg-opacity-90'>
							<ActiveLink to='/login'>Login</ActiveLink>
						</button>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Header;
