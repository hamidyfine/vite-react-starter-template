export const routes = {
    auth: {
        _prefix: '/auth',
        access_denied: 'access-denied',
        forget: 'forget-password',
        login: 'login',
        logout: 'logout',
        register: 'register',
    },
    dashboard: {
        _prefix: '/dashboard',
        accounts: 'accounts',
        categories: 'categories',
        home: '',
        profile: 'profile',
        settings: 'settings',
        transactions: 'transactions',
    },
    home: {
        _prefix: '/',
        home: '',
    },
    root: {
        _prefix: '/',
    },
};
