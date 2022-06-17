"use strict"

const UserStorage = require("./UserStorage");

class User {

    // 생성자
    constructor(data) {
        this.data = data;
    }

    // 로그인 메서드 : id 존재 여부 / id로 pw 검증
    login = async () => {
        const db = await UserStorage.getFields(false, "id", "pw");
        if (db.id.includes(this.data.id)) {
            const idx = db.id.indexOf(this.data.id);
            if (db.pw[idx] === this.data.pw) return { success: true };
            return { success: false, msg: "비밀번호가 틀렸습니다." };
        }
        return { success: false, msg: "존재하지 않는 아이디입니다." };
    }

}


module.exports = User;