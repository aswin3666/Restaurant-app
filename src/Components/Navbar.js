import React from 'react'
import {Navbar,Form,FormControl,Button,Nav} from 'react-bootstrap'
function Navbarmain() {
    return (
<div>
<Navbar bg="primary" variant="dark"> 
<Navbar.Brand href="#">Restaurents</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
       <Navbar.Collapse id="navbarScroll">
       <Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Login</Nav.Link>
      <Nav.Link href="#">
        Sign Up
      </Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
</div>
    )
}

export default Navbarmain;
