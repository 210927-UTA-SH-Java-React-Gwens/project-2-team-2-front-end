import React, { useEffect, useState } from "react";
import { Container, Modal, Row, Spinner } from "react-bootstrap";
import { Listing } from "../../Store/types";
import { getListingPreviewsByURL } from "./listing";
import { ListingPreview } from "./ListingPreview";
import { ListingView } from "./ListingViewComponent";

export const ListingLoader: React.FC<any> = (props: any) => {
  const [modalView, setModalView] = useState<Listing | null>(null);
  const [listings, setListings] = useState<Listing[] | null>(null);

  useEffect(() => {
    (async () => {
      let iListings: Listing[] = []; // Intermediate listing array
      for await (let listing of getListingPreviewsByURL(props.url))
        iListings.push(listing);
      setListings(iListings);
    })();
  });

  return (
    <div>
      <Container fluid>
        <Row>
          {listings?.length ? (
            listings.map((listing: Listing) => (
              <ListingPreview
                listing={listing}
                key={listing.id}
                onClick={() => {
                  setModalView(listing);
                }}
              />
            ))
          ) : listings === null ? (
            <div style={{ margin: "auto" }}>
              <h4>Loading...</h4>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <div style={{ margin: "auto" }}>
              <h4>No listings to show here</h4>
            </div>
          )}
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
