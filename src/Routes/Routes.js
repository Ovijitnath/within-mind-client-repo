import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Blog from '../Pages/Blog/Blog';
import ErrorPage from '../Pages/SharedPage/ErrorPage/ErrorPage';
import Services from '../Pages/Services/Services';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import Contact from '../Pages/Contact/Contact';
import Details from '../Pages/Details/Details';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },




        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])