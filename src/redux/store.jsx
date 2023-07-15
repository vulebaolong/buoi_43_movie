import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import spinnerSlice from "./slices/spinnerSlice";

export const store = configureStore({
    reducer: { userSlice, spinnerSlice },
});
