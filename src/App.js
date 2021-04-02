import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line
      title: "Yvette Henderson",
      headerLinks: [
        // eslint-disable-next-line
        { title: "Home", path: "/" },
        // eslint-disable-next-line
        { title: "About", path: "/about" },
        // eslint-disable-next-line
        { title: "Contatc", path: "/conatct" },
      ],
      home: {
        // eslint-disable-next-line
        title: "Yvette Henderson",
        subTitle: "Web Developer and Project Manager",
        // eslint-disable-next-line
        title: " think of a good title for your projects",
      },
      about: {
        // eslint-disable-next-line
        title: "About Me",
      },
      contact: {
        // eslint-disable-next-line
        title: "Contact Me",
      },
    };
  }

  render() {
    return (
      <Router>
        {/* eslint-disable-next-line */}
        <Container fluid="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Yvette Henderson</Navbar.Brand>

            <Navbar.Toggle  className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbbar-toggle">
            <nav className="ml-auto">
              <Link className id="nav-link" to="/">Home </Link>
              <br></br>
              <Link className id="nav-link" to="/about">About</Link>
              <br></br>
              <Link className id="nav-link" to="/contact">Contact</Link>
            </nav>
            </Navbar.Collapse>
            </Navbar>
        </Container>
      </Router>
    );
  }
}
export default App;
