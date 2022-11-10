import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const { title, img, description, price, rating } = useLoaderData();
    return (
        <div>
            <h1 className="text-5xl font-bold text-center text-orange-500 pt-3">{title}!</h1>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse  bg-cyan-100 shadow-md">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">{title}!</h1>
                        <p className="py-6">{description}</p>
                        <div className='flex justify-evenly'>
                            <h5>Price: ${price}</h5>
                            <h5>Rating {rating}/5</h5>
                        </div>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;