const router = require('express').Router();
const { Category, Product} = require('../../models');

// add API endpoints

router.get('/', async (req, res) => {
    // find all categories
    const allCategories = await Category.findAll()
    console.log(`worked`);
    res.json(allCategories)
});

router.get('/:id', (req, res) => {
    // find one category by ID
    console.log(res.json())
});

router.post('/', async (req, res) => {
    // create a new category
    const newCatData = await Category.create(req.body)
    console.log(newCatData);
    res.json(`created: ` + newCatData)
});

router.post('/', (req, res) => {
    // create a new cateogry
    console.log(res.json())
});

router.delete('/:id', async (req, res) => {
    // delete a category
    const deleteCatData = await Category.destroy({
        where: {
            id: req.params.id
        }})
    console.log('detroyed: ' + deleteCatData);
    res.json('detroyed: ' + deleteCatData);
});

router.put('/:id', async (req, res) => {
    var updatedCatData = await Category.update({
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