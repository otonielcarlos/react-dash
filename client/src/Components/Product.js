/*jshint esversion: 6 */ 

import React, {useState, useEffect} from "react";
import '../App.css';
// import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Product = (props) => {

    const [skuImage, storeSkuImage] = useState(props.sku);
    const [result, setResult] = useState([]);
useEffect(() =>{
    fetch(`http://localhost:4000/${props.sku}`, {
            header: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({a: 1, b: 2})
          })
          .then(response => response.json())
          .then (data => {
            setResult(data);
            console.log(data);
          });
} , [props.sku]);

let urlImage = `http://www.bdicentralserver.com/images/product/pe/${skuImage}.jpg`;

    return (<h1>

{result.map( (product, key) => {
    return (<div key={key}>
                <li>Nombre: {product.name}</li>
                <li>Sku: {product.sku}</li>
                <li>Modelo: {product.model}</li>
                <li>Cantidad: {product.quantity}</li>
                <img src={urlImage} />
        
        </div>)
}) }
        </h1>);

};
