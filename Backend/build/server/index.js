"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
console.log(process.env.PORT);
app_1.default.listen(process.env.PORT ? process.env.PORT : 5000);
//# sourceMappingURL=index.js.map