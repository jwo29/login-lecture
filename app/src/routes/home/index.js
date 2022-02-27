// 라우팅 분리

"use strict"; // 이크마 스크립트 문법을 준수한다는 의미. 관례적으로 .js 코드 상단에 명시

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// 앱 세팅
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router; // 외부에서 router를 사용할 수 있도록 export