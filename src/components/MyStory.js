import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class MyStory extends Component {
    render() {
        return(
        <Container>
        <Row className="intro">
            <Col sm={6} className=" my-3">
            <a href="#contactform">
                <blockquote className="oval-thought">
                <p>Contact me!</p>
                </blockquote>
                </a>
            </Col>
            <Col sm={6} className="p-3">
            <div>
                <Card className="about-me card">
                <Card.Body>
                    <Card.Title>Why you would want to work with me</Card.Title>
                    <Card.Text>
                    My name is Grant and I am an intermediate software developer
                    looking to solve create business problems with software. I am
                    hardworking, flexible and always thinking of ways to improve
                    the workflow of a business. Some of my specific business
                    interests involve automated scheduling, improving/creating
                    data pipelines, and creating the best customer experience
                    through seamless interaction with the product.
                    </Card.Text>
                    <Button size="lg" className="btn" varient="primary" href="www.willaddthislater.com"
                    >Read More</Button>
                </Card.Body>
                </Card>
            </div>
            </Col>
      </Row>
      </Container>
      );
    }
}
export default MyStory;