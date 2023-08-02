const router = require('express').Router();
// will find models index.js file 
const { Product, Category, Tag, ProductTag } = require('../../models');

// get all products //successful
router.get('/', async (req, res) => {
    const allProductData = await Product.findAll();
    console.log(`Found all products`);
    res.json(allProductData)
});

// get one product
router.get('/:id', async (req, res) => {
    const getOneProduct = await Product.findByPk(req.params.id);
    console.log(`found one product`);
    res.json(getOneProduct)
});

// create new product //successful
router.post('/', async (req, res) => {
    const newProductData = await Product.create(req.body);
    console.log('New product created.');
    res.json(newProductData)
})

  //update product
  router.put('/:id', (req, res) => {


  })

// delete one product by id
router.delete('/:id', (req, res) => {
    console.log(res)
});

module.exports = router;
