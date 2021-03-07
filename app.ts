import express,{Application} from 'express'
import cors from 'cors'

import { Database } from "./configuration/connection.pg.fdn"
import Router from './router' 

class App{
    app: Application;

    constructor() {
        this.app = express();
        this.config()
    }

    async config(): Promise<void>{
        this.app.use(cors({
            "origin": "*",
            "methods": "GET,POST,OPTIONS",
        }))
        this.app.use(express.json({ limit: "2mb" }));
        this.app.use("/", Router);
        this.app.set('view engine', 'pug')
        this.app.get('/test', function (req, res) {
            res.render('index', { title: 'Hey', message: 'Hello there!' })
        })
        Database.init()
    }
}

export default new App().app;

