import React, { useState } from "react";
import "./style/App.scss";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import sponsors from "models/sponsors";
import { Button, Container, Card, Image, Menu } from "semantic-ui-react";
import CredentialServices from "services/CredentialService";
import routes from "routes/AppRoutes";

function App() {
  const credService: CredentialServices = new CredentialServices();
  const userAuth = credService.GetUserCredentials();

  const [activeNavPage, setActiveNavPage] = useState("home");

  return (
    <div className="App">
      <Layout activeNavPage={activeNavPage} setActiveNavPage={setActiveNavPage}>
        <Switch>
          {routes.map((route) => {
            const Page = route.component;
            return (
              <Route exact path={route.path}>
                <Page />
              </Route>
            );
          })}
          <Route exact path={"/"}>
            {userAuth === null ? <Redirect to={"/"} /> : <h4>Hello World</h4>}
            <SponsorCards />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

const SponsorCards = () => {
  return (
    <Container>
      <Card.Group itemsPerRow={3}>
        {[...Object.keys(sponsors)].sort().map((sponsorName) => {
          const sponsorData = sponsors[sponsorName];

          return (
            <Link to={sponsorData.internalRoute}>
              <Card className="card-layout">
                <Image src={sponsorData.image} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{sponsorData.name}</Card.Header>
                  <Card.Meta>
                    <span className="date">{sponsorData.meta}</span>
                  </Card.Meta>
                  <Card.Description>{sponsorData.shortDesc}</Card.Description>
                </Card.Content>
              </Card>
            </Link>
          );
        })}
      </Card.Group>
    </Container>
  );
};

const NavBar = (props) => {
  return (
    <Menu
      id="navBar"
      secondary
      // fixed={fixed ? "top" : null}
      // inverted={!fixed}
      // pointing={!fixed}
      // secondary={!fixed}
      size="large"
    >
      <Container class="nav-container">
        {["home", "page2"].map((page) => {
          return (
            <Link>
              <Menu.Item
                className="menuLink"
                active={props.activeNavPage === page}
                onClick={() => props.setActiveNavPage(page)}
              >
                {page}
              </Menu.Item>
            </Link>
          );
        })}
        <Menu.Item position="right">
          <Button
          // as="a"
          // inverted={!fixed}
          >
            Log in
          </Button>
          <Button
            as="a"
            // inverted={!fixed}
            // primary={fixed}
            style={{ marginLeft: "0.5em" }}
          >
            Sign Up
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

const AuthenticatedApp = () => {};

const UnauthenticatedApp = () => {};

const Layout = (props) => {
  return (
    <>
      <NavBar
        activeNavPage={props.activeNavPage}
        setActiveNavPage={props.setActiveNavPage}
      />
      {props.children}
      <Footer />
    </>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-right">
        <p>Copyright 2020 © Real Skills Education.</p>
        <p>Graduate jobs and internships for software engineering students.</p>
      </div>
    </footer>
  );
};

export default App;
