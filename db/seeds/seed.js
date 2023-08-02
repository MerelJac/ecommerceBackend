const sequelize = require('../../config/connections');
// import models
const { Product, Category, Tag, ProductTag } = require('../../models');

const categoriesData = [
    { category_name: 'Electronics'},
    { category_name: 'Clothing'}
];

const productsData = [
    { product_name: 'Laptop', price: '999.99', stock: 10, category_id: 1},
    { product_name: 'Shirt', price: '19.99', stock: 10, category_id: 2}
]

const tagsData = [
    { tag_name: 'New' },
    { tag_name: 'Sale' },
  ];
  
  const productTagsData = [
    { product_id: 1, tag_id: 1 },
    { product_id: 1, tag_id: 2 },
  ];

  async function seedDatabase() {
    try {
        await Category.bulkCreate(categoriesData);

        await Product.bulkCreate(productsData);

        await Tag.bulkCreate(tagsData);

        await ProductTag.bulkCreate(productTagsData);

        console.log(`Seed database successfully created.`)
    } catch(err) {
        console.error(`Error sending seed: ${err}`)
    }
  };

  seedDatabase();