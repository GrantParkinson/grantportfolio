import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import grant from '../images/grant-cutout.png';



class Header extends Component {
    render() {
        return(
            <Container>
            <Row className="header">
        <Col sm={6} className="py-5 text-center">
          <p className="m-5">Hello, I am Grant Parkinson</p>

          <a href="www.twitter.com"
            ><img src="https://img.icons8.com/color/96/000000/twitter--v2.png"
            alt="twitter"
          /></a>

          <a href="www.instagram.com">
            <img
              src="https://img.icons8.com/color/96/000000/instagram-new--v1.png"
              alt="instagram"
          /></a>

          <a href="https://discordapp.com/users/YodaTaint#1544"
            ><img src="https://img.icons8.com/color/96/000000/discord--v2.png"
            alt="discord"
          /></a>
          <a href="mailto:grant.c.parkinson@gmail.com?"
            ><img src="https://img.icons8.com/color/96/000000/gmail-new.png"
            alt="gmail"
          /></a>
        </Col>
        <Col sm={6} className="p-3 mb-3 text-center">
          <img
            className="img-fluid"
            src={grant}
            alt="grant parkinson"
          />

          <Button
          size="lg"
          className="btn"
            onclick="location.href='https://pdfhost.io/v/jOibggWYI_Grant_Parkinson_2021_resume.pdf'"
            variant="secondary"
            
          >
            Download my CV
          </Button>
        </Col>
      </Row>

      </Container>

        );
    }
}
export default Header;