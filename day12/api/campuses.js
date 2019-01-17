const router = require('express').Router();
const { Campus } = require('../models')

module.exports = router;

router.get('/', async (req, res, next) => {
    const campuses = await Campus.findAll();
    res.send(campuses);
})

router.get('/populate', async (req, res, next) => {
    Campus.bulkCreate([
        {
            name: 'Hunter College',
            address: '695 Park Ave',
            description: 'This is a college, who figured?'
          }
    ])
    .then(res.status(201).send("populate complete"));
});

// router.post('/dogs', (req, res, next) =>{})