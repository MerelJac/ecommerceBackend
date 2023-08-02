const router = require('express').Router();
// will find models index.js file 
const { Product, Category, Tag, ProductTag } = require('../../models');

// get all products //successful
router.get('/', async (req, res) => {
    const allProductData = await Product.findAll();
    console.log(`Found all products`);
    res.json(allProductData)
});

// get one product //successful
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

  //update product name //successful
  router.put('/:id', async (req, res) => {
    const updateProduct = await Product.update({
        product_name: req.body.product_name
    }, {
        where: {
            id: req.params.id
        }
    });
    console.log(`Product name updated`);
    res.json(updateProduct)

  })

// delete one product by id //successful
router.delete('/:id', async (req, res) => {
    const deleteProduct = await Product.destroy({
        where: {
            id: req.params.id
        }
    })
    console.log(`product deleted`);
    res.json(deleteProduct)
});

module.exports = router;
