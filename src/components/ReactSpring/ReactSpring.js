import React from 'react';
import { useSpring, animated } from 'react-spring'

const ReactSpring = () => {

    const styles = useSpring({
        loop: true,
        to: [
            { opacity: 1, color: '#ffaaee' },
            { opacity: 0, color: 'rgb(14,26,19)' },
        ],
        from: { opacity: 0, color: 'red' },
    })

    return (
        <div>
            <h1 className='text-2xl text-center my-6 font-bold'>React Spring Explore</h1>
            <animated.div style={styles} className='text-5xl text-center mt-4'>I will fade in and out</animated.div>
        </div>
    );
};

export default ReactSpring;