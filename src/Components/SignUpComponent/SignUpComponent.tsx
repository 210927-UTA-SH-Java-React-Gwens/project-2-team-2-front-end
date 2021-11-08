import React, {useState} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import {Container, Row,Col,Card,Form, Button} from 'react-bootstrap';
import './SignUpComponent.css'
import { PageTitleComponent } from '../PageTitleComponent/PageTitleComponent';
import { createUser } from '../../Actions/UserActions';

export const SignUpComponent:React.FC<any> = () => {

    let dispatch = useDispatch();

    //used to get users input each time text field changes
    let [username,setUsername] = useState('');
    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');

    const handleChange = (e:any) =>{
        if(e.target.name === "username")
            setUsername(e.target.value);
        else if(e.target.name === "password")
            setPassword(e.target.value);
        else
            setEmail(e.target.value);

    }

    const register = async () => {
        await dispatch(
            createUser({username,email,funds:0,password}));
        
    }


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
                                <Form.Control name="username" type="text" placeholder="Username" onChange={handleChange} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Email@email.com" onChange={handleChange}/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange}/>
                                <Form.Text className="text-muted"><br/>
                                <Button onClick={register} variant="primary" type="button">
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