import React from 'react';
import {Container, Form, Row, Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import '../UserComponent.css';

export const PasswordChangeComponent:React.FC<any> = () => {

    return(
        <div>
        <Container><Row>
        <Col xs={1}></Col>
        <Form id="outer-border">
        <Container >
            <Row >
            <Col>
            <Form.Group className="mb-3" >
            <Form.Label>Old Password</Form.Label>
            <Form.Control type="password" placeholder="Old Password" />
            <Form.Text className="text-muted">
            </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Confirm old Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
            <Form.Text className="text-muted">
            </Form.Text>
            </Form.Group>
            </Col>
            <Col xs={1}></Col>
            <Col>
            <Form.Group className="mb-3" >
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="New Password" />
            <Form.Text className="text-muted">
            </Form.Text>
            </Form.Group>
            <Button variant="primary" type="button">
            Change Password
            </Button>
            </Col>
            
            </Row>
        </Container>
        </Form>
        <Col xs={1}></Col>
        </Row>
        </Container>
    </div>
    )

}