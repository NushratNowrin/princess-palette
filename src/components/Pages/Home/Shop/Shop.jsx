import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Category from "./Category";
import "./Shop.css";

const Shop = () => {
    const [allToys, setAllToys] = useState([])
    var lipsticks = [];
    var makeupboxs = [];
    var mirrors = [];
    var combs = [];
    useEffect(()=>{
        fetch('https://princess-palette-server-side.vercel.app/toys')
        .then(res => res.json())
        .then(data => setAllToys(data))
    }, [])
    
    for(const lipstickCategory in allToys){
        const allLipstickCategory = allToys.filter((singleToy) => singleToy?.category === 'lipstick');
        lipsticks = [...allLipstickCategory];  
    }
    for(const makeupboxCategory in allToys){
        const allmakeupboxCategory = allToys.filter((singleToy) => singleToy?.category === 'makeupbox');
        makeupboxs = [...allmakeupboxCategory];  
    }
    for(const mirrorCategory in allToys){
        const allmirrorCategory = allToys.filter((singleToy) => singleToy?.category === 'mirror');
        mirrors = [...allmirrorCategory];  
    }
    for(const combCategory in allToys){
        const allcombCategory = allToys.filter((singleToy) => singleToy?.category === 'comb');
        combs = [...allcombCategory];  
    }


	return (
		<div className="px-10 py-16 min-h-min">
            <div className="text-center text-black mb-10 tracking-wide">
				<h2 className='mb-3 text-xl font-bold'>
					Watch by Category
				</h2>
				<p className="text-xs font-thin">
					Your Little Princess deserve the best. <br />
					So search the best Toy Place which will be surprising for her.
				</p>
			</div>
			<Tabs>
				<TabList className="text-sm flex justify-center ">
					<Tab>Lip Stick</Tab>
					<Tab>Makeup Box</Tab>
					<Tab>Mirror Set</Tab>
					<Tab>Comb Set</Tab>
				</TabList>

				<TabPanel>
                    <div className="md:grid grid-cols-3 gap-5">
                    {
                        lipsticks.map(lipstick => 
                            <Category
                            key={lipstick._id}
                            category = {lipstick}>
                            </Category>)
                    }
                    </div>
				</TabPanel>
				<TabPanel>
                    <div className="md:grid grid-cols-3 gap-5">
                    {
                        makeupboxs.map(makeupbox => 
                            <Category
                            key={makeupbox._id}
                            category = {makeupbox}>
                            </Category>)
                    }
                    </div>
				</TabPanel>
				<TabPanel>
                    <div className="md:grid grid-cols-3 gap-5">
                    {
                        mirrors.map(mirror => 
                            <Category
                            key={mirror._id}
                            category = {mirror}>
                            </Category>)
                    }
                    </div>
				</TabPanel>
				<TabPanel>
                    <div className="md:grid grid-cols-3 gap-5">
                    {
                        combs.map(comb => 
                            <Category
                            key={comb._id}
                            category = {comb}>
                            </Category>)
                    }
                    </div>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default Shop;
