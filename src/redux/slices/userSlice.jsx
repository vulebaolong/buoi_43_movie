import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setLogin: (state, { payload }) => {
            state.userInfo = payload;
        },
    },
});

export const { setLogin } = userSlice.actions;

export default userSlice.reducer;
