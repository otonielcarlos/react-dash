import React, {useState, useEffect} from 'react';
import './App.css';
import {Table} from 'react-bootstrap';
// import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





export const Concentrado = () => {



    const [data, setData] = useState([]);

    useEffect( () => {
        fetch('http://localhost:4000')
            .then( response => response.json())
            .then( data => {
                // console.log(data);  
                setData(data)
        });

    });
    return (<Table striped bordered hover>
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
          {data.map( product => {
            
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
      </Table>);
};