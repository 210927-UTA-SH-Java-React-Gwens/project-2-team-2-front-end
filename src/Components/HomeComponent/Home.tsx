import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import {homeListings} from '../../Actions/ListingActions';
import {ListingPreview} from '../ListingComponents/ListingPreview';
import {BsFillBookmarkFill} from 'react-icons/bs';
import {BsFillCartFill} from 'react-icons/bs';
import {HiChatAlt2} from 'react-icons/hi';
import {BsFillChatDotsFill} from 'react-icons/bs';



export const Home: React.FC<any> = () => {

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

    return (
        <div>
            <Form>
                <Row className="align-items-left">
                    <Col md={4}>
                        <Form.Control className="mb-3" id="search-bar" type="search" name="search" placeholder="Search by keyword..."/>
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Search</Button>
                    </Col>
                    <Col md={1}>

                    </Col>
                    <Col xs="auto">
                        <Button variant="outline-dark rounded-circle"><BsFillBookmarkFill/></Button>
                    </Col>
                    <Col xs="auto">
                        <Button variant="outline-dark rounded-circle"><BsFillCartFill/></Button>
                    </Col>
                    <Col xs="auto">
                        <Button variant="outline-dark rounded-circle"><BsFillChatDotsFill/></Button>
                    </Col>

                </Row>
            </Form>            
            <Container fluid>
                <div className="listings-container">
                    <h3>Latest Listings:</h3>
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