import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container,Row,Col,Card,Form,Button,CardGroup} from 'react-bootstrap';
import {homeListings} from '../../Actions/ListingActions';
import {searchListings} from '../../Actions/ListingActions';
import {ListingPreview} from '../ListingComponents/ListingPreview';
import {BsFillBookmarkFill} from 'react-icons/bs';
import {BsFillCartFill} from 'react-icons/bs';
import {BsFillChatDotsFill} from 'react-icons/bs';



export const Home: React.FC<any> = (history:any) => {

    const appState = useSelector<any, any>((state) => state);
    const dispatch = useDispatch();

    let [listings, setListings] = useState([]);

    /*
    useEffect(() => {
        console.log(appState);
        loadListings();
        setListings(appState.listing);
    }, [appState.listing.length]);

    const loadListings = async () => {
        await dispatch(
            searchListings()
        );
    }
    */

    useEffect(() => {
        console.log(appState);
        loadListings();
        setListings(appState.listing);
    }, [appState.listing.length]);

    const loadListings = async () => {
        await dispatch(
            homeListings()
        );
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

    const handleChange = (input:any) => {
        filterResults(input);
    }

    const filterResults = async (keyword:any) => {
        await dispatch(
            searchListings(keyword)
        );
    }

    return (
        <div>
            <Form>
                <Row className="align-items-left">
                    <Col md={4}>
                        <Form.Control className="mb-3" id="search-bar" type="search" name="search" placeholder="Search by keyword..." defaultValue="" onChange={handleChange}/>
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
            <div> 
                <br/>          
                <h3>Latest Listings</h3>
                <br/>
            </div>
            <Container fluid>
                <Row>
                    {listings ? listings.map((listing:any) => {
                        return(
                            <ListingPreview {...listing} key={listing.id} />
                        );
                    }) : <h3>loading...</h3>}
                </Row>    
            </Container>
        </div>
      );

}