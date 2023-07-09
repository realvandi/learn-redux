import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    }
})

export const {setViewMode, setLoadStatus, setSimulateHttpRequest} = appSlice.actions
export default appSlice.reducer;