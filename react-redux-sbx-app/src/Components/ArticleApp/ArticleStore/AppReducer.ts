import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export type ViewModes = "light" | "dark";
export type LoadStatuses = "idle" | "loading" ;
export type AppState = {
    id: number,
    viewMode: ViewModes,
    loadStatus: LoadStatuses,
    simulateHttp: boolean,
}

const initialState: AppState = {
    id: 1,
    viewMode: "light",
    loadStatus: "idle",
    simulateHttp: false,
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
        setSimulateHttpRequest(state, action: PayloadAction<boolean>) {
            state.simulateHttp = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(disableSimulateHttpRequestWithDelay.pending, (state, action)=>{
            state.loadStatus = "loading"
        })
        builder.addCase(disableSimulateHttpRequestWithDelay.fulfilled, (state, action)=>{
            state.loadStatus = "idle"
            state.simulateHttp = false
        })
        builder.addCase(disableSimulateHttpRequestWithDelay.rejected, (state, action)=>{
            alert("Resetting simulate Http Failed!")
        })
    }
})

export const disableSimulateHttpRequestWithDelay = createAsyncThunk('app/disableSimulateHttpRequestWithDelay', async () => {
    console.log("Disabling again..")
    return new Promise<boolean>((resolve) => setTimeout(() => resolve(false), 1500))
})
  

export const {setViewMode, setLoadStatus, setSimulateHttpRequest} = appSlice.actions
export default appSlice.reducer;