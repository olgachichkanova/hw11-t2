import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./slices/images";

const store = configureStore({
    reducer: {
        images: imageReducer
    }
})

export default store;