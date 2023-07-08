import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ViewModes = "light" | "dark";
export type LoadStatuses = "idle" | "loading" ;
export type AppState = {
    id: number,
    viewMode: ViewModes,
    loadStatus: LoadStatuses
}

const initialState: AppState = {
    id: 1,
    viewMode: "light",
    loadStatus: "idle"
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
        }
    }
})

export const {setViewMode, setLoadStatus} = appSlice.actions
export default appSlice.reducer;