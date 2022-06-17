"use strict"

const app = require("../app");
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`${PORT} 포트로 서버 가동`);
})