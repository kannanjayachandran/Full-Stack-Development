const express = require('express');

const app = express();

const { products } = require('./2_data');

// main route
app.get('/', (req, res) => {
    res.send('<h1>Home Page1</h1><a href="/api/products">products</a>');
});

// api/products route
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.json(newProducts);
});

// getting products by product id { Route params }
// we use route params when we want to dynamically request data without hard coding the values
app.get('/api/products/:ProductID', (req, res) => {

    const { ProductID } = req.params;

    const singleProduct = products.find((product) => product.id === Number(ProductID));

    return (!singleProduct) ? res.status(404).send('Product does not exist.') : res.json(singleProduct);
    // OR
    // if (!singleProduct) {
    //     return res.status(404).send('Product does not exist.')
    // } else {
    //     return res.json(singleProduct);
    // }

});

// query string params
// we use query string params to filter out data or sort them or select a particular data
app.get('/api/v1/query', (req, res) => {

    const { search, limit } = req.query

    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => product.name.startsWith(search));
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        return res.status(200).send('Query Successful, but not items in the list.');
    }
    res.status(200).json(sortedProducts);
});


app.listen(5000, () => console.log('Server listening at port 5000...'));
