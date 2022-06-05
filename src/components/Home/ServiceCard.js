import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, name, price, category, seller } = service;

    return (
        <div class="card w-96 bg-base-100 shadow-2xl">
            <figure class="px-6 pt-6">
                <img src={img} alt="img" class="rounded" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <h3>{category}</h3>
                <h3>{seller}</h3>
                <h3>${price}</h3>
                <div class="card-actions">
                    <Link to={`/payment/${_id}`} class="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;