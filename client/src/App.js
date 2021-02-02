
/*jshint esversion: 6 */ 
import React, {useState} from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
// import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./Components/Navbar";
import { Concentrado } from './Components/Table';
import {Product} from './Components/Product';

const App = () => {

const [productPage, setProductPage] = useState('false');
const [sku, setSku] = useState('');
 
const changeShowProduct = () => {
  setProductPage(!productPage);
};

const captureSku = (event) => {
  setSku(event);
};

  return (<div className="App">
<Container>
<Header changeShowProduct={changeShowProduct} captureSku={captureSku} />
{ (!productPage) ? <Product sku={sku}/>  : <Concentrado /> }

</Container>
</div>)
   };

export default App;
