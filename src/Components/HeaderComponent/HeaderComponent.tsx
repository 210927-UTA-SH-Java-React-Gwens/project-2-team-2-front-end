import React, {useState, useEffect} from "react";
import { useDispatch , useSelector} from 'react-redux';
import { Title } from "../TitleComponent/TitleComponent";
import { LoggedUserOptionComponent } from "../HeaderOptionComponents/LoggedUserOptionComponent";
import { UserlessOptionComponent } from "../HeaderOptionComponents/UserlessOptionComponent";
import './Header.css'
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { VerifyAccountComponent } from "../VerifyAccountComponent/VerifyAcountComponent";


export const Header : React.FC<any> = () => {
  const appState = useSelector<any, any>((state) => state);
  const history = useHistory();

  const sendVerificationPage = () => {
    history.push('/activation-page');
}

useEffect(() => {
  console.log(appState);
  if(appState.user.id ===-2)
    sendVerificationPage();
}, [appState]);

  function Options() {
    if(appState.user.id > 0)
      return <LoggedUserOptionComponent history={history}/>
    else
    return <UserlessOptionComponent/>
    

  }

  return (
    <div id="gwen-header">
      <Container> 
        <Row>
          <Col xs={2} ></Col> 
          <Col xs={8}> 
            <Title/>  
          </Col> 
          <Col xs={2}> 
            <Options/>  
          </Col> 
        </Row> 
      </Container>
    </div>
  )
}