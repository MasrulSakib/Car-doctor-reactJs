import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt='' className=" w-4/5 rounded-lg shadow-2xl" />
                    <img src={parts} alt='' className=" absolute right-4 top-1/2 border-8 w-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className='text-2xl font-bold text-orange-600'>About Us</p>
                    <h1 className="text-5xl font-bold">
                        We are qualified <br />
                        & of experience <br />
                        in this field
                    </h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto officiis, rem ut vitae porro id dolore perferendis suscipit illum tempora sit optio nihil maiores quia nam. Sit, quasi voluptate!</p>
                    <p className='mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam fugiat totam, optio iusto ipsa temporibus dolorum pariatur at ea eum.</p>
                    <button className="btn btn-primary" data-theme="sunset">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About