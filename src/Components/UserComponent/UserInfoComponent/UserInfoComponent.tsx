import React, {useEffect, useState} from 'react';
import {Container, Form, Row, Col, Alert} from 'react-bootstrap';
import { useDispatch , useSelector} from 'react-redux';
import {Button} from 'react-bootstrap';
import '../UserComponent.css';
import { Modal } from 'react-bootstrap';
import CurrencyInput from 'react-currency-input-field';
import { addFundsToUser, updateUserEmail, updateUserUsername } from '../../../Actions/UserActions';

export const UserInfoComponent:React.FC<any> = () => {
    const appState = useSelector<any, any>((state) => state);
    let dispatch = useDispatch();
    let firstEffect = 0;

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    let [username, setUsername] = useState(appState.user.username);
    let [email,setEmail] = useState(appState.user.email);
    let [funds,setFunds] = useState(appState.user.funds);
    let [addedFunds,setAddedFunds] = useState(20.00);


    const handleClose = (e:any) => {setShow(false);  };
    const handleShow = () => {setShow(true)};

    useEffect(() =>{
        if(appState.user.username == username)
                console.log('Success');
            else
                console.log('Failed');

        firstEffect = 1;
        setFunds(appState.user.funds);
    }
    , [appState]);

    const handleChange = (e:any) => {
        if(e.target.name === "username")
            setUsername(e.target.value);
        else if (e.target.name === 'email')
            setEmail(e.target.value);
        else if (e.target.name === 'funds-input')
            setAddedFunds(e.target.value);

    } 

    const update = async () => {
        if(username!=appState.user.username){
            await dispatch(
                updateUserUsername({ id:appState.user.id, username }));

        }
        if(email!=appState.user.email)
        await dispatch(
            updateUserEmail({ id:appState.user.id, email }));   
        
        
    }

    const addFunds = async () => {
        let formattedFunds: string = addedFunds+'';
        formattedFunds = formattedFunds.replace('$','');
        formattedFunds = formattedFunds.replace('.','');
        
        await dispatch(
            addFundsToUser({ id:appState.user.id, funds:+formattedFunds }));
        
        console.log(appState);
        
    }

    
    const addFundsDispatcher =  (e:any) => {
        addFunds();
        handleClose(e);
    }
    return (
    <div>
        <Container>
            <Row><Alert show={show2} variant='success'>
                default
            </Alert></Row>
            <Row>
        <Col xs={1}></Col>
        <Form id="outer-border">
        <Container >
            <Row >
            <Col>
            <Form.Group className="mb-3" >
            <Form.Label>Username</Form.Label>
            <Form.Control name='username' onChange={handleChange} type="text" placeholder="Username" defaultValue={appState.user.username} />
            <Form.Text className="text-muted">
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
            <Form.Label>Email</Form.Label>
            <Form.Control name='email' onChange={handleChange} type="email" placeholder="Email" defaultValue={appState.user.email} />
            <Form.Text className="text-muted">
            </Form.Text>
            </Form.Group>
            <Button onClick={update} variant="primary" type="button">
            Update
            </Button>
            </Col>
            <Col xs={1}></Col>
            <Col>
            <Form.Group className="mb-3" >
            <Form.Label>Funds</Form.Label>
            <Form.Control type="number" placeholder="0" value={funds/100} disabled/>
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
                decimalsLimit={2}
                onChange={handleChange}
                />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Cancel
        </Button>
        <Button  variant="primary" onClick={addFundsDispatcher}>
            Add funds
        </Button>
        </Modal.Footer>
    </Modal>

    
    </div>
    )
}