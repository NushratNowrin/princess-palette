import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Shop from './Shop/Shop';
import useTitle from '../../hooks/useTitle';
import Discount from './Discount/Discount';
import Customer from './Customer/Customer';
import Faq from './Faq/Faq';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Shop></Shop>
            <Gallery></Gallery>
            <Discount></Discount>
            <Customer></Customer>
            <Faq></Faq>
        </div>
    );
};

export default Home;