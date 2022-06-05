import React from 'react';
import ReactSpring from '../ReactSpring/ReactSpring';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ReactSpring></ReactSpring>
        </div>
    );
};

export default Home;