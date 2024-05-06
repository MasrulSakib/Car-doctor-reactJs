import React from 'react';
import { Link } from 'react-router-dom';

const ServicesData = ({ service }) => {
    const { _id, img, title, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={img} alt="Services" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {/* <p>{description.slice(0, 250)}</p> */}
                <p className='text-xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}><button className="btn btn-primary" data-theme="sunset">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesData;