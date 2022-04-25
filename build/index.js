"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var rout_1 = __importDefault(require("./router/rout"));
var app = (0, express_1.default)();
var port = 3000;
app.use('/api', rout_1.default);
app.listen(port, function () {
    console.log("server hosting from localhost:".concat(port));
});
exports.default = app;
