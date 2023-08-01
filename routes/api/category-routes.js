const router = require('express').Router();
const { Category, Product} = require('../../models');

// add API endpoints

router.get('/', (req, res) => {
    // find all categories
    console.log(res.json())
});

router.get('/:id', (req, res) => {
    // find one category by ID
    console.log(res.json())
});

router.post('/', (req, res) => {
    // create a new category
    console.log(res.json())
});

router.post('/', (req, res) => {
    // create a new cateogry
    console.log(res.json())
});

router.delete('/', (req, res) => {
    // delete a category
    console.log(res.json())
});

module.exports = router;