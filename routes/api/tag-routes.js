const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// api endpoints

router.get('/', (req, res) => {
    // find all tags and associated product data
    console.log(res.json());
});

router.get('/:id', (req, res) => {
    // find single tag via ID and product data
    console.log(res.json());
})

router.post('/', (req, res) => {
    // create a new tag
    console.log(res.json());
});

router.put('/:id', (req, res) => {
    // update a tag via id
    console.log(res.json());
});

router.delete('/', (req, res) => {
    // delete a tag
    console.log(res.json());
});

module.exports = router;