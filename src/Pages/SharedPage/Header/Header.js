import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import logo from '../../../favicon.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    return (
        <div>

            <div>
                <nav className=" bg-gray-100  shadow">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="w-full justify-between flex items-center">
                                <Link to="/" className="btn btn-ghost normal-case not-italic hover:italic font-black text-xl"><img src={logo} style={{ width: 30, height: 30 }} alt="" />   Within Mind</Link>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <Link className="text-gray-500  hover:text-indigo-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/home">
                                            Home
                                        </Link>
                                        <Link className="text-gray-800  hover:text-indigo-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/services">
                                            Services
                                        </Link>
                                        <Link className="text-gray-500  hover:text-indigo-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/blog">
                                            Blog
                                        </Link>
                                        <Link className="text-gray-500  hover:text-indigo-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/contact">
                                            Contact
                                        </Link>
                                        {
                                            user?.email ?
                                                <>
                                                    <Link className="text-gray-500  hover:text-indigo-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/review">
                                                        Review
                                                    </Link>
                                                    <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
                                                </>
                                                :
                                                <Link className="text-gray-500  hover:text-indigo-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/login">
                                                    Login
                                                </Link>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="ml-4 flex items-center md:ml-6">
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                    <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link className="text-gray-500 hover:text-indigo-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/home">
                                Home
                            </Link>
                            <Link className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" to="/services">
                                Services
                            </Link>
                            <Link className="text-gray-500 hover:text-indigo-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/blog">
                                Blog
                            </Link>
                            <Link className="text-gray-500 hover:text-indigo-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/contact">
                                Contact
                            </Link>
                            {
                                user?.email ?
                                    <>
                                        <Link className="text-gray-500  hover:text-indigo-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/review">
                                            Review
                                        </Link>
                                        <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
                                    </>
                                    :
                                    <Link className="text-gray-500  hover:text-indigo-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/login">
                                        Login
                                    </Link>
                            }
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    );
};

export default Header;