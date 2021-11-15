import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";


import {
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";

import {
  BsFillBookmarkFill,
  BsFillCartFill,
  BsFillChatDotsFill,
} from "react-icons/bs";

import {
  getRecentListings,
  searchListings,
} from "../ListingComponents/listing";

import { Listing } from "../../Store/types";
import { ListingLoader } from "../ListingComponents/ListingLoaderComponent";

export const Home: React.FC<any> = () => {
  const [search, setSearch] = useState("");
	const [url, setUrl] = useState("/recent")

  const history = useHistory();

  const toBookmarks = () => {
    history.push("/bookmarks");
  };

  const toCart = () => {
    history.push("/cart");
  };

  const toMessages = () => {
    history.push("/messages");
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
		if (search === '')
			setUrl('/recent');
		else setUrl(`/search?query=${search}`);
  };



  return (
    <div>
      <Form onSubmit={submitForm}>
        <Row className="align-items-left">
          <Col md={4}>
            <Form.Control
              className="mb-3"
              id="search-bar"
              type="search"
              name="search"
              placeholder="Search by keyword..."
              defaultValue=""
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>
          <Col md={1}></Col>
          <Col xs="auto">
            <Button
              variant="outline-dark rounded-circle"
              title="Your bookmarks"
              onClick={toBookmarks}
            >
              <BsFillBookmarkFill />
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              variant="outline-dark rounded-circle"
              title="Your cart"
              onClick={toCart}
            >
              <BsFillCartFill />
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              variant="outline-dark rounded-circle"
              title="Your messages"
              onClick={toMessages}
            >
              <BsFillChatDotsFill />
            </Button>
          </Col>
        </Row>
      </Form>
      <div>
        <br />
        <h3>Latest Listings</h3>
        <br />
      </div>
      <ListingLoader url={url} />
    </div>
  );
};
