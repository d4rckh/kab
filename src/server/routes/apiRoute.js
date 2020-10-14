const bodyParser = require("body-parser")
const express = require("express");
const Router = express.Router();

const UserClass = require("../../classes/User")
const ComputerClass = require("../../classes/Computer")
const dataStorage = require("../../dataStorage")

Router.get("/domain", (req, res) => {
    res.json(dataStorage.getDN())
})

Router.post("/updatedomaininformation", (req, res) => {
    dataStorage.setDNNBN(req.body.NetBios_Name)
    dataStorage.setDNDN(req.body.domainName)
    //res.sendStatus(200)
    res.redirect("/domaininformation")
})

Router.post("/user", (req, res) => {
    const userid = (dataStorage.addUser({
        password: req.body.password,
        username: req.body.username,
        SPNs: req.body.SPNs,
        isDA: req.body.isDA,
        isService: req.body.isService
    }))
    // res.send(userid)
    res.redirect("/users")
})

Router.get("/user", (req, res) => {
    res.json(dataStorage.getUsers().map(a => new UserClass(a)))
})

Router.get("/problems", (req, res) => {
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

Router.post("/computer", (req, res) => {
    const computerid = (dataStorage.addComputer({
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
    res.redirect("/computers")
})
Router.get("/computer", (req, res) => {
    res.json(dataStorage.getComputers().map(a => new ComputerClass(a)))
})

module.exports = Router