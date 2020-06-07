import Name from '../pages/sponsors/name'
import LoginRegisterPage from '../pages/registerLogin/loginRegisterPage'

export const routeNames = {
  root: '/',
  home: '/home',
  login: '/login',
  employer: '/employer',
}

const routes = [
  { path: routeNames.root, component: Name },
  { path: routeNames.home, component: Name },
  { path: routeNames.login, component: LoginRegisterPage },
  { path: routeNames.employer, component: Name },
  { path: '/employerOne', component: Name },
  { path: '/employerTwo', component: Name },
  { path: '/employerThree', component: Name },
]

interface Route {
  path: string
  component: JSX.Element
}

export default routes
