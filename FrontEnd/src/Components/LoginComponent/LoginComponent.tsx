import React, {useState} from 'react';
import { Title } from '../TitleComponent/TitleComponent';
import {Container, Row,Col,Card,Form, Button} from 'react-bootstrap';
import './LoginComponent.css'

export const LoginComponent:React.FC<any> = () => {


    return (
    <div>
            <Container>
                <Row></Row>
                <Row >
                    <Col xs={3}></Col>
                    <Col id="centered-login" xs={6} >
                    <Card id="login-card">
                        <Card.Body>
                            <Card.Title>Sign In</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Welcome to Gwen's List</Card.Subtitle><br/>
                                <Form.Group className="mb-3" >
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                                <Form.Text className="text-muted"><br/>
                                <Button variant="primary" type="button">
                                Sign In
                                </Button>
                                </Form.Text>
                                </Form.Group>
                            <Card.Link href="#">Sign Up</Card.Link>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3} ></Col>
                </Row>
                
            </Container>
        
    </div>)
} 