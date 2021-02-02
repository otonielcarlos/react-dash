/*jshint esversion: 6 */ 

const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());

const sql = mysql.createConnection({
    host : '173.231.198.187',
    user: 'edulinkstore_DB',
    password: '.-.bdi-2020.-.',
    database: 'edulinkstore_DB'
});

sql.connect();

let port = 4000;
app.listen(port, ()=> {
console.log(`corriendo en el port ${port}`);

});

let indexQuery = 'SELECT p.product_id, p.sku, p.model, p.quantity, pd.name, c.name AS "Categoria" FROM product AS p JOIN product_description AS pd ON p.product_id = pd.product_id JOIN product_to_category AS pc ON pc.product_id = p.product_id JOIN category_description AS c ON c.category_id = pc.category_id';
app.get('/', (req, res) => {
    sql.query(indexQuery, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.post('/:sku', (req, res) => {
    let skuQuery = `SELECT p.product_id, p.sku, p.model, p.quantity, pd.name, c.name AS "Categoria" FROM product AS p JOIN product_description AS pd ON p.product_id = pd.product_id JOIN product_to_category AS pc ON pc.product_id = p.product_id JOIN category_description AS c ON c.category_id = pc.category_id WHERE p.sku = "${req.params.sku}"`;
    sql.query(skuQuery, (err, results) => {
        if (err) throw err;
        res.send(results);
    });

});