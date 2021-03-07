"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_base_1 = require("./router.base");
const userTransaction_controller_1 = require("../controller/userTransaction.controller");
const facebookFeed_1 = require("../controller/facebookFeed");
class Router extends router_base_1.BaseRoutes {
    routes() {
        this.router.get("/user_transaction", userTransaction_controller_1.UserTransactionController.getUserTransaction);
        this.router.post("/user_feed", facebookFeed_1.facebookUserUser.main);
    }
}
exports.default = new Router().router;
//# sourceMappingURL=index.js.map