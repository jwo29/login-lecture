"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views"); // 뷰 엔진 세팅. views를 관리해줄 폴더 지정
app.set("view engine", "ejs"); // html 파일을 ejsd 뷰 엔진으로 해석할 것임

app.use("/", home) // use() - 미들웨어를 등록하는 메서드


module.exports = app;