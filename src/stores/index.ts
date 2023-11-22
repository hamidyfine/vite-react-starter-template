import { configureStore } from '@reduxjs/toolkit';

import workspaceReducer from './workspace.store';

export const store = configureStore({
    reducer: {
        workspace: workspaceReducer,
    },
});

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
