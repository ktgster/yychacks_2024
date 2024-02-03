"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
var express_1 = require("express");
var http_1 = require("http");
var cors_1 = require("cors");
var app = (0, express_1.default)();
var server = http_1.default.createServer(app);
//app.use(express.static("views", { "extensions": ["html", "htm"] }));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use((0, cors_1.default)({ origin: '*', optionsSuccessStatus: 204 }));
app.get('/', function (req, res) {
    res.send('Hello World!');
});
var PORT = process.env.PORT || 5000;
// SERVER LISTEN ==================================================
server.listen(PORT, function () {
    console.info("Server has started listening on port ".concat(PORT));
});
