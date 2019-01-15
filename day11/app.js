const Sequelize = require('sequelize');
const express = require('express');
const app = express();

const Inputs = require('./models/Inputs');
app.use(express.json());

app.get('/api/input', function (req, res) {
    Inputs.findAll()
    .then(function(rows){
        res.send(rows);
    });
    return;
});
app.get('/api/input/:inputID', function (req, res) {    
    Inputs.findAll({
        where: {
            id: req.params.inputID
        }
    })
    .then(function(rows){
        res.send(rows[0]);
    });
    return;
});
app.post('/api/input', function (req, res) {
    const input_ = req.body.input
    Inputs.create({
        input: input_,
        length: input_.length
    }).then(() => {
        Inputs.findAll()
        .then(function(rows){
            res.status(201).send(rows);
        });
    });
    return;
});
app.delete('/api/input/:inputID', function (req, res) {
    Inputs.destroy({
        where: {
            id: req.params.inputID
        }
    })
    .then(
        Inputs.findAll()
        .then(function(rows){
            res.status(201).send(rows);
        })
    );
    return;
})
app.listen(3000, () => {
    console.log('Listening on port 3000!');
});