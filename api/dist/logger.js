"use strict";
exports.__esModule = true;
var dayjs_1 = require("dayjs");
var pino_1 = require("pino");
var logger = (0, pino_1["default"])({
    transport: {
        target: "pino-pretty"
    },
    base: {
        pid: false
    },
    timestamp: function () { return ",\"time\": \"".concat((0, dayjs_1["default"])().format(), "\""); }
});
exports["default"] = logger;
