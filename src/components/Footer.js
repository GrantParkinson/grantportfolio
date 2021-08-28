
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';




class Footer extends Component {
    render() {
        return(
          <Navbar bg="dark" variant="dark" >
        <Container><div className="p-5 text-center footer">
      <p>© 2021 Copyright: Grant Parkinson</p>
    </div>
    <script src="mailto.js"></script>
    </Container>
    </Navbar>
    );
}
}
export default Footer;