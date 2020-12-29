import React from "react";
import { Navbar, } from 'react-bootstrap';

class MyFooter extends React.Component {
    render() {
        return (
            <div>
           
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="xmas tree thumbnail.png"
                width="30"
                height="30"
                className="d-inline-block align-center"
                
              />{' '}
              Join Us Today!
            </Navbar.Brand>
          </Navbar>
          
          </div>
        )
    }
}

export default MyFooter;