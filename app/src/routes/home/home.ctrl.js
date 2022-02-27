// 컨트롤러 분리
"use strict";

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    }
}

const users = {
    id: ["jiwoo", "jiyung", "miae"],
    psword: ["1234", "5678", "9999"],
};

const process = {
    login: (req, res) => {
        // console.log(req.body);
        const id = req.body.id,
        psword = req.body.psword;

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword.includes(psword)) {
                return res.json({ // 성공 시 프론트엔드에 res로 반환
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "fail to login",
        });
    }
}

module.exports = { // 오브젝트를 사용하여 모듈을 export
    output,
    process
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