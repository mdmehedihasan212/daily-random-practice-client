import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams();

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{id}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;