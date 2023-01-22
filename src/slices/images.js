import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
    name: 'images',
    initialState: [],
    reducers: {
        addImage(state, action) {
            state.unshift(action.payload);
        }
    }
})

export const { addImage } = imageSlice.actions;
export default imageSlice.reducer;