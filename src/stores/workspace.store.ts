import { createSlice } from '@reduxjs/toolkit';

const workspaceStore = createSlice({
    name: 'workspace',

    initialState: {
        name: 'Workspace Name',
    },

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
