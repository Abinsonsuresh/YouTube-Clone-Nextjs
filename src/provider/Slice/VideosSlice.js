import { createSlice } from "@reduxjs/toolkit";

export const VideosSlice = createSlice({
    name: "Videos",
    initialState:{
        data: null
    },
    reducers:{
        getvideosData: (state, action) =>{
            state.data = action.payload;
        }
    }
})

export const {getvideosData} = VideosSlice.actions;

export default VideosSlice.reducer;