import React, { useState } from "react";
import {
  Card,
  Form,
  Icon,
  Image,
  Grid,
  Checkbox,
  Button,
} from "semantic-ui-react";

function LoginCard() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleEmailUpdate = (event) => {
    const email = event.target.value;
    setInput((prevState) => ({ ...prevState, email }));
  };

  const handlePasswordUpdate = (event) => {
    const password = event.target.value;
    setInput((prevState) => ({ ...prevState, password }));
  };

  return (
    <Card>
      <Card.Content>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              value={input.email}
              onChange={(event) => handleEmailUpdate(event)}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Password"
              value={input.password}
              onChange={(event) => handlePasswordUpdate(event)}
            />
          </Form.Field>
        </Form>
      </Card.Content>
    </Card>
  );
}

export default LoginCard;
