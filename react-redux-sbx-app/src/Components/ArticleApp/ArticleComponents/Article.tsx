import * as React from "react";
import { useDispatch } from "react-redux";
import { IArticle } from "../ArticleType";
import { deleteArticle, editArticle } from "../ArticleStore/ArticleReducer";

/* ----------------------------- NextUI Imports ----------------------------- */
import { Card, Text, Button, Textarea } from "@nextui-org/react";
import { ChangeEvent, useState } from "react";


type Props = {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
  // editArticle: (article: IArticle) => void;
};

export const Article: React.FC<Props> = ({
  article,
  removeArticle,
  // editArticle,
}) => {
  const [editing, setEditing] = useState(false);
  const [editedArticle, setEditedArticle] = useState<IArticle>(article);

  const dispatch = useDispatch();

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
        <Card.Header className="relative">
          {editing ? (
            <Textarea underlined rows={1} initialValue={editedArticle.title} style={{fontSize: '30px', fontWeight: 'bold'}} onChange={(e) => handleArticleChange("title", e as React.ChangeEvent<HTMLTextAreaElement>)}/>
          ) : (
            <Text h2>{editedArticle.title}</Text>
          )}
        </Card.Header>
        <Card.Divider />
        <Card.Body>
            {editing ? (
              <Textarea
              rows={4}
                initialValue={editedArticle.body}
                onChange={(e) => handleArticleChange("body", e as React.ChangeEvent<HTMLTextAreaElement>)}
              />
            ) : (
              <Text>{editedArticle.body}</Text>
            )}
        </Card.Body>
        <Card.Footer>
        <div className="w-full flex flex-col gap-2">
          <Button onClick={() => dispatch(deleteArticle(editedArticle))} color={"error"} size={"sm"}>
            Delete
          </Button>
          {editing ? (
            <Button onClick={() => {setEditing(false); dispatch(editArticle(editedArticle))}} size={"sm"}>Save</Button>
          ) : (
            <Button onClick={() => setEditing(true)} size={"sm"}>Edit</Button>
          )}
        </div>
        </Card.Footer>
      </Card>
    </div>
  );
};
