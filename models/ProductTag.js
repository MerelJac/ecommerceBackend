const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
const { route } = require('../routes');

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
}, {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'product_tag'
});

module.exports = ProductTag;