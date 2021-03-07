"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRoutes = void 0;
const express_1 = require("express");
class BaseRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
}
exports.BaseRoutes = BaseRoutes;
//# sourceMappingURL=router.base.js.map