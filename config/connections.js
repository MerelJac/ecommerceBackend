const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DN_USER,
    process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        socketPath: '/tmp/mysql.sock'
    }
);

module.exports = sequelize;