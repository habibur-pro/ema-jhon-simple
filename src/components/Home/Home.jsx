import React from 'react';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Outlet />
            {/* footer here  */}
        </>
    );
};

export default Home;