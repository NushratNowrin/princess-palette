import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProviders';
import MyToysCard from '../../Single/MyToysCard/MyToysCard';

const MyToys = () => {
    var myToys = [];
    const allToys = useLoaderData();
    const { user } = useContext(AuthContext);
    const myEmail = user?.email;
    for (const email in allToys) {
		const myAllToys = allToys.filter((singleToy) => singleToy?.email === myEmail);
        // console.log(myAllToys);
        myToys = [...myAllToys]
	}
    console.log(myToys)
    return (
        <div className="grid grid-cols-2">
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