/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router';

// Import Routes

import { Route as rootRoute } from './../pages/__root';
import { Route as IndexIndexImport } from './../pages/_index/_index';
import { Route as DashboardDashboardImport } from './../pages/dashboard/_dashboard';
import { Route as DashboardDashboardIndexImport } from './../pages/dashboard/_dashboard/index';
import { Route as IndexIndexIndexImport } from './../pages/_index/_index.index';
import { Route as DashboardDashboardProfileIndexImport } from './../pages/dashboard/_dashboard/profile/index';

// Create Virtual Routes

const DashboardImport = createFileRoute('/dashboard')();
const IndexIndexAboutLazyImport = createFileRoute('/_index/_index/about')();

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any);

const IndexIndexRoute = IndexIndexImport.update({
  id: '/_index/_index',
  getParentRoute: () => rootRoute,
} as any);

const DashboardDashboardRoute = DashboardDashboardImport.update({
  id: '/_dashboard',
  getParentRoute: () => DashboardRoute,
} as any);

const DashboardDashboardIndexRoute = DashboardDashboardIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardDashboardRoute,
} as any);

const IndexIndexIndexRoute = IndexIndexIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => IndexIndexRoute,
} as any);

const IndexIndexAboutLazyRoute = IndexIndexAboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => IndexIndexRoute,
} as any).lazy(() =>
  import('./../pages/_index/_index.about.lazy').then((d) => d.Route),
);

const DashboardDashboardProfileIndexRoute =
  DashboardDashboardProfileIndexImport.update({
    id: '/profile/',
    path: '/profile/',
    getParentRoute: () => DashboardDashboardRoute,
  } as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_index/_index': {
      id: '/_index/_index';
      path: '';
      fullPath: '';
      preLoaderRoute: typeof IndexIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/dashboard': {
      id: '/dashboard';
      path: '/dashboard';
      fullPath: '/dashboard';
      preLoaderRoute: typeof DashboardImport;
      parentRoute: typeof rootRoute;
    };
    '/dashboard/_dashboard': {
      id: '/dashboard/_dashboard';
      path: '/dashboard';
      fullPath: '/dashboard';
      preLoaderRoute: typeof DashboardDashboardImport;
      parentRoute: typeof DashboardRoute;
    };
    '/_index/_index/about': {
      id: '/_index/_index/about';
      path: '/about';
      fullPath: '/about';
      preLoaderRoute: typeof IndexIndexAboutLazyImport;
      parentRoute: typeof IndexIndexImport;
    };
    '/_index/_index/': {
      id: '/_index/_index/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof IndexIndexIndexImport;
      parentRoute: typeof IndexIndexImport;
    };
    '/dashboard/_dashboard/': {
      id: '/dashboard/_dashboard/';
      path: '/';
      fullPath: '/dashboard/';
      preLoaderRoute: typeof DashboardDashboardIndexImport;
      parentRoute: typeof DashboardDashboardImport;
    };
    '/dashboard/_dashboard/profile/': {
      id: '/dashboard/_dashboard/profile/';
      path: '/profile';
      fullPath: '/dashboard/profile';
      preLoaderRoute: typeof DashboardDashboardProfileIndexImport;
      parentRoute: typeof DashboardDashboardImport;
    };
  }
}

// Create and export the route tree

interface IndexIndexRouteChildren {
  IndexIndexAboutLazyRoute: typeof IndexIndexAboutLazyRoute;
  IndexIndexIndexRoute: typeof IndexIndexIndexRoute;
}

const IndexIndexRouteChildren: IndexIndexRouteChildren = {
  IndexIndexAboutLazyRoute: IndexIndexAboutLazyRoute,
  IndexIndexIndexRoute: IndexIndexIndexRoute,
};

const IndexIndexRouteWithChildren = IndexIndexRoute._addFileChildren(
  IndexIndexRouteChildren,
);

