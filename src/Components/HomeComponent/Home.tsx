import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container,Row,Col,Card,Form,Button,Modal} from 'react-bootstrap';
import {ListingPreview} from '../ListingComponents/ListingPreview';
import {BsFillBookmarkFill} from 'react-icons/bs';
import {BsFillCartFill} from 'react-icons/bs';
import {BsFillChatDotsFill} from 'react-icons/bs';
import { getRecentListings, searchListings } from '../ListingComponents/listing';
import { Listing } from '../../Store/types';
import { defaultListing } from '../../Store/defaults';
import { ListingView } from '../ListingComponents/ListingViewComponent';
import './Home.css';



export const Home: React.FC<any> = (history:any) => {

    const [listings, setListings] = useState<Listing[]>([]);
    const [search, setSearch] = useState("");
    const [modalView, setModalView] = useState<Listing | null>(null);

    const toBookmarks = () => {
        history.history.push('/bookmarks');
    }

    const toCart = () => {
        history.history.push('/cart');
    }

    const toMessages = () => {
        history.history.push('/messages');
    }

    const filterResults = (keyword:string) => {
        searchListings(keyword)
        .then(list => setListings(list));
    }

    useEffect(() => { getRecentListings().then(list => setListings(list)); }, []);

    return (
        <div>
            <Form>
                <Row className="align-items-left">
                    <Col md={4}>
                        <Form.Control className="mb-3" id="search-bar" type="search" name="search" placeholder="Search by keyword..." defaultValue="" onChange={(e) => setSearch(e.target.value)}/>
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" onClick={() => filterResults(search)}>Search</Button>
                    </Col>
                    <Col md={1}>

                    </Col>
                    <Col xs="auto">
                        <Button variant="outline-dark rounded-circle" title="Your bookmarks" onClick={toBookmarks}><BsFillBookmarkFill/></Button>
                    </Col>
                    <Col xs="auto">
                        <Button variant="outline-dark rounded-circle" title="Your cart" onClick={toCart}><BsFillCartFill/></Button>
                    </Col>
                    <Col xs="auto">
                        <Button variant="outline-dark rounded-circle" title="Your messages" onClick={toMessages}><BsFillChatDotsFill/></Button>
                    </Col>

                </Row>
            </Form>
            <div> 
                <br/>          
                <h3>Latest Listings</h3>
                <br/>
            </div>
            <Container fluid>
                <Row>
                    {(listings !== []) ? listings.map((listing) => {
                        return(
                            <ListingPreview listing={listing}  key={listing.id} onClick={() => { setModalView(listing) }} />
                        );
                    }) : <h3>loading...</h3>}
                </Row>    
            </Container>
            <div style={{color: "red"}}>
                <Modal dialogClassName="modal-70w" className="home-modal" show={modalView !== null} onHide={() => setModalView(null)}>
                    <Modal.Body>
                        <ListingView listing={modalView} />
                    </Modal.Body>
                </Modal>
            </div>
        </div>
      );

}