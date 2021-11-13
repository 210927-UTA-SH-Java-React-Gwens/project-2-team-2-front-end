import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import {homeListings} from '../../Actions/ListingActions';
import {searchListings} from '../../Actions/ListingActions';
import {ListingPreview} from '../ListingComponents/ListingPreview';
import {BsFillBookmarkFill} from 'react-icons/bs';
import {BsFillCartFill} from 'react-icons/bs';
import {BsFillChatDotsFill} from 'react-icons/bs';



export const Home: React.FC<any> = (history:any) => {

    const appState = useSelector<any, any>((state) => state);
    const dispatch = useDispatch();

    //let [listing, setListings] = useState([]);

    useEffect(() => {
        console.log(appState);
        loadListings();
    }, []);

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
            <Container fluid>
                <div className="listings-container">
                    <h3>Latest Listings:</h3>
                    {appState.listing.map=(listing:any) => {
                        return(
                            <div>
                            <ListingPreview {...listing} key={listing.id} />
                            </div>
                        );
                    }}
                </div>
            </Container>
        </div>
      );

}