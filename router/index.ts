import { BaseRoutes } from "./router.base";
import { UserTransactionController } from "../controller/userTransaction.controller";
import { facebookUserUser } from "../controller/facebookFeed";

class Router extends BaseRoutes {
  public routes(): void {
    this.router.get("/user_transaction", UserTransactionController.getUserTransaction);
    this.router.post("/user_feed",facebookUserUser.main) 
  }
}

export default new Router().router;