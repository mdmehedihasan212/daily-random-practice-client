import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import ServiceCard from './ServiceCard';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';

const Services = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(data);
            })
    }, [])

    // useEffect(() => {
    //     fetch('http://localhost:5000/productCount', {
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('token')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             const count = data.products;
    //             const page = Math.ceil(count / 10);
    //             setPageCount(page);
    //         })
    // }, [])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='px-12'>
            <h1 className="text-3xl mt-12 font-bold text-center">Services: {products?.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                {
                    products?.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            {/* <div class="flex justify-center mx-auto my-12">
                {
                    [...Array(pageCount).keys()].map(count => <button
                        key={count._id}
                        className={page === count ? 'btn btn-active' : 'btn'}
                        onClick={() => setPage(count)}>{count + 1}</button>)
                }
                <button className='btn'>{size}</button>
                <select onChange={e => setSize(e.target.value)} class="select select-bordered max-w-xs mx-1">
                    <option selected value='10'>10</option>
                    <option value='30'>30</option>
                    <option value='50'>50</option>
                    <option value='50'>80</option>
                </select>
            </div> */}
        </div>
    );
};

export default Services;