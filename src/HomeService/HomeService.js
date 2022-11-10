import React from 'react';
import useTitle from '../Hook/useTitle';

const HomeService = ({ service }) => {
    useTitle("HomeService")
    const { img, price, title, description } = service;
    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h4>$  {price}</h4>
                <p>{description.slice(0, 200) + `...`}</p>
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>


    );
};

export default HomeService;