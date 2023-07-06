import * as React from 'react';
import articleReducer from './ArticleStore/articleReducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addArticle, editArticle, removeArticle } from './ArticleStore/actionCreators';
import { AddArticle } from './ArticleComponents/AddArticle';
import { Article } from './ArticleComponents/Article';
import { ArticleState, IArticle } from './ArticleType';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import appReducer from './AppStore/appReducer';

/* ----------------------------- NextUI Imports ----------------------------- */
import { Text } from "@nextui-org/react";
import { Spacer } from '@nextui-org/react';
import { AppState, IAppState } from './AppType';

const rootReducer = combineReducers({
  article: articleReducer,
  // mainApp: appReducer,
  // other reducers...
});

// export const articleAppStore = createStore(rootReducer, applyMiddleware(thunk))
export const articleAppStoreWithToolkit = configureStore({reducer: rootReducer})

export const ArticleApp: React.FC = () => {
    const articles: readonly IArticle[] = useSelector(
      (state: ArticleState) => state.articles,
      shallowEqual
    )
  
    // const appState: IAppState = useSelector(
    //   (state: AppState) => state.state,
    //   shallowEqual
    // )

    const dispatch: React.Dispatch<any> = useDispatch()
  
    const saveArticle = React.useCallback(
      (article: IArticle) => dispatch(addArticle(article)),
      [dispatch]
    )
  
    return (
      <main className="p-3">
        {/* {
          appState.loadState.status === 'loading' ?
          <Text>Loading</Text> : null
        } */}
        <Text h1
        weight="bold">Articles 🌟</Text>
        <AddArticle saveArticle={saveArticle} />
        <Spacer y={1}/>
        <div className='flex flex-col gap-2'>
        {articles.map((article: IArticle) => (
          <Article
            key={article.id}
            article={article}
            removeArticle={removeArticle}
            editArticle={editArticle}
          />
        ))}
        </div>
      </main>
    )
  }
