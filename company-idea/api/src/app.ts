import express, { Express, Application, Router } from "express";
import IController from "interfaces/controller.interface";
import fs from "fs";

import cors from "cors";

export default class App {
    public app: express.Application;

    constructor(controller: IController) {
        this.app = express();
        this.app.use(cors())
        this.app.use(express.json());

        this.app.use('/api', controller.router);
        this.listen();
    }


    public listen(): void {
        this.app.listen(8080, () => {
            console.log("Az alkalmazás a 8080-es porton elérhető!");
        })
    }
}