export type AppLoadState = {
    status: 'idle' | 'loading'
}

export interface IAppState {
    loadState: AppLoadState;
}

export type AppState = {
    state: IAppState;
}

export type AppAction = {
    type: string;
    appState: AppState;
}

export type AppDispatchType = (args: AppAction) => AppAction;