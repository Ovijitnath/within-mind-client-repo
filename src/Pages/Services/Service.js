import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h4>$  {price}</h4>
                <p>{description.slice(0, 100) + `...`}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn btn-accent">Details</button></Link>
                </div>
            </div>
        </div>


    );
};

export default Service;