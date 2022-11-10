import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>

            <div className='text-center'>
                <h2 className='text-5xl font-semibold'> I Can Help You In Different Situations</h2>
                <p >FOLLOWING SERVICES</p>

            </div>

            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-11 py-10 px-10'>


                {
                    services.map(service =>

                        <Service
                            key={service._id}
                            service={service}
                        ></Service>)

                }
            </div>

        </div>
    );
};

export default Services;