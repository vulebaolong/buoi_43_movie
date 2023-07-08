import { createSlice } from "@reduxjs/toolkit";
import { lcStorage } from "../../helpers/localStorage";
import { USER_LOGIN } from "../../contants/contants";

const initialState = {
    userInfo: lcStorage.get(USER_LOGIN),
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
