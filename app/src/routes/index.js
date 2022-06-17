"use strict"

const router = require("express").Router();
const ctrl = require("./ctrl");


// 라우팅
router.get("/", ctrl.view.root);
router.get("/login", ctrl.view.login);
router.get("/register", ctrl.view.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);


module.exports = router;