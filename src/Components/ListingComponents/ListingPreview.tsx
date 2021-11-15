import React, { useEffect, useState } from "react";
import { Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Img, Listing } from "../../Store/types";
import { formatAsMoney, getPreviewImage } from "./listing";
import "./ListingPreview.css";

/*
id: number,
    price: number,
    title:string,
    content : string,
    author_id: number,
    purchaser_id?: number,
    category:string
*/

export const ListingPreview: React.FC<any> = (
  props: { listing: Listing } & any
) => {
  const appState = useSelector<any, any>((state) => state);
  const [mainImage, setMainImage] = useState<Img | null>(null);

  useEffect(() => {
    getPreviewImage(props.listing.id).then((img: Img) => setMainImage(img));
  }, []);

  return (
    <Col xs={3}>
      <Card
        className="listing-card"
        onClick={props.onClick ? props.onClick : () => {}}
      >
        <Card.Img
          variant="top"
          style={{ padding: ".5em" }}
          src={mainImage?.src}
        />
        <Card.Body>
          <Card.Title>{props.listing.title}</Card.Title>
          <Card.Subtitle>
            {"$" + formatAsMoney(Number(props.listing.price).toString())}
          </Card.Subtitle>
          <Card.Text>
            In category <b>{props.listing.category}</b>
          </Card.Text>
          <Card.Footer>
            <small className="text-muted">
              Posted by{" "}
              {props.listing.poster.username === appState.user.username
                ? "you"
                : props.listing.poster.username}
              <br /> on {new Date(props.listing.posted).toLocaleString()}
            </small>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};