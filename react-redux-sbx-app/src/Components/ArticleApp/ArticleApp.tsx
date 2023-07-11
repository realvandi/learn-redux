import * as React from "react";
import { useEffect, useState } from "react";
import "../../App.css";

/* ------------------------------ Redux Imports ----------------------------- */
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

/* ----------------------------- NextUI Imports ----------------------------- */
import {
  Avatar,
  Loading,
  NextUIProvider,
  Popover,
  Progress,
  Spinner,
  Switch,
  Text,
  Textarea,
  createTheme,
} from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";

/* ------------------------------ Icon Imports ------------------------------ */
import { FaSun, FaRegMoon } from "react-icons/fa";

/* ------------------------ Article Imports ------------------------ */
import {
  addArticle,
  deleteArticle,
  editArticle,
} from "./ArticleStore/ArticleReducer";
import articleReducer from "./ArticleStore/ArticleReducer";

/* --------------------------- Middleware Imports --------------------------- */
import { loggingMiddleware } from "./CustomMiddlewares/loggingMiddleware";
import thunk from "redux-thunk";

import { AddArticle } from "./ArticleComponents/AddArticle";
import { Article } from "./ArticleComponents/Article";
import { IArticle } from "./ArticleType";
import AppReducer, {
  AppState,
  uselessMachineGo,
  setUselessMachine,
  setViewMode,
} from "./ArticleStore/AppReducer";

/* -------------------------------------------------------------------------- */
/*                            Dark and Light Themes                           */
/* -------------------------------------------------------------------------- */
const lightTheme = createTheme({
  type: "light",
  theme: {},
});

const darkTheme = createTheme({
  type: "dark",
  theme: {},
});

/* -------------------------------------------------------------------------- */
/*                                    Body                                    */
/* -------------------------------------------------------------------------- */
const middleware = [...getDefaultMiddleware(), loggingMiddleware, thunk];

const rootReducer = combineReducers({
  articles: articleReducer,
  mainApp: AppReducer,
  // other reducers...
});

export const articleAppStore = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

export type AppDispatch = typeof articleAppStore.dispatch;

export const ArticleApp: React.FC = () => {
  const dispatch = useDispatch<any>();

  const articles: readonly IArticle[] = useSelector(
    (state: any) => state.articles,
    shallowEqual
  );

  const appState: AppState = useSelector(
    (state: any) => state.mainApp,
    shallowEqual
  );

  const [lastLoadStatus, setLastLoadStatus] = useState(appState.loadStatus);

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;
    if (lastLoadStatus !== appState.loadStatus) {
      timeoutId = setTimeout(() => {
        setLastLoadStatus(appState.loadStatus);
        console.log("Poke");
      }, 1000);
    }
    // Cleanup function
    return () => clearTimeout(timeoutId);
  }, [appState.loadStatus]);

  return (
    <NextUIProvider
      theme={
        appState.viewMode === "light"
          ? lightTheme
          : appState.viewMode === "dark"
          ? darkTheme
          : lightTheme
      }
    >
      <main>
        <div
          className={`p-3 ${
            appState.viewMode === "light" ? "bg-neutral-50" : "bg-neutral-900"
          } shadow-lg`}
        >
          <div className="flex flex-row gap-3 items-center p-1">
            <Text>Dark Mode</Text>
            <Switch
              checked={true}
              size="xl"
              iconOn={<FaSun />}
              iconOff={<FaRegMoon />}
              onChange={(e) => {
                dispatch(setViewMode(e.target.checked));
              }}
            />
          </div>
          <div className="flex flex-row gap-3 items-center p-1">
            <Text>Useless machine</Text>
            <Switch
              checked={appState.uselessMachine}
              size="xl"
              onChange={(e) => {
                dispatch(setUselessMachine(e.target.checked));
                dispatch(uselessMachineGo());
              }}
            />
            <div className="relative">
              <Text
                h2
                className={`absolute transform transition-all -translate-y-1/2 w-64 flex flex-row ${
                  lastLoadStatus === "loading" && appState.loadStatus === "idle"
                    ? "animate-[bounce-left_1s_infinite]"
                    : ""
                }`}
              >
                {appState.loadStatus === "idle" ? "👈🤩" : "👈😠"}
                <Text h6 className={`${appState.viewMode === "light" ? "bg-gray-200" : "bg-gray-700" } p-3 rounded-2xl -translate-x-2 -translate-y-1/2 shadow-md transition-all ease-in-out duration-500 ${appState.loadStatus === "idle" ? " opacity-0 " : " opacity-100 "}`}>No touching!</Text>
              </Text>
            </div>
            <div className="absolute right-1/2 translate-x-1/2 top-4 flex flex-row">
              {appState.loadStatus === "loading" ? (
                <>
                  <Loading />
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div className="p-4">
          <Text h1 weight="bold">
            Articles 🌟
          </Text>
          <AddArticle saveArticle={addArticle} />
          <Spacer y={1} />
          <div className="grid grid-cols-2 gap-3">
            {articles.map((article: IArticle) => (
              <Article
                key={article.id}
                article={article}
                removeArticle={deleteArticle}
              />
            ))}
          </div>
        </div>
      </main>
    </NextUIProvider>
  );
};
