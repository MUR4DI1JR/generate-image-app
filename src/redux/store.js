import {configureStore} from "@reduxjs/toolkit";
import {imageReducer} from "./slices/image";

export const store = configureStore({
    reducer: {
        image: imageReducer,
    }
})