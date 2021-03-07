"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const pg_1 = require("pg");
const crypt_handler_1 = require("../handler/crypt.handler");
var poolConnection;
class Database {
    static init() {
        poolConnection = new pg_1.Pool({
            user: crypt_handler_1.Crypt.decrypt(process.env.PG_USER),
            host: crypt_handler_1.Crypt.decrypt(process.env.PG_HOST),
            database: crypt_handler_1.Crypt.decrypt(process.env.PG_DATABASE),
            password: crypt_handler_1.Crypt.decrypt(process.env.PG_PASSWORD),
            port: parseInt(crypt_handler_1.Crypt.decrypt(process.env.PG_PORT)),
        });
        return poolConnection;
    }
    getPoolConnection() {
        return poolConnection;
    }
}
exports.Database = Database;
//# sourceMappingURL=connection.pg.fdn.js.map