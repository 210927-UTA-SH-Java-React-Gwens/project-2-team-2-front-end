import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import {Header} from '../HeaderComponent/HeaderComponent';
import {searchListings} from "../../Actions/ListingActions";
import {ListingView} from '../ListingComponents/ListingViewComponent/ListingViewComponent';

export const Home: React.FC<any> = () => {

    const appState = useSelector<any, any>((state) => state);
    const dispatch = useDispatch();

    const history = useHistory();

    let [listings, setListings] = useState([]);

    useEffect(() => {
        if(appState.user.id <= 0){
            history.push('/');
        }
        console.log(appState);
        loadListings();
        setListings(appState.posts);
    }, [appState.posts.length]);

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
                        <Form.Control className="mb-3" Id="search-bar" type="search" name="search" placeholder="Search by keyword..." onChange={handleSearch}/>
                    </Col>
                    <Col xs="auto">
                        <Button type="search">Search</Button>
                    </Col>
                </Row>
            </Form>            
            <Container fluid>
                <div className="listings-container">
                    <h3>Filtered Results:</h3>
                    {listings ? listings.map((listing:any) => {
                        return(
                            <ListingView {...listing} key={listing.id} />
                        );
                    }) : {listing.title }

                </div>
            </Container>
        </div>
      );


