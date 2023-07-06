import { articleAddSuccess, setLoading } from "../AppStore/appActionCreators";
import { ArticleAction, DispatchType, IArticle } from "../ArticleType";
import * as actionTypes from "./actionTypes";

export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.ADD_ARTICLE,
    article,
  };

  return simulateHttpRequest(action, 500);
}

export function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article,
  };
  return simulateHttpRequest(action, 1000);
}

export function editArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.EDIT_ARTICLE,
    article
  };
  return simulateHttpRequest(action, 0);
}

export function simulateHttpRequest(action: ArticleAction, delay: number = 500) {
  setLoading();
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
      articleAddSuccess();
    }, delay);
  };
}
