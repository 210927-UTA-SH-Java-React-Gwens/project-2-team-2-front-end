import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import {Header} from '../HeaderComponent/HeaderComponent';
import {searchListings} from "../../Actions/ListingActions";
import {ListingPreview} from '../ListingComponents/ListingPreview';
import {BsFillBookmarkFill} from 'react-icons/bs';
import {BsFillCartFill} from 'react-icons/bs';
import {BsFillChatDotsFill} from 'react-icons/bs';

export const Search: React.FC<any> = (history:any) => {

    const appState = useSelector<any, any>((state) => state);
    const dispatch = useDispatch();

    let [listings, setListings] = useState([]);

    useEffect(() => {
        console.log(appState);
        loadListings();
        setListings(appState.listing);
    }, [appState.listing.length]);

    const loadListings = async () => {
        /*await dispatch(
            searchListings()
        );*/
    }

    const toBookmarks = () => {
        history.history.push('/bookmarks');
    }

    const toCart = () => {
        history.history.push('/cart');
    }

    const toMessages = () => {
        history.history.push('/messages');
    }

    const filterResults = () => {
        history.history.push('/search');
    }

    return (
        <div>
            <Form>
                <Row className="align-items-left">
                    <Col md={4}>
                        <Form.Control className="mb-3" id="search-bar" type="search" name="search" placeholder="Search by keyword..."/>
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" onClick={filterResults}>Search</Button>
                    </Col>
                    <Col md={1}>

                    </Col>
                    <Col xs="auto">
                        <Button variant="outline-dark rounded-circle" onClick={toBookmarks}><BsFillBookmarkFill/></Button>
                    </Col>
                    <Col xs="auto">
                        <Button variant="outline-dark rounded-circle" onClick={toCart}><BsFillCartFill/></Button>
                    </Col>
                    <Col xs="auto">
                        <Button variant="outline-dark rounded-circle" onClick={toMessages}><BsFillChatDotsFill/></Button>
                    </Col>

                </Row>
            </Form>            
            <Container fluid>
                <div className="listings-container">
                    <h3>Filtered Results:</h3>
                    {appState.listing.map((listing:any) => {
                        return(
                            <ListingPreview {...listing} key={listing.id} />
                        );
                    })}
                </div>
            </Container>
        </div>
      );

}
