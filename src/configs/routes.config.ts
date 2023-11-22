import { createElement, lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import * as Layout from '../layouts';

export const routes: RouteObject[] = [
    {
        element: createElement(Layout.DefaultLayout),
        children: [
            {
                path: '/',
                element: createElement(lazy(() => import(/*webpackChunkName: "home" */ '../views/home'))),
            },
            // {
            //     element: createElement(Layout.DefaultLayout),
            //     children: [
            //         {
            //             path: '/demo',
            //             element: createElement(lazy(() => import(/*webpackChunkName: "demo" */ '../views/demo'))),
            //         },
            //     ],
            // },
        ],
    },
];
