import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Shop = () => {
    const [allToys, setAllToys] = useState([])
    var lipstick = [];
    const [makeupbox, setMakeupbox] = useState([])
    const [mirror, setMirror] = useState([])
    const [comb, setComb] = useState([])
    useEffect(()=>{
        fetch('https://princess-palette-server-side.vercel.app/toys')
        .then(res => res.json())
        .then(data => setAllToys(data))
    }, [])
    
    for(const lipstickCategory in allToys){
        const allLipstickCategory = allToys.filter((singleToy) => singleToy?.category === 'lipstick');
        lipstick = [...allLipstickCategory];
    }
    console.log(lipstick)

	return (
		<div className="px-10 py-16">
			<Tabs>
				<TabList>
					<Tab>Lip Stick</Tab>
					<Tab>Title 2</Tab>
				</TabList>

				<TabPanel>
                    <img src={lipstick.image} alt="" />
					<h2>Name: {lipstick.name}</h2>
					<h2>Category: {lipstick.category}</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default Shop;
