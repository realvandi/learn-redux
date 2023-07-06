import { AppAction, AppState, AppLoadState } from "../AppType";
import * as actionTypes from "./appActionTypes";

const initialState: AppState = {
  state: {
    loadState: {
      status: "idle",
    },
  },
};

const appReducer = (
  state: AppState = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        state: {
          ...state,
          loadState: {
            status: "loading",
          },
        },
      };
    case actionTypes.ARTICLE_ADD_SUCCESS:
      return {
        state: {
          ...state,
          loadState: {
            status: "idle",
          },
        },
      };
  }
  return state;
};

export default appReducer;
