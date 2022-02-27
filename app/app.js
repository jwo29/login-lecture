"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views"); // 뷰 엔진 세팅. views를 관리해줄 폴더 지정
app.set("view engine", "ejs"); // html 파일을 ejsd 뷰 엔진으로 해석할 것임
app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.json()); // 바디파서가 json 데이터를 파싱할 수 있도록 미들웨어 등록
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함된 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home) // use() - 미들웨어를 등록하는 메서드

module.exports = app;