import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Shop from './Shop/Shop';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Shop></Shop>
        </div>
    );
};

export default Home;