import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatssappIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";

export default class Footer extends React.Component {
  render() {
    return (
      <Navbar className="footer" fixed="top">
        <Container className="no-margin">
          <Nav className="end justify-content-start">
              <strong>© 2021 Televisora Venezolana Social RIF G-20007687-9</strong>
          </Nav>
          <Nav className="end justify-content-end">
            <Nav.Link href="#deets">
              <FacebookIcon />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <InstagramIcon />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <WhatssappIcon />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <TwitterIcon />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
