import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {
  Link
} from "react-router-dom";
import logo from '../logo.png';

const Navigation = () => {
    return ( 
        <Container>
        <Navbar collapseOnSelect expand="lg">
          <Link to="/">
            <Navbar.Brand>
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              musictools
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link> */}
            </Nav>
            <Nav>
              <Link to="/">Log In</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
}
 
export default Navigation;