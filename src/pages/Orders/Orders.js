import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, userLogOut } = useContext(AuthContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://genius-car-server-five-xi.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('Genius-Token')}`,
            }
        })
            .then(res => {

                if (res.status === 401 || res.status === 403) {
                    return userLogOut()
                }
                return res.json()
            })
            .then(data => setOrders(data))
    }, [user?.email, userLogOut])

    const handleDelete = id => {
        const proceed = window.confirm("are you sure you want to delete?")

        if (proceed) {
            fetch(`https://genius-car-server-five-xi.vercel.app/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('Genius-Token')}`,
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining);
                    }
                })

        }
    }

    const handleUpdate = id => {
        fetch(`https://genius-car-server-five-xi.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('Genius-Token')}`,

            },
            body: JSON.stringify({ status: 'Approved' })
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remainning = orders.filter(odr => odr._id !== id);
                const approving = orders.find(odr => odr._id === id);
                approving.status = 'Approved';
                const newOrders = [approving, ...remainning];
                setOrders(newOrders);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th>
                                Delete
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Phone</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;