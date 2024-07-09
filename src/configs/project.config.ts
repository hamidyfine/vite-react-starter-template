export const project = {
    // Routes
    // Using routes in the app like this:
    // App
    app: {
        theme: 'dark',
    },

    // Auth
    auth: {
        authenticated_redirect_path: '/dashboard',
        unauthenticated_redirect_path: '/auth/login',
    },

    // `{route.auth.prefix}/{route.auth.login}
    route: {
        auth: {
            login: 'login',
            logout: 'logout',
            prefix: '/auth',
            register: 'register',
        },
        dashboard: {
            home: '',
            prefix: '/dashboard',
        },
        root: {
            prefix: '/',
        },
    },
} as const;
