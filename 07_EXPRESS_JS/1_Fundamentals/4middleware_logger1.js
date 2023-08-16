const authorize = (req, res, next) => {

    const { user } = req.query

    if (user === 'Kannan') {
        req.user = { name: 'Kannan', id: 2255 }
        console.log('User Authentication Successful...');
        next()
    } else {
        res.status(404).send('Authentication failed, Try Again...')
    }
}

module.exports = authorize;
