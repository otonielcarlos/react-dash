import React from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
// import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "./Navbar";
import { Concentrado } from './Table';

class App extends React.Component {
 
render (){
  return (<div className="App">
<Container>
<Header />
<Concentrado />
</Container>
</div>)


   }};
export default App;
