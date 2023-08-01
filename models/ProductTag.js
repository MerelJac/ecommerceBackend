const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class ProductTag extends Model {};

ProductTag.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }, 
    product_id: {
        type: DataTypes.INTEGER,
        // references product[id]
    }, 
    product_id: {
        type: DataTypes.INTEGER
        // references product[id]
    },
    tag_id: {
        type: DataTypes.INTEGER
        // references tag[id]
    }
});