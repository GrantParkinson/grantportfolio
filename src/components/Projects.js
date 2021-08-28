import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import nyt from '../images/nyt-api.png';
import record from '../images/record-manager.png';
import weather from '../images/open-weather.png';




class Projects extends Component {
    render() {
        return(
          <Container>
        <Row className="projects p-2">
        <div className="text-center">
          <p className="projectTitle">My Projects</p>
        </div>
        <Card className="m-3" style={{width: '18rem'}}>
          <Card.Img
          varient="top"
            src={weather}
            class="card-img-top img-fluid"
            alt="Open Weather API"
          />
          <Card.Body>
            <Card.Title class="card-title">Open Weather API site</Card.Title>
            <Card.Text class="card-text">
              Utlized the Open Weather API using JS to programatically display
              weather forecasts from a user inputted Zipcode
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-3" style={{width: '18rem'}}>
          <Card.Img varient="top" src={record} alt="Student record manager" />
          <Card.Body >
            <Card.Title>Student Record manager w/Login</Card.Title>
            <Card.Text >
              Built and displayed a database full of records using PHP with full
              CRUD functions. Also created login system to limit CRUD actions to
              authorized users
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-3" style={{width: '18rem'}}>
          <Card.Img varient="top" src={nyt}  alt="New York Times API" />
          <Card.Body >
            <Card.Title class="card-title">NYT API Project</Card.Title>
            <Card.Text>
              Used the NYT API to display news storied based on a user selected
              category, displayed the stories as a bootstrap card in a
              responsive mosiac layout.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-3" style={{width: '18rem'}}>
          <Card.Img
            Variant="top"
            src="https://d3926qxcw0e1bh.cloudfront.net/business_gallery/34/d2/34d24c655f5ebc6ec923d9022f937f31.jpg.smartcrop546x546.jpg"
            alt="Uff Da Project"
          />
          <Card.Body >
            <Card.Title class="card-title">Uff Da logistics Website</Card.Title> 
            <Card.Subtitle className="mb-2 text-muted">Coming soon!</Card.Subtitle>
            <Card.Text >
              Plan to create a form for customers to submit their information
              and pictures of furniture for a quicker quote turn around time.
              Data will then automatically fill out a google calendar event for
              later scheduling without any errors
            </Card.Text>
          </Card.Body>
        </Card>
       
      </Row>
      </Container>
    );
  }}
    export default Projects;