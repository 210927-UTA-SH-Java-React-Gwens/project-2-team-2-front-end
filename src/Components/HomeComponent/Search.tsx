import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import {Header} from '../HeaderComponent/HeaderComponent';
import {searchListings} from "../../Actions/ListingActions";
import {ListingItem} from '../ListingComponents/ListingItem';

export const Search: React.FC<any> = () => {

    const appState = useSelector<any, any>((state) => state);
    const dispatch = useDispatch();

    let [listings, setListings] = useState([]);

    useEffect(() => {
        console.log(appState);
        loadListings();
        setListings(appState.listings);
    }, [appState.listings.length]);

    const loadListings = async () => {
        await dispatch(
            searchListings()
        );
    }

    return (
        <div className="home">
            <div className="gwen-header">
                <Header/>
            </div>
            <Form>
                <Row className="align-items-left">
                    <Col md={4}>
                        <Form.Control className="mb-3" id="search-bar" type="search" name="search" placeholder="Search by keyword..."/>
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Search</Button>
                    </Col>
                </Row>
            </Form>            
            <Container fluid>
                <div className="listings-container">
                    <h3>Filtered Results:</h3>
                    {appState.listings.map((listing:any) => {
                        return(
                            <ListingItem {...listing} key={listing.id} />
                        );
                    })}
                </div>
            </Container>
        </div>
      );

}
