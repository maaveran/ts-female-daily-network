"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_pg_fdn_1 = require("./configuration/connection.pg.fdn");
const router_1 = __importDefault(require("./router"));
class App {
    constructor() {
        this.app = express_1.default();
        this.config();
    }
    async config() {
        this.app.use(cors_1.default({
            "origin": "*",
            "methods": "GET,POST,OPTIONS",
        }));
        this.app.use(express_1.default.json({ limit: "2mb" }));
        this.app.use("/", router_1.default);
        this.app.set('view engine', 'pug');
        this.app.get('/test', function (req, res) {
            res.render('index', { title: 'Hey', message: 'Hello there!' });
        });
        connection_pg_fdn_1.Database.init();
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map