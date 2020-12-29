import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';


class MyHeader extends React.Component {


    render() {
        return(
            <div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      
      <img
        alt=""
        src="xmas tree thumbnail.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      MC Survival Server
      
    </Navbar.Brand>
  </Navbar>
            </div>
            
            
        )
        }
    
    }

export default MyHeader;
