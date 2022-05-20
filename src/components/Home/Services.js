import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => {
                setServices(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])


    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.products;
                const page = Math.ceil(count / 10);
                setPageCount(page);
            })
    }, [])

    return (
        <div className='px-12'>
            <h1 className="text-3xl mt-12 font-bold text-center">Services: {services.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
                <div class="btn-group justify-center mt-12">
                    {
                        [...Array(pageCount).keys()].map(count => <button class="btn mx-1">{count}</button>)
                    }

                    {/* <button class="btn btn-active">2</button>
                    <button class="btn">3</button>
                    <button class="btn">4</button> */}
                </div>
            </div>
        </div>
    );
};

export default Services;