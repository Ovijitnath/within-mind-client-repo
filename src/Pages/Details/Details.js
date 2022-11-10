import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Details = () => {
    const { _id, title, img, description, price, rating } = useLoaderData();
    const { user } = useContext(AuthContext);
    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review placed successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));



    }
    return (
        <div>
            <h1 className="text-5xl font-bold text-center text-gray-500 pt-3 pb-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">{title}!</h1>
            <div className="min-h-screen mx-15 p-1">
                <div className="flex-col lg:flex-row-reverse  bg-cyan-100 shadow-md">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl mx-auto" />
                    <div className='px-10'>
                        <h1 className="text-3xl font-bold text-center p-3">{title} is very much needed!</h1>
                        <p className="py-6">{description}</p>
                        <div className='flex justify-evenly py-3'>
                            <h5>Price: ${price}</h5>
                            <h5>Rating {rating}/5</h5>
                        </div>

                    </div>
                </div>
            </div>

            <form onSubmit={handlePlaceOrder} className='p-10 border shadow-sm bg-slate-100'>
                <h2 className="text-4xl text-center font-semibold text-green-800">You are about to review on:   {title}</h2>
                <h4 className="text-3xl">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" required />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" required />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full p-5" placeholder="Your Message" required></textarea>

                <input className='btn' type="submit" value="Place Your Review" />
            </form>




        </div>
    );
};

export default Details;