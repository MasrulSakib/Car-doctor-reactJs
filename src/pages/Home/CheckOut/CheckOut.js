import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const CheckOut = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            phone,
            email,
            message
        }

        fetch('https://genius-car-server-five-xi.vercel.app/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('Genius-Token')}`,
            },
            body: JSON.stringify(order),
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order placed successfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='mt-20'>
                <h2 className='text-4xl'>You are about to order: {title}</h2>
                <p className='text-3xl text-error font-semibold'>Price: ${price}</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-20'>
                <input name="firstName" type="text" placeholder="First Name" className="input input-bordered input-error w-full" />
                <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered input-error w-full" />
                <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered input-error w-full" />
                <input name="email" type="text" placeholder="Your Email" className="input input-bordered input-error w-full" defaultValue={user?.email} readOnly />

            </div>
            <div>
                <textarea name="message" className="textarea textarea-error w-full my-10" placeholder="Your Message"></textarea>
                <button className='w-full btn btn-error mb-20' type='submit'>Order Confirm</button>
            </div>
        </form>
    );
};

export default CheckOut;