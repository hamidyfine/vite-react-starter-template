import { createSlice } from '@reduxjs/toolkit';

const workspaceStore = createSlice({
    initialState: {
        name: 'Workspace Name',
    },

    name: 'workspace',

    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
    },
});

const { setName } = workspaceStore.actions;

export {
    setName,
    workspaceStore,
};

export default workspaceStore.reducer;
