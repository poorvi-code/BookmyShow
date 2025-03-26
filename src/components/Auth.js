import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <Container className="mt-5">
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <Form>
        {isRegister && (
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
          </Form.Group>
        )}
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          {isRegister ? "Sign Up" : "Login"}
        </Button>
      </Form>
      <p className="mt-3">
        {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
        <span style={{ color: "blue", cursor: "pointer" }} onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Login" : "Register"}
        </span>
      </p>
    </Container>
  );
};

export default Auth;
