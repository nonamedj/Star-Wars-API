import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Home from "./components/Home";
import People from "./components/People";
import Planets from "./components/Planets";
import Starships from "./components/Starships";
import Films from "./components/Films";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Character from "./components/Character";
import Planet from "./components/Planet";
import Join from "./components/footer-components/Join";
import Returns from "./components/footer-components/Returns";
import Careers from "./components/footer-components/Careers";
import AboutUs from "./components/footer-components/AboutUs";
import Policies from "./components/footer-components/Policies";
import Order66 from "./components/footer-components/Order66";

function App() {

  return (
    <Router>
      <Navbar />
      <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/people">
              <People />
            </Route>
            <Route path="/planets">
              <Planets />
            </Route>
            <Route path="/starships">
              <Starships />
            </Route>
            <Route path="/films">
              <Films />
            </Route>
            <Route path="/join-us">
              <Join />
            </Route>
            <Route path="/order66">
              <Order66 />
            </Route>
            <Route path="/returns">
              <Returns />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/careers">
              <Careers />
            </Route>
            <Route path="/policies">
              <Policies />
            </Route>
            <Route path="/character/:id" component={Character} />
            <Route path="/planet/:id" component={Planet} />
          </Switch>
      </Container>
      <Signup />
      <Footer />
    </Router>
  );
}
export default App;
