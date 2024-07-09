import { createElement, lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import * as Layout from './layouts';
import { getRoute } from './utils';

export const routes: RouteObject[] = [
    {
        children: [
            {
                element: createElement(lazy(() => import(/*webpackChunkName: "home" */ './views/home'))),
                handle: {
                    crumb: {
                        name: 'home',
                    },
                },
                path: getRoute('home'),
            },
        ],
        element: createElement(Layout.DefaultLayout),
    },
];
