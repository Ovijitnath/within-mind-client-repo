import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const Review = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this review');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(odr => odr._id !== id);
                    const approving = reviews.find(odr => odr._id === id);
                    approving.status = 'Approved'

                    const newOrders = [approving, ...remaining];
                    setReviews(newOrders);
                }
            })
    }


    return (
        <div>
            <h1>You have {reviews.length}s</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></ReviewRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Review;