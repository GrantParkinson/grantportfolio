import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
class NavBar extends Component {
    render() {
        return(
            <div>
              
              <Navbar bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand href="">Grant's portfolio site</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                      <Nav.Link href="www.hltv.org">Work</Nav.Link>
                      <Nav.Link href="www.hltv.org">Contact</Nav.Link>
                      <Nav.Link href="www.hltv.org">Blog</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
            );
    }
    
}
export default NavBar;
