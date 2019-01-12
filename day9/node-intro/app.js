const fs = require('fs');

//Part 1

let people1 = JSON.parse(fs.readFileSync('people.json')).names;
let people2 = JSON.parse(fs.readFileSync('people2.json')).names;

let final = [...people1, ...people2].join("\n");
fs.writeFileSync('peopleComplete.txt', final);


//Part 2
fs.writeFileSync('peopleComplete.json', "");
let files = fs.readdirSync('./people/');
files.forEach(file =>{
    fs.appendFileSync('peopleComplete.json', JSON.parse(fs.readFileSync("./people/" + file)).names.join("\n") + "\n");
})
