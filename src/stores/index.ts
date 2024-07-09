import { configureStore } from '@reduxjs/toolkit';

import appReducer from './app.store';

export const store = configureStore({
    reducer: {
        app: appReducer,
    },
});

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch

// Export actions
export * as app_actions from './app.store';
