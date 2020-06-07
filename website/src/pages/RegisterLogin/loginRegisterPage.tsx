import React, { useState } from 'react'
import { Card } from 'semantic-ui-react'
import Login from './login'
import Register from './register'
import Loader from '../../components/Helpers/LoaderComponent'

function LoginRegisterPage() {
  const [pageState, setPageState] = useState({
    isLogin: true,
    loginleft: 20,
    registerleft: 550,
    toggleButtonLeft: 0,
  })

  const clickLogin = () => {
    // if it's login already then return
    console.log(pageState)
    if (pageState.isLogin) {
      return
    }

    setPageState({
      isLogin: true,
      loginleft: 20,
      registerleft: 550,
      toggleButtonLeft: 0,
    })
  }

  const clickRegister = () => {
    // if it's register already then return
    if (!pageState.isLogin) {
      return
    }

    setPageState({
      isLogin: false,
      loginleft: -550,
      registerleft: 20,
      toggleButtonLeft: 110,
    })
  }

  return (
    <div id="LoginRegisterPage" className="flex-container-centered">
      <Loader></Loader>
      <Card className="formContainer">
        <Card.Content className="contentContainer">
          <div className="buttonContainer">
            <div id="selected-toggle-btn" style={{ left: pageState.toggleButtonLeft }}></div>
            <button
              className={pageState.isLogin ? 'toggle-btn active-btn' : 'toggle-btn inactive-btn'}
              onClick={clickLogin}
            >
              Login
            </button>
            <button
              className={
                !pageState.isLogin ? 'toggle-btn active-btn right' : 'toggle-btn inactive-btn right'
              }
              onClick={clickRegister}
            >
              Register
            </button>
          </div>
          <div className="transition-input-group input-form" style={{ left: pageState.loginleft }}>
            <Login />
          </div>
          <div
            className="transition-input-group input-form"
            style={{ left: pageState.registerleft }}
          >
            <Register />
          </div>
        </Card.Content>
      </Card>
    </div>
  )
}

export default LoginRegisterPage
