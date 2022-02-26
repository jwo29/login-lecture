// 컨트롤러 분리
"use strict";

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = { // 오브젝트를 사용하여 모듈을 export
    home,
    login
};

/**
 * {key: value} 인데
 * {key} 만 입력할 경우
 * 자동으로
 * {key: key}로 인식
 * 
 * 따라서 위의 모듈 export 코드는
 * {
 *     home: home,
 *     login: login
 * }; 과 동일
 */