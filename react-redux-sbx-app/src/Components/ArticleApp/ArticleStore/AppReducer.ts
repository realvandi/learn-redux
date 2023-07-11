import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export type ViewModes = "light" | "dark";
export type LoadStatuses = "idle" | "loading" ;
export type AppState = {
    id: number,
    viewMode: ViewModes,
    loadStatus: LoadStatuses,
    uselessMachine: boolean,
}

const initialState: AppState = {
    id: 1,
    viewMode: "light",
    loadStatus: "idle",
    uselessMachine: false,
}

const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setViewMode(state, action: PayloadAction<boolean>) {
            if(action.payload === true) {
                state.viewMode = "light"
            } else {
                state.viewMode = "dark"
            }
        },
        setLoadStatus(state, action: PayloadAction<{ loadStatus: LoadStatuses }>) {
            state.loadStatus = action.payload.loadStatus
        },
        setUselessMachine(state, action: PayloadAction<boolean>) {
            state.uselessMachine = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(uselessMachineGo.pending, (state, action)=>{
            state.loadStatus = "loading"
        })
        builder.addCase(uselessMachineGo.fulfilled, (state, action)=>{
            state.loadStatus = "idle"
            state.uselessMachine = false;
        })
        builder.addCase(uselessMachineGo.rejected, (state, action)=>{
            alert("Resetting simulate Http Failed!")
        })
    }
})

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export const uselessMachineGo = createAsyncThunk('app/uselessMachineGo', async () => {
    console.log("Starting disabling..");
    await delay(2000);
    console.log("Disabling..");
    return false;
})
  

export const {setViewMode, setLoadStatus, setUselessMachine} = appSlice.actions
export default appSlice.reducer;