import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyCard from '../../Shared/ToyCard/ToyCard';

const AllToys = () => {
    const toys = useLoaderData();
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