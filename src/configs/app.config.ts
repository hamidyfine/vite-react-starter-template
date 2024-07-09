import { getRoute } from '../utils';

export const app = {
    api: {
        base_url: import.meta.env.VITE_API_URL as string || 'http://localhost:8000/',
        status: {
            access_dined: 403,
            access_token_expire: 408,
            refresh_token_expire: 407,
            unauthorized: 401,
        },
        use_role: true,
        use_token: true,
    },

    auth: {
        features: {
            recover_password: true,
            remember_me: true,
        },
        is_enabled: true,
        redirect_path: {
            authenticated: getRoute('dashboard', 'home'),
            unauthenticated: getRoute('auth', 'login'),
        },
        refresh_token_ignored_path: [
            getRoute('auth', 'login'),
            getRoute('auth','register'),
        ],
    },

    dashboard: {
        layout: {
            is_fluid: false,
        },
    },

    default_locale: import.meta.env.VITE_DEFAULT_LOCALE as string || 'en',

    features: {
        localization: true,
        theme: 'light',
    },

    locales: [
        {
            dir: 'ltr',
            locale: 'en',
            title: 'English',
        },
        {
            dir: 'rtl',
            locale: 'fa',
            title: 'فارسی',
        },
    ],

    mock: {
        env: 'development',
        is_enable: false,
        namespace: 'api',
        timing: 1000,
    },
};
