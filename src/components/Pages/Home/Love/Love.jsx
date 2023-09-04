import React, { useEffect, useState } from 'react';
import './Love.css'
import { styles } from '../../../Style/style';
import SingleLove from './SingleLove';

const Love = () => {
    const [loves, setLoves] = useState([]);
    useEffect(()=>{
        fetch('/love.json')
        .then(res => res.json())
        .then(data => setLoves(data))
    },[]);
    return (
        <div className='Lovebg lg:px-32 lg:py-20 md:px-20 py-10 px-5'>
            <div className='md:p-20 p-10 bg-violet-800 bg-opacity-70'>
            <div >
				<h2 className='md:text-3xl text-xl font-semibold tracking-wide mb-5 text-center text-red-300'>Why Love Us?</h2>
				<p className={`${styles.secondaryHeader} text-gray-100`}>
                We&apos;re a world of imagination, creativity, and endless fun
				</p>
			</div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-8 mt-10">
                    {
                        loves.map(love => 
                            <SingleLove key={love.id} {...love}></SingleLove>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Love;