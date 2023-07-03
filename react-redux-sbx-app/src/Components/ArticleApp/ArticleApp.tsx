import * as React from 'react';
import articleReducer from './ArticleStore/articleReducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addArticle, removeArticle } from './ArticleStore/actionCreators';
import { AddArticle } from './ArticleComponents/AddArticle';
import { Article } from './ArticleComponents/Article';
import { ArticleState, IArticle } from './ArticleType';
import { configureStore } from '@reduxjs/toolkit';

/* ----------------------------- NextUI Imports ----------------------------- */
import { Text } from "@nextui-org/react";
import { Spacer } from '@nextui-org/react';

export const articleAppStore = createStore(articleReducer, applyMiddleware(thunk))
export const articleAppStoreWithToolkit = configureStore({reducer: articleReducer})

export const ArticleApp: React.FC = () => {
    const articles: readonly IArticle[] = useSelector(
      (state: ArticleState) => state.articles,
      shallowEqual
    )
  
    const dispatch: React.Dispatch<any> = useDispatch()
  
    const saveArticle = React.useCallback(
      (article: IArticle) => dispatch(addArticle(article)),
      [dispatch]
    )
  
    return (
      <main className="p-3">
        <Text h1
        weight="bold">Articles 🌟</Text>
        <AddArticle saveArticle={saveArticle} />
        <Spacer y={1}/>
        <div className='w-1/2 grid grid-cols-2 gap-2'>
        {articles.map((article: IArticle) => (
          <Article
            key={article.id}
            article={article}
            removeArticle={removeArticle}
          />
        ))}
        </div>
      </main>
    )
  }
