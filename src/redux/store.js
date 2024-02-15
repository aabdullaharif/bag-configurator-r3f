import { configureStore } from "@reduxjs/toolkit"
import bagSlice from "./slices/bagSlice"


export default configureStore({
    reducer: {
        bagSlice: bagSlice,
    }
})