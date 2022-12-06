import React, { useEffect, useState } from 'react';
import useTitle from '../../Hook/useTitle';
import Service from './Service';

const Services = () => {
    useTitle("Services")
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://within-mind-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>

            <div className='text-center p-3'>
                <h2 className='text-5xl font-semibold py-3'> I Can Help You In Different Situations</h2>


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