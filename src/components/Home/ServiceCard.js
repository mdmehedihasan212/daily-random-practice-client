import React from 'react';

const ServiceCard = ({ service }) => {
    const { img, name, price, category, seller } = service;

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
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;