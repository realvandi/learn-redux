import * as React from "react";

/* ------------------------------ Redux Imports ----------------------------- */
import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

/* ----------------------------- NextUI Imports ----------------------------- */
import { NextUIProvider, Switch, Text, createTheme } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";

/* ------------------------------ Icon Imports ------------------------------ */
import {FaSun, FaRegMoon} from 'react-icons/fa'

/* ------------------------ Article Imports ------------------------ */
import { addArticle, deleteArticle, editArticle } from "./ArticleStore/ArticleReducer";
import articleReducer from "./ArticleStore/ArticleReducer";

/* --------------------------- Middleware Imports --------------------------- */
import { loggingMiddleware } from "./CustomMiddlewares/loggingMiddleware";

import { AddArticle } from "./ArticleComponents/AddArticle";
import { Article } from "./ArticleComponents/Article";
import { IArticle } from "./ArticleType";
import AppReducer, { AppState, setViewMode } from "./ArticleStore/AppReducer";

/* -------------------------------------------------------------------------- */
/*                            Dark and Light Themes                           */
/* -------------------------------------------------------------------------- */
const lightTheme = createTheme({
  type: 'light',
  theme: {
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
  }
})

/* -------------------------------------------------------------------------- */
/*                                    Body                                    */
/* -------------------------------------------------------------------------- */
const middleware = [...getDefaultMiddleware(), loggingMiddleware];

const rootReducer = combineReducers({
  articles: articleReducer,
  mainApp: AppReducer,
  // other reducers...
});

export const articleAppStore = configureStore({
  reducer: rootReducer,
  middleware: middleware
});

export const ArticleApp: React.FC = () => {

  const dispatch = useDispatch();

  const articles: readonly IArticle[] = useSelector(
    (state: any) => state.articles,
    shallowEqual
  );

  const appState: AppState = useSelector(
    (state: any) => state.mainApp,
    shallowEqual
  )

  return (
    <NextUIProvider theme={appState.viewMode==="light" ? lightTheme : appState.viewMode==="dark" ? darkTheme : lightTheme}>
    <main className="p-3">
      <Switch
          checked={true}
          size="xl"
          iconOn={<FaSun />}
          iconOff={<FaRegMoon />}
          onChange={(e)=>{dispatch(setViewMode(e.target.checked)); console.log(e.target.checked)}}
        />
      <Text h1 weight="bold">
        Articles 🌟
      </Text>
      <AddArticle saveArticle={addArticle} />
      <Spacer y={1} />
      <div className="flex flex-col gap-2">
        {articles.map((article: IArticle) => (
          <Article
            key={article.id}
            article={article}
            removeArticle={deleteArticle}
          />
        ))}
      </div>
    </main>
    </NextUIProvider>
  );
};
