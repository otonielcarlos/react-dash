import React, {useState, useEffect} from 'react';
import './App.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
  const [sku, setSku] = useState(Number);
  const [productDetail, setProductDetail] = useState({});
  const handleChange = (event) => {
    setSku(event.target.value);
  };
  const findSku = () => {
    fetch(`http://localhost:4000/${sku}`, {
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({a: 1, b: 2})
    })
    .then(response => response.json())
    .then(data => {
    if (!data.length) {
    setProductDetail(data);
    console.log(productDetail);
  } else {
      setProductDetail ({message:'No existe el sku'});
      console.log(productDetail);
     } 
    });
  };

return (<Navbar  bg="dark" variant="dark">
  <Navbar.Brand href="#home">Blue Diamond Innovation</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" onChange={handleChange} placeholder="SKU" className="mr-sm-2" />
      <Button variant="outline-success" onClick={findSku} >Buscar</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
)

}