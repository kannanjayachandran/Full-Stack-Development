const express = require('express');
const router = express.Router();

// post method
router.post('/', (req, res) => {
    const { name } = req.body;      // possible because of the urlencoded middleware
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please provide credentials');
});

module.exports = router