import React from 'react';

const Service = ({ service }) => {
    const { img, price, title, description } = service;
    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h4>$  {price}</h4>
                <p>{description.slice(0, 100) + `...`}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-accent">Details</button>
                </div>
            </div>
        </div>


    );
};

export default Service;