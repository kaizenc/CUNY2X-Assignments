const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>THIS IS THE ROOT!<h1>')
})

app.get(['/apple', '/ale' ], (req, res) => {
    res.send('<h1>Apple or Ale?<h1>')
})

app.get('/who+a+', (req, res) => {
    res.send('<h1>I know right?<h1>')
})

app.get('/name/:first-:last', (req, res) => {
    res.send('<h1>Hello there ' + req.params.first + ' ' + req.params.last +  '<h1>')
})

app.get('/reverse/:word', (req, res) => {
    let reversed = req.params.word.split("").reverse().join("")
    res.send('<h1>Reversed word: ' + reversed + "</h1>")
})

app.get(/.*/, (req, res) =>{
    res.send('<h2>Route does not exist</h2>')
})

app.listen(3000, () => {
    console.log('Listening on port 3000!')
})