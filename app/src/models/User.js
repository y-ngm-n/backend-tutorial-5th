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

    // 회원가입 메서드 : id 중복 여부 / 파일에 데이터 추가
    register = async () => {
        const ids = await UserStorage.getFields(false, "id");
        if (ids.id.includes(this.data.id)) return { success: false, msg: "이미 존재하는 아이디입니다." };
        else {
            UserStorage.createUser(this.data);
            return { success: true };
        }
    }

}


module.exports = User;