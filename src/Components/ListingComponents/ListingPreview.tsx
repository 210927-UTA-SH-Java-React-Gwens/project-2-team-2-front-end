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

export const ListingPreview : React.FC<any> = (props) => {
    return(
        <Container>
            <div className="listing-itemized" key={props.id}>
                <Row className="align-items-left">
                    <Col xs={4}>
                        <img className="listing-image" src=""></img>
                    </Col>
                    <Col>
                        <h3 className="listing-title">{props.title}</h3>
                        <h4>{'$' + formatAsMoney(props.price)}</h4>
                        <p className="lv-desc">{props.desc}</p>
                        <h4>Posted by {props.poster} on {props.posted}</h4>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}