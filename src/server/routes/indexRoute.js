const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => res.render("i", { page: "main" }))
Router.get("/adduser", (req, res) => res.render("i", { page: "adduser" }))
Router.get("/users", (req, res) => res.render("i", { page: "users" }))
Router.get("/addcomputer", (req, res) => res.render("i", { page: "addcomputer" }))
Router.get("/computers", (req, res) => res.render("i", { page: "computers" }))
Router.get("/domaininformation", (req, res) => res.render("i", { page: "domaininformation" }))
Router.get("/whatsthis", (req, res) => res.render("i", { page: "whatsthis" }))
Router.get("/edituser", (req, res) => res.render("i", { page: "edituser" }))
Router.get("/editcomputer", (req, res) => res.render("i", { page: "editcomputer" }))

module.exports = Router