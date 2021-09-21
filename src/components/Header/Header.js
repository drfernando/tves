import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import icon from "../../assets/img/tves-icon.png";

export default class Header extends React.Component {
  render() {
    return (
      <Navbar className="bg-transparent" fixed="top">
        <Container className="no-margin">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={icon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <strong>TVes</strong>
          </Navbar.Brand>
            <Nav className="end justify-content-end">
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    );
  }
}
