const router = require('express').Router();
const { Category, Product} = require('../../models');

// add API endpoints

router.get('/', async (req, res) => {
    // find all categories //successful
    const allCategories = await Category.findAll()
    console.log(`worked`);
    res.json(allCategories)
});

router.get('/:id', async (req, res) => {
    // find one category by ID //successful
    const foundCategory = await Category.findByPk(req.params.id);
    console.log(`found category by id: ` + foundCategory)
    res.json(`found category by id: ` + foundCategory);
});

router.post('/', async (req, res) => {
    // create a new category //successful
    const newCatData = await Category.create(req.body)
    console.log(newCatData);
    res.json(`created: ` + newCatData)
});

router.delete('/:id', async (req, res) => {
    // delete a category //successful
    const deleteCatData = await Category.destroy({
        where: {
            id: req.params.id
        }})
    console.log('detroyed: ' + deleteCatData);
    res.json('detroyed: ' + deleteCatData);
});

router.put('/:id', async (req, res) => {
    // update a cateogry // successful
    const updatedCatData = await Category.update({
        category_name: req.body.category_name
    }, {
        where: {
            id: req.params.id
        }
    });
    console.log(`updated: ` + updatedCatData);
    res.json(`updated: ` + updatedCatData);
})

module.exports = router;