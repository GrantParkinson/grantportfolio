import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import uffda from '../images/uffdalogo2.jpg';
import poco from '../images/Group1.png';



class Clients extends Component {
    render() {
        return(
            <Container>
        <Row className="clients">
            <Col sm={6}>
            <p className="clients-worked">Clients I've worked with</p>
            </Col>
            <Col sm={6}>
            <img
                className="rounded clientpoco mt-3"
                src={poco}
                alt="Pdx poco "
            />
            <img className="rounded my-3 clientuffda" src={uffda} alt="uff da logo" />
            </Col>
        </Row>
        </Container>
    );

        
    }}
    export default Clients;