const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// api endpoints

router.get('/', async (req, res) => {
    // find all tags and associated product data //successful
    const getAllTagsData = await Tag.findAll();
    console.log(`All categories found`);
    res.json(getAllTagsData)
});

router.get('/:id', async (req, res) => {
    // find single tag via ID and product data //successful
    const getTagData = await Tag.findByPk(req.params.id);
    console.log(`Tag by ID found`);
    res.json(getTagData)
})

router.post('/', async (req, res) => {
    // create a new tag
    const newTagData = await Tag.create(req.body);
    console.log(`New Tag Created`);
    res.json(newTagData)
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