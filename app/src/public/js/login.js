"use strict"

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const btn = document.querySelector("#btn");

const login = () => {
    const body = { id: id.value, pw: pw.value };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    .then((res) => { return res.json(); })
    .then((res) => {
        if (res.success) location.href = "/";
        else alert(res.msg);
    })
    .catch((err) => console.error(new Error("로그인 중 에러 발생")));
};

btn.addEventListener("click", login);
