import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

function App() {
  return (

    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="www.hltv.org">Grant's portfolio site</Navbar.Brand>
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
    </div >

  );
}

export default App;
