"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./src/config/db"));
const logger_1 = __importDefault(require("./logger"));
const auth_1 = __importDefault(require("./src/routes/auth"));
// import hotelRoute from "./routes/hotels";
// import roomRoute from "./routes/rooms";
const user_1 = __importDefault(require("./src/routes/user"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
/* Loading the environment variables from the .env file. */
require("dotenv").config();
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/api/v1/auth", auth_1.default);
app.use("/api/v1/user", user_1.default);
// app.use("/api/v1/room", roomRoute);
// app.use("/api/v1/hotel", hotelRoute);
app.use(express_1.default.static(path_1.default.join(__dirname, "../../client/dist")));
const corsOptions = {
    origin: process.env.FRONT_END_URL, // Allow only this origin to send requests
    credentials: true, // Allowing credentials
};
app.use((0, cors_1.default)(corsOptions));
const errorHandlerMiddleware = (error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    res.status(status).send({
        status,
        message,
    });
};
// error middleware
app.use(errorHandlerMiddleware);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.info(`Server is running in mode on ${PORT}`);
    yield (0, db_1.default)();
}));
