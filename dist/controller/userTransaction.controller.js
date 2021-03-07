"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTransactionController = void 0;
const UserTransaction_1 = require("../model/UserTransaction");
class UserTransactionController {
    static async getUserTransaction(req, res) {
        try {
            const modelUserTransaction = new UserTransaction_1.UserTransactionModel();
            const getData = await modelUserTransaction.getUserTransaction();
            if (getData.rowCount == 0) {
                res.status(400).send({ data: getData.rows, type: 'EMPTY DATA' });
            }
            else {
                res.status(200).send({ data: getData.rows, type: "SUCCESS" });
            }
        }
        catch (error) {
            res.status(500)
                .json({
                type: 'UNHANDLE_ERROR',
                message: error.message
            });
        }
    }
}
exports.UserTransactionController = UserTransactionController;
//# sourceMappingURL=userTransaction.controller.js.map