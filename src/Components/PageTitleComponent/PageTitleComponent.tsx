import React from 'react';
import { Container, Row, ButtonGroup,Button,Col } from 'react-bootstrap';
import './PageTitleComponent.css';
import { FaArrowLeft } from 'react-icons/fa';



export const PageTitleComponent : React.FC<any> = (props) => {

    const sendUserPage = () => {
        props.history.push('/');
}

    return (
        <div>
           <div id="page-title">
               <Container>
               <br/>
                   <Row>
                       <Col xs={2}>
                       <ButtonGroup  id="back-button" size="lg" className="mb-2">
                            <Button onClick={sendUserPage} ><FaArrowLeft/></Button>
                        </ButtonGroup>
                       </Col>
                       <Col>
                       <h3>{props.name}</h3>
                       </Col>
                       <Col xs={2}>
                       </Col>
                   </Row>
                </Container>
            </div>
            <br/>
        </div>

    )
}