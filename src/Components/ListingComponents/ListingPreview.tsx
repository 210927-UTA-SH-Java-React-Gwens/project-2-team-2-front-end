import React from 'react';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import { formatAsMoney } from "./listing";
import './ListingPreview.css'



/*
id: number,
    price: number,
    title:string,
    content : string,
    author_id: number,
    purchaser_id?: number,
    category:string
*/


export const ListingPreview : React.FC<any> = (listing:any) => {
    console.log(listing);
    return(
        <Container>
            <div className="listing-itemized" key={listing.id}>
                <Row className="align-items-left">
                    <Col xs={4}>
                        <img className="listing-image" src=""></img>
                    </Col>
                    <Col>
                        <h3 className="listing-title">{listing.title}</h3>
                        <h4>{'$' + formatAsMoney(Number(listing.price).toString())}</h4>
                        <div className="lv-desc" dangerouslySetInnerHTML={{__html: listing.content}}></div>
                        <h4>Posted by {listing.poster} on {new Date(listing.posted).toLocaleString()}</h4>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}