import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToyCard from "../../Shared/ToyCard/ToyCard";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
    const [query, setQuery] = useState('');
	const toys = useLoaderData();
	useTitle("All Toys");
    // console.log(toys.filter(toy => toy.name ))
    const toysName = toys.map(toy => toy.name);
    console.log(toys.filter(toy => (toy.name).toLowerCase().includes(query)))
    // console.log(toysName.filter(toyName => toyName.toLowerCase().includes(query)))
    // console.log(toys.filter(toy => toy.name))
	return (
		<div>
            <div className='text-center pt-32'>
            <h2 className='text-lg font-bold text-violet-900 '>Search which you need</h2>
            <form>
                <div>
                    <input type="search" name="search" id="search" placeholder='Search here by toy name' className='input input-bordered my-3' onChange={event => setQuery(event.target.value)}/>
                </div>
            </form>
        </div>
			<div className='md:grid grid-cols-2 '>
				{(toys.filter(toy => (toy.name).toLowerCase().includes(query))).map((toy) => (
					<ToyCard key={toy._id} toy={toy}></ToyCard>
				))}
			</div>
		</div>
	);
};

export default AllToys;
