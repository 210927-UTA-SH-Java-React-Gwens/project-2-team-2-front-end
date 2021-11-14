import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";


import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Modal,
	Spinner,
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

import { ListingPreview } from "../ListingComponents/ListingPreview";
import { Listing } from "../../Store/types";
import { ListingView } from "../ListingComponents/ListingViewComponent";
//import "./Home.css";

export const Home: React.FC<any> = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [modalView, setModalView] = useState<Listing | null>(null);
  const [search, setSearch] = useState("");

  let history = useHistory();

  const toBookmarks = () => {
    history.push("/bookmarks");
  };

  const toCart = () => {
    history.push("/cart");
  };

  const toMessages = () => {
    history.push("/messages");
  };

  const populateHome = async (keyword?: string) => {
		let iListings:Listing[] = [];

		for await (let listing of (keyword) ? searchListings(keyword) : getRecentListings()) {
			iListings.push(listing);
		}
		
		setListings(iListings);
  };

  const filterResults = (keyword: string) => {
    populateHome(keyword);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterResults(search);
  };

  useEffect(() => {
		(async () => await populateHome())();
  }, []);

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
      <Container fluid>
        <Row>
          {listings != [] ? (
            listings.map((listing) => {
              return (
                <ListingPreview
                  listing={listing}
                  key={listing.id}
                  onClick={() => {
                    setModalView(listing);
                  }}
                />
              );
            })) : (
						<Spinner animation="border" role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner>)
					}
        </Row>
      </Container>
      <Modal
        dialogClassName="modal-90w"
        className="home-modal"
        show={modalView !== null}
        onHide={() => setModalView(null)}
        centered
				size="xl"
      >
        <Modal.Body>
          <ListingView listing={modalView} />
        </Modal.Body>
      </Modal>
    </div>
  );
};
