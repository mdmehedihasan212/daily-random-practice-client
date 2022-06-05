import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'

const ReactSpring = () => {

    const styles = useSpring({
        loop: true,
        delay: 500,
        to: [
            { opacity: 1, color: '#ffaaee' },
            { opacity: 0, color: 'rgb(14,26,19)' },
        ],

        from: { opacity: 0, color: 'blue' },
    })

    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 2000,
        onRest: () => set(!flip),
    })

    return (
        <div>
            <h1 className='text-2xl text-center my-6 font-bold'>React Spring Explore</h1>
            {/* <animated.div style={styles} className='text-5xl text-center mt-4'>I will fade in and out</animated.div> */}
            <animated.h1 style={props} className='text-2xl text-center my-6 font-bold'>hello</animated.h1>
        </div>
    );
};

export default ReactSpring;