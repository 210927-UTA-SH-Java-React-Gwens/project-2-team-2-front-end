import React, { useEffect, useState } from "react";
import { formatAsMoney, getListingImages } from "./listing";
import { ImageViewer } from "../ImageViewerComponent/ImageViewerComponent";
import { Img, Listing } from "../../Store/types";
import "./ListingView.css";
import { Container, Row, Col } from "react-bootstrap";

export const ListingView: React.FC<any> = (
  props: { listing: Listing } & any
) => {
  const [images, setImages] = useState<Img[]>([]);

  useEffect(() => {
    (async () => {
      let imageIter = getListingImages(props.listing.id);
      let image = await imageIter.next();
      while (!image.done) {
        setImages(images.concat(image.value));
        image = await imageIter.next();
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
          <p>In category <em>{props.listing.category}</em></p>
          <p>{"$" + formatAsMoney(Number(props.listing.price).toString())}</p>
          <div
            className="lv-desc"
            dangerouslySetInnerHTML={{ __html: props.listing.content }}
            style={{ textAlign: "left" }}
          ></div>
          <p>
            Posted by {props.listing.poster.username} on {props.listing.posted}
          </p>
          {props.listing.purchaser && (
            <p style={{ display: props.listing.purchaser ? "block" : "none", color: "red" }}>
              Purchased by{" "}
              {props.listing.purchaser.username
                ? props.listing.purchaser.username
                : ""}
            </p>
          )}
        </Col>
      </Row>
    </Container>
  ) : (
    <div></div>
  );
};
