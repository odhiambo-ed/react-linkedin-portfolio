import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Education from '../pages/Education';
import Experience from '../pages/Experience';
import Error404 from '../pages/Error404';

const routes = [
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />,
    },
    {
        path: '/about',
        element: <About />,
        errorElement: <Error404 />,
    },
    {
        path: '/education',
        element: <Education />,
        errorElement: <Error404 />,
    },
    {
        path: '/experience',
        element: <Experience />,
        errorElement: <Error404 />,
    }
];

export default routes;