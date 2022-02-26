"use strict";

const app = require("../app");
const PORT = 3000;

app.listen(PORT, () => { // listen이 존재하는 파일을 실행시켜야 함
    console.log("app 가동");
});