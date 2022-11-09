import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Registration = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Full Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className="text-xm text-center sm:px-6 dark:text-gray-400">Already have an account?
                                <Link rel="noopener noreferrer" to="/login" className="underline text-cyan-300">    Log in</Link>
                            </p>
                        </Form>
                    </div>

                    <div className="text-center lg:text-left">
                        <img src="https://inspizone.avitron.com.sg/wp-content/uploads/2022/04/Register-Now-GIF-1.gif" alt="" />
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Register asap to get full access of all <strong>Within Mind</strong>  features! </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;