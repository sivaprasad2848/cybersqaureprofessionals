import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Form,InputGroup,Button} from 'react-bootstrap'
function Login() {

  const[username,Setusername] = useState('');
  const [Password, setPassword]  = useState('');
  const store = ( ) => {
    window.localStorage.setItem("username" ,username);
    window.localStorage.setItem("password" ,Password);
  }

  return (
    <div>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <InputGroup onChange={(e) =>Setusername( e.target.value)}  className="mb-3">
              <InputGroup.Text  id="inputGroup-sizing-sm">Username</InputGroup.Text>
              <Form.Control
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <br />
            <InputGroup onChange={(e) =>setPassword( e.target.value)} className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Password
              </InputGroup.Text>
              <Form.Control
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <Button onClick={store}>Enter</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
