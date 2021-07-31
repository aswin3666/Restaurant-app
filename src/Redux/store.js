import { configureStore } from "@reduxjs/toolkit";
import RestaurentidSlice from "./RestaurentidSlice";
export default configureStore({
    reducer:{
        id:RestaurentidSlice
    }
})