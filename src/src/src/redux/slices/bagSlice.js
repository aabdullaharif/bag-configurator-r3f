import { createSlice } from "@reduxjs/toolkit";
import { bodyColors, straps, logoColors, stictchesColors } from "../../constants/index"

const initialState = {
    bagView: "closed",
    bodyColor: bodyColors[0],
    strapColor: straps[0],
    logoColor: logoColors[0],
    stictchesColor: stictchesColors[0]
}

const bagSlice = createSlice({
    name: "bagSlice",
    initialState,
    reducers: {
        setBagView: (state, action)=>{
            state.bagView = action.payload;
        },
        setBodyColor: (state, action)=>{
            state.bodyColor = action.payload;
        },
        setStrapColor: (state, action)=>{
            state.strapColor = action.payload;
        },
        setLogoColor: (state, action)=>{
            state.logoColor = action.payload;
        },
        setStictchesColor: (state, action)=>{
            state.stictchesColor = action.payload;
        }
    }
});

export const { setBagView, setBodyColor, setStrapColor, setLogoColor, setStictchesColor } = bagSlice.actions;
export default bagSlice.reducer; 