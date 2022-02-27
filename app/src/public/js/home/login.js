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
    console.log(JSON.stringify(req));

    // 서버에 전달
    fetch("/login", { // /login 경로에 전달
        method: "POST", // /login 경로로 POST 메서드로 접근할 수 있는 서버 API가 있어야 함
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req), // 오브젝트를 JSON으로 변경하여 서버에 전달 
    });
}