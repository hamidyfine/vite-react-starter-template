import { routes } from '../configs';

export const getRoute = (group: string, name?: string) => {
    // If parent is not defined, return the root route.
    const parent = routes[group as keyof typeof routes];
    if (!parent) {
        console.warn(`Route group ${group} does not exist`);
        return routes.root._prefix;
    }

    // If child is not defined, return error
    const child = parent[name as keyof typeof parent];
    if ((!name && !child) || child === '') return parent._prefix;
    if (name && !child) {
        throw new Error(`Route name ${name} does not exist in group ${group}`);
    }

    return `${parent._prefix}/${child}`;
};
