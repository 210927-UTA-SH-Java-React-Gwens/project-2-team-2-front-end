import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { createUser } from "../../Actions/UserActions";

export const SignUpComponent: React.FC<any> = () => {
  let dispatch = useDispatch();

  //used to get users input each time text field changes
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleChange = (e: any) => {
    if (e.target.name === "username") setUsername(e.target.value);
    else if (e.target.name === "password") setPassword(e.target.value);
    else setEmail(e.target.value);
  };

    const handleChange = (e:any) =>{
        if(e.target.name === "username")
            setUsername(e.target.value);
        else if(e.target.name === "password")
            setPassword(e.target.value);
        else
            setEmail(e.target.value);

  return (
    <div>
      <Container>
        <Row></Row>
        <Row>
          <Col xs={1}></Col>
          <Col xs={10}>
            <br />
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder="Username"
                onChange={handleChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Email@email.com"
                onChange={handleChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                <br />
              </Form.Text>
            </Form.Group>
          </Col>
          <Col xs={1}></Col>
          <Row>
            <Col xs={5}></Col>
            <Col>
              <Button onClick={register} variant="primary" type="button">
                Sign up
              </Button>
            </Col>
            <Col xs={4}></Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};
