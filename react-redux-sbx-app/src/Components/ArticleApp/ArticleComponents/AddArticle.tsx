import * as React from "react";
import { IArticle } from "../ArticleType";

/* ----------------------------- NextJS Imports ----------------------------- */
import { Button, Textarea } from "@nextui-org/react";

type AddArticleProps = {
  saveArticle: (article: IArticle | any) => void;
};

export const AddArticle: React.FC<AddArticleProps> = ({ saveArticle }) => {
  const [article, setArticle] = React.useState<IArticle | {}>();

  const handleArticleData = (e: any) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewArticle = (e: React.FormEvent) => {
    saveArticle(article);
  };

  return (
    <div className="flex flex-col gap-3 p-3">
      <div className="flex flex-row gap-3">
        <Textarea
          labelPlaceholder="Title"
          id="title"
          onChange={handleArticleData}
          status="default"
        ></Textarea>
        <Textarea
          labelPlaceholder="Body"
          placeholder="Your body here"
          id="body"
          onChange={handleArticleData}
          status="default"
        ></Textarea>
      </div>
      <div>
      <Button
        onClick={addNewArticle}
        disabled={article === undefined ? true : false}
        size="md"
        >
        Add article
      </Button>
      </div>
    </div>
  );
};
