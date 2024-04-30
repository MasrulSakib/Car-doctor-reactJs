import React from 'react';
import './Banner.css';

const BannerItems = ({ slide }) => {

    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-gradient'>
                <img src={image} alt='' className="w-screen h-screen rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h2 className=' text-6xl text-white font-bold'>
                    Affordable <br />
                    price for car <br />
                    servicing
                </h2>

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-2/4 w-1/2">
                <p className='text-lg text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi inventore maxime magni voluptates nemo provident necessitatibus eligendi dolorem id iusto vel doloribus natus exercitationem esse quos nisi, explicabo sed similique.</p>

            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4" >
                <button data-theme="sunset" className='btn btn-primary me-4'>Discover More</button>
                <button data-theme="sunset" className='btn btn-outline btn-primary'>Latest Project</button>

            </div>


            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle btn-primary me-3 " data-theme="sunset">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle btn-primary" data-theme="sunset">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;