"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express = require("express");
var routes_1 = require("./routes");
var app = express();
app.use(express.json());
app.use(routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map