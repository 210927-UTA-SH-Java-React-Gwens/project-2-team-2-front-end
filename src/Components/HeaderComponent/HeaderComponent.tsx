import React, {useState, useEffect} from "react";
import { useDispatch , useSelector} from 'react-redux';
import { Title } from "../TitleComponent/TitleComponent";
import { LoggedUserOptionComponent } from "../HeaderOptionComponents/LoggedUserOptionComponent";
import { UserlessOptionComponent } from "../HeaderOptionComponents/UserlessOptionComponent";
import './Header.css'
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";


export const Header : React.FC<any> = () => {
  const appState = useSelector<any, any>((state) => state);
  const history = useHistory();

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