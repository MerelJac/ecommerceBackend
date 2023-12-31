const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connections');

const app = express();
const PORT = 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(routes);
app.use(express.static('public'));

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, (res, req) => {
        console.log(`Listening on http://localhost:${PORT}`)
    })
})

