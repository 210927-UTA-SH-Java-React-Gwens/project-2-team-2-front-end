import React, {useState, useEffect} from 'react';
import {Container, Row,Col,Card,Form, Button} from 'react-bootstrap';
import './LoginComponent.css'
import { useDispatch , useSelector} from 'react-redux';
import { loginUser } from '../../Actions/UserActions';


export const LoginComponent:React.FC<any> = () => {

    //Pulling in the appState
    const appState = useSelector<any, any>((state) => state);

    //Creation of action dispatcher
    let dispatch = useDispatch();

    //used to get users input each time text field changes
    let [username,setUsername] = useState('');
    let [password,setPassword] = useState('');

    //Used to define consecuences on appstate change
    useEffect(() => {
        console.log(appState);
        localStorage.setItem('user',appState.user); //We have to read this everytime a page reloads
    }, [appState]);

    const handleChange = (e:any) =>{
        if(e.target.name === "username")
            setUsername(e.target.value);
        else
            setPassword(e.target.value);

        console.log('user:'+username + ' p:' +password);
    }

    const login = async () => {
        await dispatch(
            loginUser({username,password}));
        
    }


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
                                <Form.Control name="username" type="text" placeholder="Username" onChange={handleChange} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={handleChange}/>
                                <Form.Text className="text-muted"><br/>
                                <Button onClick={login} variant="primary" type="button">
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