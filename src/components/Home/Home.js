import React from 'react';
import AOSAnimation from '../AOSAnimation/AOSAnimation';
import ReactSpring from '../ReactSpring/ReactSpring';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Services></Services> */}
            <AOSAnimation></AOSAnimation>
            <ReactSpring></ReactSpring>
        </div>
    );
};

export default Home;