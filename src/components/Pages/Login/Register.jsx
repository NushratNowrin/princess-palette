import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useContext } from "react";
import "./Login.css"
import { AuthContext } from "../../Provider/AuthProviders";
import useTitle from "../../hooks/useTitle";
import { styles } from "../../Style/style";


const Register = () => {
	const [showError, setShowError] = useState("");
	const [success, setSuccess] = useState("");
	const [passwordType, setPasswordType] = useState("password");
	const [passwordInput, setPasswordInput] = useState("");

	const { user, createUser } = useContext(AuthContext);
	useTitle('Register')

	const togglePassword = () => {
		if (passwordType === "password") {
			setPasswordType("text");
			return;
		}
		setPasswordType("password");
	};
	const handlePasswordChange = (evnt) => {
		setPasswordInput(evnt.target.value);
	};
	const getFormData = (event) => {
		setSuccess("");
		setShowError("");
		event.preventDefault();
		const name = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;
		const photoURL = event.target.photoURL.value;

		console.log(
			`email: ${email}
			password: ${password}
			name: ${name}
			photoURL: ${photoURL}`
		)

		//create fireBase Auth
		createUser(email, password)
		.then(result => {
			// Signed in 
			const loggeduser = result.user;
				console.log(loggeduser)
				setShowError("");
				setSuccess("User Has been created successfully");
				event.target.reset();
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
				setShowError(errorMessage);
			});

		// Password validation

		if (!/.{6}/.test(password)) {
			setShowError("Password need at least 6 character");
			return;
		}
	};

	return (
		<div className='w-50 xs:p-10 bg-slate-300 text-center pt-32 pb-10'>
			<div className='bg-violet-900 md:w-8/12 m-auto py-16 md:px-20 p-10 rounded w-full'>
				<h4 className='lg:w-2/5 sm:w-3/5 w-2/3 mx-auto text-2xl font-bold mb-6 text-red-300'>Please Register</h4>
				<form onSubmit={getFormData}>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Enter Name'
						required
						className='py-1 px-3 rounded-l my-2 w-full'
					/>
					<br />
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Enter Email Address'
						required
						className='py-1 px-3 rounded-l my-2 w-full'
					/>
					<br />
					<div className='flex items-center justify-center'>
						<input
							type={passwordType}
							onChange={handlePasswordChange}
							value={passwordInput}
							name='password'
							id='password'
							placeholder='Enter Password'
							required
							className='py-1 px-3 rounded-l my-2 w-full'
						/>
						<span onClick={togglePassword}>
							{passwordType === "password" ? (
								<AiFillEye className='eyeIcon bg-white' />
							) : (
								<AiFillEyeInvisible className='eyeIcon bg-white' />
							)}
						</span>
					</div>

					<input
						type='text'
						name='photoURL'
						id='photoURL'
						placeholder='Insert your Photo URL'
						className='py-1 px-3 rounded-l my-2 w-full'
					/>
					<div className='text-yellow-300 font-bold'>{showError}</div>
					<div className='text-green-400 font-semibold'>{success}</div><br></br>
					<div className=' h-10 mx-auto'>
						<input
							type='submit'
							value='Register'
							className={`${styles.primaryButton} bg-gray-400`}
						/>
					</div>
				</form><br></br>

				<div className='text-white mt-5'>
					Already have an account? Please{" "}
					<Link to='../login' className='font-semibold text-yellow-300'>
						Login
					</Link>{" "}
				</div>
			</div>
		</div>
	);
};

export default Register;
