const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const { Student, Campus } = require("./models");


app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded());

app.use("/api", require("./api"));
app.get('/', (req, res) => {
  res.send("<h1>Hello User</h1>");
})

Student.sync().then(() => console.log("students created!"));
Campus.sync().then(() => console.log("campuses created!"));


app.listen(5000, () => {
  console.log("App is listening on port 5000");
});