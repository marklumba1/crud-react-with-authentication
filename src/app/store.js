import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./features/authSlice";
import { postApi } from "./features/postSlice";
import userSlice from "./features/userSlice";
export const store = configureStore({
    reducer: {
        userSlice,
        [authApi.reducerPath] : authApi.reducer,
        [postApi.reducerPath] : postApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(postApi.middleware)
})