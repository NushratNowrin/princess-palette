import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProviders';
import MyToysCard from '../../Single/MyToysCard/MyToysCard';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    var myToys = [];
    const allToys = useLoaderData();
    const { user } = useContext(AuthContext);
    useTitle('My Toys');
    const myEmail = user?.email;
    for (const email in allToys) {
		const myAllToys = allToys.filter((singleToy) => singleToy?.email === myEmail);
        // console.log(myAllToys);
        myToys = [...myAllToys]
	}
    console.log(myToys)
    return (
        <div className="grid grid-cols-2 min-h-[120px]">
            {
                myToys.map(myToy =>
                    <MyToysCard 
                    key = {myToy._id}
                    myToy = {myToy}
                    ></MyToysCard>
                    )
            }
        </div>
    );
};

export default MyToys;