interface DashboardDashboardRouteChildren {
  DashboardDashboardIndexRoute: typeof DashboardDashboardIndexRoute;
  DashboardDashboardProfileIndexRoute: typeof DashboardDashboardProfileIndexRoute;
}

const DashboardDashboardRouteChildren: DashboardDashboardRouteChildren = {
  DashboardDashboardIndexRoute: DashboardDashboardIndexRoute,
  DashboardDashboardProfileIndexRoute: DashboardDashboardProfileIndexRoute,
};

const DashboardDashboardRouteWithChildren =
  DashboardDashboardRoute._addFileChildren(DashboardDashboardRouteChildren);

interface DashboardRouteChildren {
  DashboardDashboardRoute: typeof DashboardDashboardRouteWithChildren;
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardDashboardRoute: DashboardDashboardRouteWithChildren,
};

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren,
);

export interface FileRoutesByFullPath {
  '': typeof IndexIndexRouteWithChildren;
  '/dashboard': typeof DashboardDashboardRouteWithChildren;
  '/about': typeof IndexIndexAboutLazyRoute;
  '/': typeof IndexIndexIndexRoute;
  '/dashboard/': typeof DashboardDashboardIndexRoute;
  '/dashboard/profile': typeof DashboardDashboardProfileIndexRoute;
}

export interface FileRoutesByTo {
  '/dashboard': typeof DashboardDashboardIndexRoute;
  '/about': typeof IndexIndexAboutLazyRoute;
  '/': typeof IndexIndexIndexRoute;
  '/dashboard/profile': typeof DashboardDashboardProfileIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  '/_index/_index': typeof IndexIndexRouteWithChildren;
  '/dashboard': typeof DashboardRouteWithChildren;
  '/dashboard/_dashboard': typeof DashboardDashboardRouteWithChildren;
  '/_index/_index/about': typeof IndexIndexAboutLazyRoute;
  '/_index/_index/': typeof IndexIndexIndexRoute;
  '/dashboard/_dashboard/': typeof DashboardDashboardIndexRoute;
  '/dashboard/_dashboard/profile/': typeof DashboardDashboardProfileIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | ''
    | '/dashboard'
    | '/about'
    | '/'
    | '/dashboard/'
    | '/dashboard/profile';
  fileRoutesByTo: FileRoutesByTo;
  to: '/dashboard' | '/about' | '/' | '/dashboard/profile';
  id:
    | '__root__'
    | '/_index/_index'
    | '/dashboard'
    | '/dashboard/_dashboard'
    | '/_index/_index/about'
    | '/_index/_index/'
    | '/dashboard/_dashboard/'
    | '/dashboard/_dashboard/profile/';
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexIndexRoute: typeof IndexIndexRouteWithChildren;
  DashboardRoute: typeof DashboardRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
  IndexIndexRoute: IndexIndexRouteWithChildren,
  DashboardRoute: DashboardRouteWithChildren,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_index/_index",
        "/dashboard"
      ]
    },
    "/_index/_index": {
      "filePath": "_index/_index.tsx",
      "children": [
        "/_index/_index/about",
        "/_index/_index/"
      ]
    },
    "/dashboard": {
      "filePath": "dashboard",
      "children": [
        "/dashboard/_dashboard"
      ]
    },
    "/dashboard/_dashboard": {
      "filePath": "dashboard/_dashboard.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/_dashboard/",
        "/dashboard/_dashboard/profile/"
      ]
    },
    "/_index/_index/about": {
      "filePath": "_index/_index.about.lazy.tsx",
      "parent": "/_index/_index"
    },
    "/_index/_index/": {
      "filePath": "_index/_index.index.tsx",
      "parent": "/_index/_index"
    },
    "/dashboard/_dashboard/": {
      "filePath": "dashboard/_dashboard/index.tsx",
      "parent": "/dashboard/_dashboard"
    },
    "/dashboard/_dashboard/profile/": {
      "filePath": "dashboard/_dashboard/profile/index.tsx",
      "parent": "/dashboard/_dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
