import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyCard from '../../Shared/ToyCard/ToyCard';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const toys = useLoaderData();
    useTitle('All Toys')
    console.log(toys);
    return (
        <div className="grid grid-cols-2 ">
            {
                toys.map(toy => 
                <ToyCard
                    key= {toy._id}
                    toy = {toy}
                ></ToyCard>)
            }
        </div>
    );
};

export default AllToys;