import React, {useState, useEffect} from 'react';
import {Container, Row,Col,Form, Button} from 'react-bootstrap';
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
    }, [appState]);

    const handleChange = (e:any) =>{
        if(e.target.name === "username")
            setUsername(e.target.value);
        else
            setPassword(e.target.value);

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
                    <Col xs={1}></Col>
                    <Col  xs={10} >
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
                                </Form.Text>
                                </Form.Group>
                    </Col>
                    <Col xs={1} ></Col>
                    <Row> 
                        <Col xs={5} ></Col>
                        <Col>
                            <Button onClick={login} variant="primary" type="button">
                                    Sign In
                            </Button>  
                        </Col> 
                        <Col xs={4} ></Col>
                    </Row>
                </Row>
                
            </Container>
        
    </div>)
} 