const bodyParser = require("body-parser")
const express = require("express");
const app = express();

const UserClass = require("./src/classes/User")
const ComputerClass = require("./src/classes/Computer")
const dataStorage = require("./dataStorage")

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.set("view engine", "ejs");


app.get("/api/domain", (req, res) => {
    res.json(dataStorage.getDN())
})

app.post("/api/updatedomaininformation", (req, res) => {
    dataStorage.setDNNBN(req.body.NetBios_Name)
    dataStorage.setDNDN(req.body.domainName)
    res.sendStatus(200)
})

app.post("/api/user", (req, res) => {
    res.send(dataStorage.addUser({
        password: req.body.password,
        username: req.body.username,
        SPNs: req.body.SPNs.split(","),
        isDA: req.body.isDA,
        isService: req.body.isService
    }))
})

app.get("/api/user", (req, res) => {
    res.json(dataStorage.getUsers().map(a => new UserClass(a)))
})

app.get("/api/problems", (req, res) => {
    var problems = []
    
    const dn = dataStorage.getDN()

    if (!dn.domainName || !dn.NetBios_Name ) problems.push({
        name: "The domain IS NOT SETUP!",
        prority: 4,
        type: "danger",
        solveLink: "/domaininformation",
        description: "The domain information is missing! WITHOUT THIS NOTHING WILL WORK!"
    })
    if (dataStorage.getUsers().length == 0) problems.push({
        name: "No users added",
        prority: 4,
        type: "warning",
        solveLink: "/adduser",
        description: "The User database is empty, you have to add a user to enable most of the features of this application!"
    })
    if (dataStorage.getComputers().length == 0) problems.push({
        name: "No computers added",
        prority: 4,
        type: "warning",
        solveLink: "/addcomputer",
        description: "The Computer database is empty, you have to add a computer to enable most of the features of this application!"
    })
    res.json(problems)
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
