const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req,res) => {
    res.send('<h2>Routes page, keep going</h2>')
});


module.exports = router;