import React, { useEffect, useState } from "react";
import { formatAsMoney, getListingImages } from "./listing";
import { ImageViewer } from "../ImageViewerComponent/ImageViewerComponent";
import { Img, Listing } from "../../Store/types";
import "./ListingView.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export const ListingView: React.FC<any> = (
  props: { listing: Listing } & any
) => {
  const appState = useSelector<any, any>((state) => state);
  const [images, setImages] = useState<Img[]>([props.listing?.image]);

  useEffect(() => {
    let iImages: Img[] = [props.listing.image];
    (async () => {
      for await (let image of getListingImages(props.listing.id, 0)) {
        iImages.push(image);
        setImages(iImages);
      }
    })();
  }, []);

  return props.listing ? (
    <Container>
      <Row>
        <Col>
          <ImageViewer images={images} />
        </Col>
        <Col>
          <h1 className="lv-title">{props.listing.title}</h1>
          <hr />
          <p>
            Category: <span style={{border: '1px solid #dedede', borderRadius: '.5em', padding: '.25em'}}><b>{props.listing.category}</b></span>
          </p>
          <p>
            Price: {"$" + formatAsMoney(Number(props.listing.price).toString())}
          </p>
          <div
            className="lv-desc"
            dangerouslySetInnerHTML={{ __html: props.listing.content }}
            style={{ textAlign: "left" }}
          ></div>
          <p>
            Posted by{" "}
            {props.listing.poster.username === appState.user.username
              ? "you"
              : props.listing.poster.username}{" "}
            on {new Date(props.listing.posted).toLocaleString()}
          </p>
          {props.listing.purchaser && (
            <p
              style={{
                display: props.listing.purchaser ? "block" : "none",
                color: "red",
              }}
            >
              Purchased by{" "}
              {props.listing.purchaser.username
                ? props.listing.purchaser.username
                : ""}
            </p>
          )}
          <Button variant="outline-success" size="sm">
            Message poster about this listing
          </Button>
        </Col>
      </Row>
    </Container>
  ) : (
    <div></div>
  );
};
