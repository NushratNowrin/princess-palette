import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='md:mx-20'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;