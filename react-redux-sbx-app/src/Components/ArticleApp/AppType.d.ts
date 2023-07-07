export type AppLoadState = {
    status: 'idle' | 'loading'
}

export interface IAppState {
    loadState: AppLoadState;
    id: string;
}

export type AppAction = {
    type: string;
    appState: IAppState;
}

export type AppDispatchType = (args: AppAction) => AppAction;