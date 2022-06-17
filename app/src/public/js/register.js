"use strict"

const id = document.querySelector("#id");
const name = document.querySelector("#name")
const pw = document.querySelector("#pw");
const pwConfirm = document.querySelector("#pw-confirm");
const btn = document.querySelector("#btn");

const register = () => {
    if (!id.value) alert("아이디를 입력해주십시오.");
    else if (!name.value) alert("이름을 입력해주십시오.");
    else if (!pw.value) alert("비밀번호를 입력해주십시오.");
    else if (!pwConfirm.value) alert("비밀번호를 한 번 더 입력해주십시오.");

    else if (pw.value !== pwConfirm.value) alert("비밀번호가 다릅니다.");

    else {
        const body = { id: id.value, pw: pw.value, name: name.value };

        fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then((res) => { return res.json(); })
        .then((res) => {
            if (res.success) location.href = "/login";
            else alert(res.msg);
        })
        .catch((err) => console.error(new Error("회원가입 중 에러 발생")));
    }

    
};

btn.addEventListener("click", register);
