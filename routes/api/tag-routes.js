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
    // create a new tag // successful
    const newTagData = await Tag.create(req.body);
    console.log(`New Tag Created`);
    res.json(newTagData)
});

router.put('/:id', async (req, res) => {
    // update a tag via id // successful
    const updatedTag = await Tag.update({
        tag_name: req.body.tag_name
    }, {
        where: {
            id: req.params.id
        }
    })
    console.log(`updated Tag`);
    res.json(updatedTag)
});

router.delete('/:id', async (req, res) => {
    // delete a tag //successful
    const deleteTag = await Tag.destroy({
        where: {
            id: req.params.id
        }
    })
    console.log(`ID destroyed`)
    res.json(deleteTag)
});

module.exports = router;