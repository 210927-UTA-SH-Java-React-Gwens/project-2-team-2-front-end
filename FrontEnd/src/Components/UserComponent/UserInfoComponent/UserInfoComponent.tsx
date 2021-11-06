import React, {useState} from 'react';
import {Container, Form, Row, Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import '../UserComponent.css';
import { Modal } from 'react-bootstrap';
import CurrencyInput from 'react-currency-input-field';

export const UserInfoComponent:React.FC<any> = () => {

    const [show, setShow] = useState(false);

    const handleClose = (e:any) => {setShow(false);  };
    const handleShow = () => {setShow(true)};


    return (
    <div>
        <Container><Row>
        <Col xs={1}></Col>
        <Form id="outer-border">
        <Container >
            <Row >
            <Col>
            <Form.Group className="mb-3" >
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" />
            <Form.Text className="text-muted">
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
            <Form.Text className="text-muted">
            </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
            Update
            </Button>
            </Col>
            <Col xs={1}></Col>
            <Col>
            <Form.Group className="mb-3" >
            <Form.Label>Funds</Form.Label>
            <Form.Control type="number" placeholder="0" disabled/>
            <Form.Text className="text-muted">
            </Form.Text>
            </Form.Group>
            <Button onClick={handleShow} variant="primary" type="button">
            Add funds
            </Button>
            </Col>
            
            </Row>
        </Container>
        </Form>
        <Col xs={1}></Col>
        </Row>
        </Container>

        {/* https://react-bootstrap.github.io/components/modal/ Modal component and open/close management */}

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How much do you want to add?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    {/* https://www.npmjs.com/package/react-currency-input-field  Currency package for managing money input */}
                <CurrencyInput
                name="funds-input"
                prefix="$"
                placeholder="Please enter an amount"
                defaultValue={20}
                decimalsLimit={2}
                />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Cancel
        </Button>
        <Button variant="primary" onClick={handleClose}>
            Add funds
        </Button>
        </Modal.Footer>
    </Modal>
    </div>
    )
}