import * as React from "react"
import { IArticle } from "../ArticleType"

/* ----------------------------- NextJS Imports ----------------------------- */
import { Button } from '@nextui-org/react';

type AddArticleProps = {
  saveArticle: (article: IArticle | any) => void
}

export const AddArticle: React.FC<AddArticleProps> = ({ saveArticle }) => {
  const [article, setArticle] = React.useState<IArticle | {}>()

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewArticle = (e: React.FormEvent) => {
    saveArticle(article)
  }

  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleArticleData}
      />
      <Button onClick={addNewArticle} disabled={article === undefined ? true : false}>
        Add article
      </Button>
    </form>
  )
}