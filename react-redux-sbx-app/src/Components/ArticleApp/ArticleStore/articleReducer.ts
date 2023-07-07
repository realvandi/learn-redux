import { createSlice } from "@reduxjs/toolkit";
import { IArticle } from "../ArticleType";

const initialState: IArticle[] = [
  {
    id: 1,
    title: "Hello World",
    body: "A great way to start coding",
  },
  {
    id: 2,
    title: "Goodbye World",
    body: "When you give up coding",
  },
];

const articleSlice = createSlice({
  name: "articles",
  initialState: initialState,
  reducers: {
    addArticle(state, action) {
      state.push(action.payload);
    },
    deleteArticle(state, action) {
      const articleId = action.payload.id;
      const index = state.findIndex((article) => article.id === articleId);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    editArticle(state, action) {
      const { id, title, body } = action.payload;
      const article = state.find((article) => article.id === id);
      if (article) {
        article.title = title;
        article.body = body;
      }
    },
  },
});

export const { addArticle, deleteArticle, editArticle } = articleSlice.actions;
export default articleSlice.reducer;
