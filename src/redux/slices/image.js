import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    items: []
}

const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        addImageItem: (state, action) => {
            state.items.push(action.payload)
        },
        replaceState: (state, action) => {
            state.items = action.payload
        }
    }
});

export const selectItems = ({image}) => image;

export const imageReducer = imageSlice.reducer;
export const {addImageItem, replaceState} = imageSlice.actions;