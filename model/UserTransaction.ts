import { QueryResult } from 'pg'
import { Database } from './../configuration/connection.pg.fdn'

export class UserTransactionModel {

    async getUserTransaction() : Promise<QueryResult> {
        try {
            const connection = new Database();
            const result: QueryResult = connection.getPoolConnection().query('select * from fdn_user_detail_transaction');
            return Promise.resolve(result)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}