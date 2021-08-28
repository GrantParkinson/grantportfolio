import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class ContactMe extends Component {
    render() {
        return(
          <Container>
        <Row className="contactme">
        <Col sm={4}>
          <p className="contactMeTitle">Contact me</p>
          <div className="contactcard my-4">
            <Card.Body>
              <Card.Title>Best Ways to contact me</Card.Title>
              <Card.Subtitle className="mb-2">
                I respond on all platforms, so choose whichever you prefer
              </Card.Subtitle>
              <Card.Text> 
                <a href="mailto:grant.c.parkinson@gmail.com?"
                  >Grant.c.parkinson@gmail.com</a
                >
              </Card.Text>
              <a href="https://signal.org/en/"
                ><img
                  src="https://img.icons8.com/color/70/000000/signal-app.png"
                  alt="Signal"
              /></a>
              <a href="sms:+13609908088"
                ><img src="https://img.icons8.com/color/70/000000/sms.png"
                alt="sms"
              /></a>
              <a href="https://discordapp.com/users/YodaTaint#1544"
                ><img
                  src="https://img.icons8.com/color/70/000000/discord--v2.png"
                  alt="Discord"
              /></a>
              <a href="https://wa.me/13609908088"
                ><img
                  src="https://img.icons8.com/color/70/000000/whatsapp--v1.png" alt="WhatsApp"
              /></a>
            </Card.Body>
          </div>
        </Col>
        <Col sm={8} className="p-3 my-4 contactform" ControlID="contactform">
          {/* add contact form hook not using id */}
          <Form method="POST" action="" id="contactForm">
            <Form.Label for="email" class="form-label"> Email Address</Form.Label>
            <Form.Control type="email" className="m-1" id="email" />
            <Form.Label for="subject" className="t-3"> Subject</Form.Label>
            <Form.Control type="text" className="m-1" id="subject" />
            <Form.Label for="message" className="mt-3"> Message</Form.Label>
            <Form.Control as="textarea" className="m-1" id="message" style={{ height: '100px' }}/>
            <Button
              type="submit"
              Varient="primary"
              onclick="createEmail()"
              className="m-3 rounded"
            >
              Send message
            </Button>
          </Form>
        </Col>
      </Row>
      </Container>);
    }}
    export default ContactMe;