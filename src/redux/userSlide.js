import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : 'user',
    initialState: {},
    reducers: {
        setUserAction: (state, action) => {
            state = action.payload;
        }
    }
})