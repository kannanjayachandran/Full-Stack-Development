const express = require('express');
const router = express.Router();

const {
    getPeople,
    createPerson,
    createPostmanPerson,
    updatePerson,
    deletePerson,
} = require('../controllers/people')

// one way to set up routes
// router.get('/', getPeople);

// router.post('/', createPerson)

// router.post('/postman', createPostmanPerson)

// router.put('/:id', updatePerson);

// router.delete('/:id', deletePerson);

// another way to set up routes with less lines of code.
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPostmanPerson);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;