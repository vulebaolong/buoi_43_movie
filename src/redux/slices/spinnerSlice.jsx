import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
};

const spinnerSlice = createSlice({
    name: "spinnerSlice",
    initialState,
    reducers: {
        showLoading: (state, { payload }) => {
            state.isLoading = true;
        },
        hideLoading: (state, { payload }) => {
            state.isLoading = false;
        },
    },
});

export const {showLoading, hideLoading} = spinnerSlice.actions;

export default spinnerSlice.reducer;
