"use strict"

const express = require("express");
const router = require("./src/routes/index");
const app = express();

// 앱 세팅
app.set("views", "./src/views");  // 렌더링 세팅 : 파일 경로
app.set("view engine", "ejs");  // 렌더링 세팅 : 엔진 설정

// 미들웨어
app.use(express.json());  // req.body json으로 파싱
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));  // 정적파일 경로 지정
app.use("/", router);  // 라우팅




module.exports = app;