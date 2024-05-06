import React, { useEffect, useState } from 'react';
import ServicesData from './ServicesData';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://genius-car-server-five-xi.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mt-20'>
                <h2 className='text-2xl text-orange-600 font-bold'>Services</h2>
                <p className='w-1/2 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempora amet eos doloremque, saepe incidunt, dolorum ipsa ab alias exercitationem dicta hic est facere veritatis error numquam quia laborum vero!</p>
            </div>
            <div className='mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-20 gap-20'>
                    {
                        services.map(service => <ServicesData
                            key={service._id}
                            service={service}
                        ></ServicesData>)
                    }
                </div>

            </div>
            <div className='flex justify-center'>
                <button className="btn btn-primary mb-20" data-theme="sunset">See More</button>
            </div>
        </div>
    );
};

export default Services;