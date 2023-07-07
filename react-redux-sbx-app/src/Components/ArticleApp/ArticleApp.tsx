import * as React from "react";

/* ------------------------------ Redux Imports ----------------------------- */
import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { shallowEqual, useSelector } from "react-redux";

/* ----------------------------- NextUI Imports ----------------------------- */
import { Text } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";

/* ------------------------ Article Imports ------------------------ */
import { addArticle, deleteArticle, editArticle } from "./ArticleStore/ArticleReducer";
import articleReducer from "./ArticleStore/ArticleReducer";

/* --------------------------- Middleware Imports --------------------------- */
import { loggingMiddleware } from "./CustomMiddlewares/loggingMiddleware";

import { AddArticle } from "./ArticleComponents/AddArticle";
import { Article } from "./ArticleComponents/Article";
import { IArticle } from "./ArticleType";

/* -------------------------------------------------------------------------- */
/*                                    Body                                    */
/* -------------------------------------------------------------------------- */
const middleware = [...getDefaultMiddleware(), loggingMiddleware];

const rootReducer = combineReducers({
  articles: articleReducer,
  // mainApp: appReducer,
  // other reducers...
});

export const articleAppStore = configureStore({
  reducer: rootReducer,
  middleware: middleware
});

export const ArticleApp: React.FC = () => {

  const articles: readonly IArticle[] = useSelector(
    (state: any) => state.articles,
    shallowEqual
  );

  return (
    <main className="p-3">
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
  );
};
