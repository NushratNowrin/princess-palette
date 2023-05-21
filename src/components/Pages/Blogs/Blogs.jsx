import React, { useState } from "react";
import { useNavigation } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

const Blogs = () => {
	const [isOpen1, setIsOpen1] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);
	const [isOpen4, setIsOpen4] = useState(false);

	// spinner
	const navigation = useNavigation();
	if (navigation.state === "loading") {
		return <Spinner></Spinner>;
	}

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
		<div className='py-10 px-20 my-10 bg-violet-400'>
			<h2 className='text-xl font-semibold text-black text-center mb-5'>
				Some Important Questions
			</h2>
			<div className='accordion m-2 rounded-lg overflow-hidden font-semibold'>
				<div
					className='accordion-header flex justify-between items-center text-lg bg-violet-800 text-white py-3 px-8'
					onClick={toggleAccordion1}>
					<h3>
						What is an access token and refresh token? How do they work and
						where should we store them on the client-side?
					</h3>
					<span className="mr-3">{isOpen1 ? "-" : "+"}</span>
				</div>
				{isOpen1 && (
					<div className='text-sm accordion-content bg-violet-200 py-3 px-8'>
						<p>
							Refresh tokens allow you to balance your user&lsquo;s access needs
							with your organization&lsquo;s security practices. <br />
							Access tokens help users get the resources they need to complete
							their tasks, but such tokens can also expose your organization to
							data compromise or other malicious actions if a hacker is able to
							steal them. <br />
							A refresh token just helps you re-validate a user without them
							having to re-enter their login credentials multiple times. The
							access token is re-issued, provided the refresh token is a valid
							one requesting permission to access confidential resources. This
							method provides an enhanced user experience all while keeping a
							robust security interface. <br />
							The main purpose of using a refresh token is to considerably
							shorten the life of an access token. The refresh token can then
							later be used to authenticate the user as and when required by the
							application without running into problems such as cookies being
							blocked, etc. If that does not make much sense, think of it this
							way: When a browser makes a request to an API endpoint to use a
							resource provided only to authenticated users, the application
							would require the credentials of the user. And upon authentication
							(login), the application on the user&lsquo;s browser is granted
							access to the resource. This access is provided by sharing an
							access token with the user&lsquo;s browser so that subsequent API
							calls from the browser -- which requires the credentials -- can be
							sent without any hassle. <br />
							<br />
							Access tokens should be protected as they move through the open
							space of the internet. Companies that dont use encryption or
							protected communication channels could allow third parties to grab
							tokens, and that could mean unauthorized access to very sensitive
							data. It pays to be very careful. Most access tokens also expire.
							That simple step allows websites to ensure users are still online
							and active, and that could help to avoid large-scale duplication
							or deletion. Expiration dates can vary from company to company.{" "}
							<br />
							The process of generating an access token is very simple. You set
							the number of days that the access token should be valid for (we
							recommend 14) You click on &quot;Go&quot; to generate the token
							Once the token is generated, you click &quot;Copy and Close&quot;
							to copy the token to the clipboard Paste the token into the ticket
							you are submitting on the Thrive Themes support forum (Site
							Details section, &quot;WP-admin Password&quot; field) when
							contacting our support team. You can find more detailed
							instructions on how to generate the token in this article. Send
							this code to our support team and we will be able to access your
							site for as long as the token remains active.
						</p>
					</div>
				)}
			</div>

			<div className='accordion m-2 rounded-lg overflow-hidden font-semibold'>
				<div
					className='accordion-header flex justify-between items-center text-lg bg-violet-800 text-white py-3 px-8'
					onClick={toggleAccordion2}>
					<h3>Compare SQL and NoSQL databases?</h3>
					<span>{isOpen2 ? "-" : "+"}</span>
				</div>
				{isOpen2 && (
					<div className='text-sm accordion-content bg-violet-200 py-3 px-8'>
						<p>QL is a query language, while SQL Server is a database management system. SQL is a query language for working with a relational database, while SQL Server is proprietary software that performs SQL queries. SQL databases use a structured query language and have a defined schema. NoSQL databases use dynamic schemas for unstructured data. NoSQL databases scale horizontally, whereas SQL databases scale vertically. Whereas SQL databases are table-based, NoSQL databases are document, key-value, graph, or wide-column stores.</p>
					</div>
				)}
			</div>
			<div className='accordion m-2 rounded-lg overflow-hidden font-semibold'>
				<div
					className='accordion-header flex justify-between items-center text-lg bg-violet-800 text-white py-3 px-8'
					onClick={toggleAccordion3}>
					<h3>What is express js? What is Nest JS</h3>
					<span>{isOpen3 ? "-" : "+"}</span>
				</div>
				{isOpen3 && (
					<div className='text-sm accordion-content bg-violet-200 py-3 px-8'>
						<p>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
					</div>
				)}
			</div>
			<div className='accordion m-2 rounded-lg overflow-hidden font-semibold'>
				<div
					className='accordion-header flex justify-between items-center text-lg bg-violet-800 text-white py-3 px-8'
					onClick={toggleAccordion4}>
					<h3>What is MongoDB aggregate and how does it work </h3>
					<span>{isOpen4 ? "-" : "+"}</span>
				</div>
				{isOpen4 && (
					<div className='text-sm accordion-content bg-violet-200 py-3 px-8'>
						<p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline. Data aggregators work by combining atomic data from multiple sources, processing the data for new insights and presenting the aggregate data in a summary view. Furthermore, data aggregators usually provide the ability to track data lineage and can trace back to the underlying atomic data that was aggregated.</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Blogs;
