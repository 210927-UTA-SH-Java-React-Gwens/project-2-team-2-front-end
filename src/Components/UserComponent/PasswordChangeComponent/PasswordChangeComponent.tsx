import React, {useState} from 'react';
import {Container, Form, Row, Col} from 'react-bootstrap';
import { AnyIfEmpty, useDispatch , useSelector} from 'react-redux';
import {Button} from 'react-bootstrap';
import '../UserComponent.css';
import { updateUserPassword } from '../../../Actions/UserActions';

export const PasswordChangeComponent:React.FC<any> = () => {
    const appState = useSelector<any, any>((state) => state);
    const dispatch = useDispatch();

    let [oldPassword, setOldPassword] = useState('');
    let [oldPasswordConfirmation, setOldPasswordConfirmation] = useState('');
    let [newPassword,setNewPassword] = useState('');

    const handleChange = (e:any) => {
        if(e.target.name === 'old-password')
            setOldPassword(e.target.value);
        else if(e.target.name === 'old-password-confirmation')
            setOldPasswordConfirmation(e.target.value);
        else if(e.target.name === 'new-password')
            setNewPassword(e.target.value);

    }

    const updatePassword = async () => {
        console.log(appState.user.password);
        console.log('O:'+oldPassword+' OC: '+oldPasswordConfirmation + ' NP:' +newPassword);
        console.log(oldPasswordConfirmation!=oldPassword);
        console.log(oldPassword != appState.user.password);
        if(oldPasswordConfirmation!=oldPassword || oldPassword != appState.user.password)
            return;

        await dispatch(
            updateUserPassword({id:appState.user.id , password:newPassword })
        );
        
        setOldPassword('');
        setOldPasswordConfirmation('');
        setNewPassword('');

    }

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
            <Form.Control name='old-password' onChange={handleChange} type="password" placeholder="Old Password" value={oldPassword}/>
            <Form.Text className="text-muted">
            </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Confirm old Password</Form.Label>
            <Form.Control name='old-password-confirmation' onChange={handleChange} type="password" placeholder="Confirm Password" value={oldPasswordConfirmation} />
            <Form.Text className="text-muted">
            </Form.Text>
            </Form.Group>
            </Col>
            <Col xs={1}></Col>
            <Col>
            <Form.Group className="mb-3" >
            <Form.Label>New Password</Form.Label>
            <Form.Control name='new-password' type="password" onChange={handleChange} placeholder="New Password" value={newPassword}/>
            <Form.Text className="text-muted">
            </Form.Text>
            </Form.Group>
            <Button onClick={updatePassword} variant="primary" type="button">
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