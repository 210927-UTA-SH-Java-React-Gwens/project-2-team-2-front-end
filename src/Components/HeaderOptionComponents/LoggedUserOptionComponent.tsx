import React, {useState, useEffect} from "react";
import { createBrowserHistory } from 'history';
import './HeaderOptionComponents.css';
import { Container, Dropdown,Row,Col } from "react-bootstrap";
import { FaSignOutAlt, FaPiggyBank, FaUserTie } from 'react-icons/fa';
import { useDispatch , useSelector} from 'react-redux';
import { logOutUser } from "../../Actions/UserActions";

export const LoggedUserOptionComponent : React.FC<any> = (history:any) => {
    const appState = useSelector<any, any>((state) => state);
    let [username, setUsername] = useState('');
    let dispatch = useDispatch();

    useEffect(() => {
        setUsername(appState.user.username);
        console.log(appState.user.username);
    }, [appState]);

    const logOut = () => {
        console.log('arrived');
        dispatch(logOutUser());
        console.log(appState);
    }

    const sendUserPage = () => {
            history.history.push('/user');
    }


  return (
    <div >
    <Container>
        <Row>
        <Col>   
    <Dropdown >{username}
        <Dropdown.Toggle id='loggedIn-user-drop'>
        </Dropdown.Toggle>
        <Dropdown.Menu >
            <Dropdown.Item onClick={sendUserPage}><FaUserTie/> Account</Dropdown.Item>
            <Dropdown.Item href="#/action-2"><FaPiggyBank/> My Listing</Dropdown.Item>
            <Dropdown.Item onClick={logOut} ><FaSignOutAlt/> Log out </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    </Col>
    </Row>
    </Container>
    </div>
  )
}