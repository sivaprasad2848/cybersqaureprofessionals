import React from 'react'
import { Container, Row, Col } from 'react-dom'

function login() {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
           <input>Username</input>
           <input>Password</input>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default login