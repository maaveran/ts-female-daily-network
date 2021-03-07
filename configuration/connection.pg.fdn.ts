import {Pool} from 'pg'
import {Crypt} from '../handler/crypt.handler'

var poolConnection: any;


export class Database {
    static init():void {
        poolConnection = new Pool({
            user: Crypt.decrypt(process.env.PG_USER),
            host: Crypt.decrypt(process.env.PG_HOST),
            database: Crypt.decrypt(process.env.PG_DATABASE),
            password: Crypt.decrypt(process.env.PG_PASSWORD),
            port: parseInt(Crypt.decrypt(process.env.PG_PORT)),
        })

        return poolConnection;
    }

    public getPoolConnection() {
        return poolConnection;
    }
}