import React from "react";
import {Document} from 'react-pdf'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { formatMs } from "@material-ui/core";

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" sm={12}>
          
          </Col>
          <Col className="p-3 d-flex jestify-content-end" md={1}><a className="git" href="https://www.linkedin.com/in/yvette-henderson/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="git" href="https://github.com/yvettehenderson" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="git" href="https://docs.google.com/document/d/1Vh3W_eedNPY-5DOkmfM1Pnr7un-swiUdA8Gl07MvTx0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
