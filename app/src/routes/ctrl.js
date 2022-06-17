"use strict"

const view = {
    root: (req, res) => res.send("여기는 루트입니다."),
    login: (req, res) => res.render("login"),
    register: (req, res) => res.render("register")
};

const process = {
    login: (req, res) => {
        const user = req.body;
        console.log(user);
    }
};


module.exports = { view, process };