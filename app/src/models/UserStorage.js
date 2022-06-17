"use strict"

const fs = require("fs").promises;

class UserStorage {

    // db 그대로 가져오기
    static #users = fs.readFile("./src/databases/users.json", (err, data) => {
            return data;
        })
        .then((data) => { return JSON.parse(data); })

        
    // 특정 필드만 가져오기
    static getFields = async (isAll, ...fields) => {
        const db = await this.#users;
        if (isAll) return db;

        const part = {};
        for (var f in fields) { part[fields[f]] = db[fields[f]]; }
        return part;
    }

}


module.exports = UserStorage;