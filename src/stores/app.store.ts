import { createSlice } from '@reduxjs/toolkit';

interface IStates {
    direction: string;
    locale: string;
}

const current_locale = localStorage.getItem('locale') || 'en';

const initial_state: IStates = {
    direction: current_locale === 'fa' ? 'rtl' : 'ltr',
    locale: current_locale,
};

const appStore = createSlice({
    initialState: initial_state,

    name: 'app',

    reducers: {
        setLocale: (state, action) => {
            if (action.payload) {
                state.locale = action.payload;
                state.direction = action.payload === 'fa' ? 'rtl' : 'ltr';
            }
        },
    },
});

export const { setLocale } = appStore.actions;

export { appStore };
export default appStore.reducer;
