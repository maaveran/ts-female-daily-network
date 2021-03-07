import { Request, Response } from "express";
import { UserTransactionModel } from '../model/UserTransaction'
 
export class UserTransactionController  {
    static async getUserTransaction(req: Request, res : Response) {
        try {
            const modelUserTransaction = new UserTransactionModel();
            const getData = await modelUserTransaction.getUserTransaction();

            if (getData.rowCount == 0) {
                res.status(400).send({ data : getData.rows, type : 'EMPTY DATA'})
            } else {
                res.status(200).send({data : getData.rows, type  : "SUCCESS"})  
            }
        } catch (error) {
            res.status(500)
                .json({
                    type: 'UNHANDLE_ERROR',
                    message : error.message
               })
        }
    }
}

