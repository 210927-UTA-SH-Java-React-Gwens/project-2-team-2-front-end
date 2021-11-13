import React from 'react';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import { formatAsMoney } from "./listing";



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
    return(
        <Container>
            <div className="listing-itemized" key={listing.id}>
                <Row className="align-items-left">
                    <Col xs={4}>
                        <img className="listing-image" src=""></img>
                    </Col>
                    <Col>
                        <h3 className="listing-title">{listing.title}</h3>
                        <h4>{'$' + formatAsMoney(listing.price)}</h4>
                        <p className="lv-desc">{listing.desc}</p>
                        <h4>Posted by {listing.poster} on {listing.posted}</h4>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}