const bodyParser = require("body-parser")
const express = require("express");
const app = express();

const UserClass = require("./classes/User")
const ComputerClass = require("./classes/Computer")
const dataStorage = require("./dataStorage")

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("i", { page: "main" }))

app.get("/adduser", (req, res) => res.render("i", { page: "adduser" }))
app.get("/users", (req, res) => res.render("i", { page: "users" }))
app.get("/addcomputer", (req, res) => res.render("i", { page: "addcomputer" }))
app.get("/computers", (req, res) => res.render("i", { page: "computers" }))

app.post("/api/user", (req, res) => {
    res.send(dataStorage.addUser({
        password: req.body.password,
        username: req.body.username,
        SPNs: req.body.SPNs,
        isDA: req.body.isDA,
        isService: req.body.isService
    }))
})
app.get("/api/user", (req, res) => {
    res.json(dataStorage.getUsers().map(a => new UserClass(a)))
})
app.post("/api/computer", (req, res) => {
    res.send(dataStorage.addComputer({
        hostname: req.body.hostname,
        isServer:req.body.isServer,
        isDC: req.body.isDC,
        isDB: req.body.isDB,
        isSP: req.body.isSP,
        isEx: req.body.isEx,
        isVM: req.body.isVM,
        isGC: req.body.isGC,
        isRODC: req.body.isRODC,
    }))
})
app.get("/api/computer", (req, res) => {
    res.json(dataStorage.getComputers().map(a => new ComputerClass(a)))
})

const fs = require('fs');

fs.readFile('PORT', 'utf8' , (err, data) => {
  if (err) {
    console.error(err);
    return
  }
  app.listen(data || 1010);
});
