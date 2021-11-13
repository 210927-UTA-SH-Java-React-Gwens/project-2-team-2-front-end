import React, {useEffect, useState} from 'react';
import {Form, Container, Row, Col, Button} from 'react-bootstrap';
import { useDispatch , useSelector} from 'react-redux';
import { useHistory } from 'react-router';
import { verifyUserEmail } from '../../Actions/UserActions';
import { PageTitleComponent } from '../PageTitleComponent/PageTitleComponent';

export const VerifyAccountComponent: React.FC<any> = () => {
    let [code, setCode] = useState('');
    const appState = useSelector<any, any>((state) => state);
    let dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (e:any) => {
        setCode(e.target.value);
    }

    const sendBackVerificationPage = () => {
        history.push('/');
    }
    
    useEffect(() => {
      console.log(appState);
      if(appState.user.id !==-2)
        sendBackVerificationPage();
    }, [appState]);

    const verify = async (e:any) => {
        await dispatch(verifyUserEmail({ username:appState.user.username,code}));
    }
    

    return(
        <div>
            <PageTitleComponent name="Verification page" history={history}/>
            <Container>
                <Row></Row>
                <Row >
                    <Col xs={1}></Col>
                    <Col  xs={10} >
                                <Form.Group className="mb-3" >
                                <Form.Label>Code</Form.Label>
                                <Form.Control name="code" type="number" placeholder="12345" onChange={handleChange} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                                </Form.Group>
                    </Col>
                    <Col xs={1} ></Col>
                    <Row> 
                        <Col xs={5} ></Col>
                        <Col>
                            <Button onClick={verify} variant="primary" type="button">
                                    Sign In
                            </Button>  
                        </Col> 
                        <Col xs={4} ></Col>
                    </Row>
                </Row>
                
            </Container>
        </div>
    )
}