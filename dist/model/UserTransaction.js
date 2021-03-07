"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTransactionModel = void 0;
const connection_pg_fdn_1 = require("./../configuration/connection.pg.fdn");
class UserTransactionModel {
    async getUserTransaction() {
        try {
            const connection = new connection_pg_fdn_1.Database();
            const result = connection.getPoolConnection().query('select * from fdn_user_detail_transaction');
            return Promise.resolve(result);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
}
exports.UserTransactionModel = UserTransactionModel;
//# sourceMappingURL=UserTransaction.js.map