import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";

function RegisterCard(props) {
  const [input, setInput] = useState({
    inviteCode: "",
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

  const handleInviteCodeUpdate = (event) => {
    const inviteCode = event.target.value;
    setInput((prevState) => ({ ...prevState, inviteCode }));
  };

  return (
    <div className={props.className}>
      <Form>
        <Form.Field>
          <label>Invite Code</label>
          <Input
            placeholder="Invite Code"
            icon="barcode"
            iconPosition="left"
            value={input.password}
            onChange={(event) => handleInviteCodeUpdate(event)}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input
            placeholder="Email"
            icon="mail"
            iconPosition="left"
            value={input.email}
            onChange={(event) => handleEmailUpdate(event)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input
            placeholder="Password"
            icon="key"
            iconPosition="left"
            value={input.password}
            onChange={(event) => handlePasswordUpdate(event)}
          />
        </Form.Field>
        <Form.Field>
          <div className="flex-container-centered">
            <Button className="login-button">Register</Button>
          </div>
        </Form.Field>
      </Form>
    </div>
  );
}

export default RegisterCard;
