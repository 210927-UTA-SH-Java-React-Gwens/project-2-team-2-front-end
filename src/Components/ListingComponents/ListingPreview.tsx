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
        <Col xs={3}>
            <Card style={{margin:'10px'}}>
                <Card.Img variant="top" src=""/>
                <Card.Body>
                    <Card.Title>{listing.title}</Card.Title>
                    <Card.Subtitle>{'$' + formatAsMoney(Number(listing.price).toString())}</Card.Subtitle>
                    <Card.Text><div className="lv-desc" dangerouslySetInnerHTML={{__html: listing.content}}></div></Card.Text>
                    <Button variant="outline-primary" size="sm">View</Button>
                    <Button variant="outline-success" size="sm">Message</Button>
                    <Card.Footer>
                        <small className="text-muted">Posted by {listing.poster.username}<br/> on {new Date(listing.posted).toLocaleString()}</small>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Col>
    );
}

/*
<Card style={{width: '10rem'}}>
    <Card.Img variant="top" src=""/>
    <Card.Body>
        <Card.Title>{listing.title}</Card.Title>
        <Card.Subtitle>{'$' + formatAsMoney(Number(listing.price).toString())}</Card.Subtitle>
        <Card.Text><div className="lv-desc" dangerouslySetInnerHTML={{__html: listing.content}}></div></Card.Text>
        <Card.Text>Posted by {listing.poster.username}<br/> on {new Date(listing.posted).toLocaleString()}</Card.Text>
        <Button variant="outline-primary" size="sm">View</Button>
        <Button variant="outline-success" size="sm">Message</Button>
    </Card.Body>
</Card>
*/

/*
<Container>
            <div className="listing-itemized" key={listing.id}>
                <Row className="align-items-left">
                    <Col md={3}>
                        <img className="listing-image" src=""></img>
                    </Col>
                    <Col md={3}>
                        <h5 className="listing-title">{listing.title}</h5>
                        <p>{'$' + formatAsMoney(Number(listing.price).toString())}</p>
                        <h6>Posted by {listing.poster.username}<br/> on {new Date(listing.posted).toLocaleString()}</h6>
                    </Col>
                    <Col md={6}>
                        <div className="lv-desc" dangerouslySetInnerHTML={{__html: listing.content}}></div>
                    </Col>
                </Row>
            </div>
        </Container>
*/