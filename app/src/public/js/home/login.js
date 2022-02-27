"use strict";

// 로그인 기능 구현

const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };

    console.log(req);
    // 서버에 전달
    // fetch();
}