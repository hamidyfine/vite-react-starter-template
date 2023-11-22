export const project = {
    // Routes
    // Using routes in the app like this:
    // `{route.auth.prefix}/{route.auth.login}
    route: {
        root: {
            prefix: '/',
        },
        auth: {
            prefix: '/auth',
            login: 'login',
            logout: 'logout',
            register: 'register',
        },
    },

    // Auth
    auth: {
        authenticated_redirect_path: '/dashboard',
        unauthenticated_redirect_path: '/login',
    },
} as const;
