const router = require('express').Router();
const { Student } = require('../models')

module.exports = router;

router.get('/', async (req, res, next) => {
    const students = await Student.findAll();
    res.send(students);
})

router.get('/populate', async (req, res, next) => {
    Student.bulkCreate([
        {
            firstName: 'Mig',
            lastName: 'L',
            email: 'MigL@gmail.com',
            gpa: 3.2
        },
        {
            firstName: 'Kaizen',
            lastName: 'Cas',
            email: 'kaizencas@gmail.com',
            gpa: 3.7
        }
    ])
    .then(res.status(201).send("populate complete"));
});


// router.post('/dogs', (req, res, next) =>{})