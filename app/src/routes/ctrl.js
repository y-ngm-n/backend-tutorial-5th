"use strict"

const User = require("../models/User");

const view = {
    root: (req, res) => res.send("여기는 루트입니다."),
    login: (req, res) => res.render("login"),
    register: (req, res) => res.render("register")
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const rslt = await user.login();
        res.json(rslt);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const rslt = await user.register();
        res.json(rslt);
    }
};


module.exports = { view, process };