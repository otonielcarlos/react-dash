import React from 'react';
import './App.css';
import {Table, Container} from 'react-bootstrap';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

componentDidMount(){
    fetch('http://localhost:4000')
    .then( response => response.json())
    .then( data => {
      console.log(data);  
      this.setState({
        data : data
      });
    });
}
render (){
let i = 0;
  return (
    <div className="App">
      <Container>
      <Navbar  bg="dark" variant="dark">
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
      <FormControl type="text" placeholder="SKU" className="mr-sm-2" />
      <Button variant="outline-success">Buscar</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>


<Table striped bordered hover>
  <thead>
    <tr>

      <th>Product ID</th>
      <th>Categoría</th>
      <th>SKU</th>
      <th>Modelo</th>
      <th>Nombre</th>
      <th>Cantidad</th>

    </tr>
  </thead>
  <tbody>
    {this.state.data.map( product => {
      i++;
      return (<tr>

        <td>{product.product_id}</td>
        <td>{product.Categoria}</td>
        <td>{product.sku}</td>
        <td>{product.model}</td>
        <td>{product.name}</td>
        <td>{product.quantity}</td>
        
      </tr>
       )

    })}
  </tbody>
</Table>
</Container>
    </div>
  );
}
}
export default App;
