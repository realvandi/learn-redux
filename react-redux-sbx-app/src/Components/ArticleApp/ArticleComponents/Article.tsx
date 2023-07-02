import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { IArticle } from "../ArticleType";

/* ----------------------------- NextUI Imports ----------------------------- */
import { Card, Text, Button } from "@nextui-org/react";

type Props = {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
};

export const Article: React.FC<Props> = ({ article, removeArticle }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteArticle = React.useCallback(
    (article: IArticle) => dispatch(removeArticle(article)),
    [dispatch, removeArticle]
  );

  return (
    <div className="">
    <Card isHoverable>
      <Card.Header>
        <Text h2>{article.title}</Text>
      </Card.Header>
      <Card.Divider/>
      <Card.Body>
        <Text>{article.body}</Text>
      </Card.Body>
      <div className="m-3">
        <Button onClick={() => deleteArticle(article)} color={"error"}>Delete</Button>
      </div>
    </Card>
    </div>
  );
};
