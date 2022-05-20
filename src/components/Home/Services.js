import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    useEffect(() => {
        axios.get(`http://localhost:5000/products?page=${page}&size=${size}`)
            .then(res => {
                setProducts(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [page, size])


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
            <h1 className="text-3xl mt-12 font-bold text-center">Services: {products?.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                {
                    products.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div class="flex justify-center mx-auto my-12">
                {
                    [...Array(pageCount).keys()].map(count => <button
                        className={page === count ? 'btn btn-active' : 'btn'}
                        onClick={() => setPage(count)}
                        class="btn mx-1">{count + 1}</button>)
                }
                <button className='btn'>{size}</button>
                <select onChange={e => setSize(e.target.value)} class="select select-bordered max-w-xs mx-1">
                    <option selected value='10'>10</option>
                    <option value='30'>30</option>
                    <option value='50'>50</option>
                    <option value='50'>80</option>
                </select>
            </div>
        </div>
    );
};

export default Services;