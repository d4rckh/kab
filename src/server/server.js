const express = require("express");
const app = express();

const bodyParser = require("body-parser")
const path = require("path")

app.set('views', path.join(__dirname, '../client'))
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/api", require("./routes/apiRoute"))
app.use("/", require("./routes/indexRoute"))

const fs = require('fs');

fs.readFile(path.join(__dirname, '../../PORT'), 'utf8' , (err, data) => {
  if (err) {
    console.error(err);
    return
  }
  app.listen(data || 1010);
});
