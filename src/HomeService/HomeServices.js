import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../Hook/useTitle';
import HomeService from './HomeService';
;

const HomeServices = () => {
    useTitle("HomeServices")
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='py-10'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold'> I Can Help You In Different Situations</h2>


            </div>

            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10 py-10'>


                {
                    services.slice(0, 3).map(service =>

                        <HomeService
                            key={services._id}
                            service={service}
                        ></HomeService>)

                }
            </div>
            <div className='text-center'>
                <Link to="/services"><button className="btn btn-outline btn-success btn-wide">See More</button></Link>
            </div>

        </div>
    );
};

export default HomeServices;