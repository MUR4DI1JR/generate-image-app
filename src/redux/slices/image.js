import {createSlice} from "@reduxjs/toolkit";

const initialState = {
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
        },
        searchItems: (state, action) => {
            const items = state.items.filter(item => {
                return item.name.toLowerCase().includes(action.payload.toLowerCase())
            })
            state.items = items
        }
    }
});

export const selectItems = ({image}) => image;

export const imageReducer = imageSlice.reducer;
export const {addImageItem, replaceState, searchItems} = imageSlice.actions;