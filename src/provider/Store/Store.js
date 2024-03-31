import { configureStore } from "@reduxjs/toolkit";
import VideosSlice from "../Slice/VideosSlice";

export const store  = configureStore({
    reducer:{
        Videos: VideosSlice,
    }
})