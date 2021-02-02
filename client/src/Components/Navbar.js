/*jshint esversion: 6 */ 

import React, { useState } from 'react';
import '../App.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Product} from './Product';
export const Header = (props) => {
  const [placeholder, setPlaceHolder] = useState(null);
  // const [productDetail, setProductDetail] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    props.captureSku(event.target.value);
    // event.target.value="";
  };

  const handleClick = (event) => {
    event.preventDefault();
    props.changeShowProduct();
    // setPlaceHolder(null);

  };


return (<Navbar  bg="dark" variant="dark">
  <Navbar.Brand href="#home">Blue Diamond Innovation</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Form inline>
      <FormControl 
      type="text"  
      onChange={handleChange} 
      placeholder="SKU" 
      value={placeholder} 
      className="mr-sm-2" />
      <Button variant="outline-success" onClick={handleClick}>Buscar</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

)}