import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleDelete, handleUpdate }) => {

    const { serviceName, email, price, status, customer, phone, service, _id } = order;
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`https://genius-car-server-five-xi.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setServices(data))

    }, [service])



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-square btn-outline'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-xl w-20 h-20">
                            {
                                services?.img &&
                                <img src={services.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>{phone}</td>
            <th>
                <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
        </tr>
    );
};

export default OrderRow;