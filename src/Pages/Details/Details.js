import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
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
                <h4 className="text-3xl text-rose-900 p-5 text-center font-bold">You Must Login To see your review list!</h4>
                <h4 className="text-2xl">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" required />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" required />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full p-5" placeholder="Your Message" required></textarea>

                <Link to="/review">
                    <input className='btn' type="submit" value="Place Your Review" />
                </Link>
            </form>

            <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                        <p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        <article className="flex flex-col dark:bg-gray-900">
                            <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
                            </Link>
                            <div className="flex flex-col flex-1 p-6">
                                <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                                <Link rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Jef Basus</Link>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">I must say that your books and seminars are a great inspiration to us. After visiting your training courses and events, life seems to be opening new doors and opportunities to me. My marriage seems to grow stronger. Thank you kindly.</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 1, 2020</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?2" />
                            </Link>
                            <div className="flex flex-col flex-1 p-6">
                                <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                                <Link rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Elon Mask</Link>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">After a horrific accident I was living in a struggle, and could not move forward. Now I feel that I am ready to start a new page of my life. I feel lucky to be alive</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 2, 2020</span>
                                    <span>2.2K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />
                            </Link>
                            <div className="flex flex-col flex-1 p-6">
                                <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                                <Link rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Mark Zucerburg</Link>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Life is sometimes unfair and overwhelming, and people seem to forget what they should be concentrating on. That is why we can relate to the wonderful life coach Judie Larson. Thank you for your help!</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 3, 2020</span>
                                    <span>2.3K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?4" />
                            </Link>
                            <div className="flex flex-col flex-1 p-6">
                                <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                                <Link rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Johnny Dep</Link>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">We all have a past, but we need to learn not to look back and live for the future. Always and Forever, you are a life savior. Thank you, Judie.</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 4, 2020</span>
                                    <span>2.4K views</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Details;