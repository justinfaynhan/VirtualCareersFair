import React, { useState, useContext } from 'react'
import CredentialService from '../../services/CredentialService'
import { Redirect, BrowserRouter as Router } from 'react-router-dom'
import { Form, Input, Button } from 'semantic-ui-react'
import { UserSignUpCredentials, UserAuthDetail } from '../../models/BindingModels'
import LoadingContext from '../../context/loadingContext'
import { routeNames } from '../../routes/AppRoutes'

function RegisterCard(props) {
  const [input, setInput] = useState({
    inviteCode: '',
    email: '',
    password: '',
  })

  // redirect
  const [redirect, setRedirect] = useState(false)
  const blockUi = useContext(LoadingContext)

  const handleEmailUpdate = (event) => {
    const email = event.target.value
    setInput((prevState) => ({ ...prevState, email }))
  }

  const handlePasswordUpdate = (event) => {
    const password = event.target.value
    setInput((prevState) => ({ ...prevState, password }))
  }

  const handleInviteCodeUpdate = (event) => {
    const inviteCode = event.target.value
    setInput((prevState) => ({ ...prevState, inviteCode }))
  }

  const handleRegister = async () => {
    const loginModel: UserSignUpCredentials = new UserSignUpCredentials(
      input.email,
      input.password,
      input.inviteCode
    )

    const credService = new CredentialService()

    // turn on blockUI
    blockUi.toggleLoadingOn('Registering, please wait')

    const userAuth: UserAuthDetail = await credService.Register(loginModel)
    console.log(userAuth)

    //turn off blockUI
    blockUi.toggleLoadingOff()

    // if the userAuth isn't null then don't route back
    if (userAuth != null) {
      setRedirect(true)
    }
  }

  if (redirect) {
    return (
      <Router>
        <Redirect to={routeNames.home} />
      </Router>
    )
  }

  return (
    <div className={props.className}>
      <Form>
        <Form.Field>
          <label>Invite Code</label>
          <Input
            placeholder="Invite Code"
            icon="barcode"
            iconPosition="left"
            value={input.inviteCode}
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
            <Button className="login-button" onClick={handleRegister}>
              Register
            </Button>
          </div>
        </Form.Field>
      </Form>
    </div>
  )
}

export default RegisterCard
