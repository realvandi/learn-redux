import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { IArticle } from "../ArticleType";

/* ----------------------------- NextUI Imports ----------------------------- */
import { Card, Text, Button, Textarea } from "@nextui-org/react";
import { ChangeEvent, useState } from "react";

type Props = {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
  editArticle: (article: IArticle) => void;
};

export const Article: React.FC<Props> = ({
  article,
  removeArticle,
  editArticle,
}) => {
  const [editing, setEditing] = useState(false);
  const [editedArticle, setEditedArticle] = useState<IArticle>(article);

  const dispatch: Dispatch<any> = useDispatch();

  const handleArticleChange =
    (type: string, e: React.ChangeEvent<HTMLTextAreaElement>) => {
      switch (type) {
        case "title":
          console.log(`article change: ${e.currentTarget.value}`)
          setEditedArticle({
            ...editedArticle,
            title: e.currentTarget.value,
          });
          break;
        case "body":
          console.log(`article change: ${e.currentTarget.value}`)
          setEditedArticle({
            ...editedArticle,
            body: e.currentTarget.value,
          });
          break;
      }
    };

  return (
    <div className="">
      <Card isHoverable>
        <Card.Header>
          {editing ? (
            <Textarea initialValue={editedArticle.title} onChange={(e) => handleArticleChange("title", e as React.ChangeEvent<HTMLTextAreaElement>)}/>
          ) : (
            <Text h2>{editedArticle.title}</Text>
          )}
          <Text>{editedArticle.id}</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Text>
            {editing ? (
              <Textarea
                initialValue={editedArticle.body}
                onChange={(e) => handleArticleChange("body", e as React.ChangeEvent<HTMLTextAreaElement>)}
              />
            ) : (
              <Text>{editedArticle.body}</Text>
            )}
          </Text>
        </Card.Body>
        <div className="m-3 flex flex-row gap-3">
          <Button onClick={() => dispatch(removeArticle(editedArticle))} color={"error"}>
            Delete
          </Button>
          {editing ? (
            <Button onClick={() => {setEditing(false); dispatch(editArticle(editedArticle));}}>Save</Button>
          ) : (
            <Button onClick={() => setEditing(true)}>Edit</Button>
          )}
        </div>
      </Card>
    </div>
  );
};
