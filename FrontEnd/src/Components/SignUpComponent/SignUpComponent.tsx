import React, {useState} from 'react';
import { Title } from '../TitleComponent/TitleComponent';
import {Container, Row,Col,Card,Form, Button} from 'react-bootstrap';
import './SignUpComponent.css'
import { PageTitleComponent } from '../PageTitleComponent/PageTitleComponent';

export const SignUpComponent:React.FC<any> = () => {


    return (
    <div>
        <PageTitleComponent name="Gwen's List" />
            <Container>
                <Row></Row>
                <Row >
                    <Col xs={3}></Col>
                    <Col id="centered-login" xs={6} >
                    <Card id="sign-up-card">
                        <Card.Body>
                            <Card.Title>Sign Up</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Please fill out the requested information</Card.Subtitle><br/>
                                <Form.Group className="mb-3" >
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email@email.com" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                                <Form.Text className="text-muted"><br/>
                                <Button variant="primary" type="button">
                                Sign up
                                </Button>
                                </Form.Text>
                                </Form.Group>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3} ></Col>
                </Row>
                
            </Container>
        
    </div>)
} 