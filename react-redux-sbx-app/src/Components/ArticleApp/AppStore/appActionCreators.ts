import { AppAction, AppDispatchType } from "../AppType";
import * as actionTypes from "./appActionTypes";

export function setLoading() {
    const action: AppAction = {
        type: actionTypes.SET_LOADING,
        appState: {
            state:{
                loadState: {
                    status: "loading"
                }
            }
        }
    }
    return (dispatch: AppDispatchType) => {
        dispatch(action);
    }
}

export function articleAddSuccess() {
    const action: AppAction = {
        type: actionTypes.ARTICLE_ADD_SUCCESS,
        appState: {
            state:{
                loadState: {
                    status: "idle"
                }
            }
        }
    }
    return (dispatch: AppDispatchType) => {
        dispatch(action);
    }
}