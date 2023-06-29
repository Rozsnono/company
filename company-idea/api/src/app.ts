import express, { Express, Application, Router } from "express";
import mongoose from "mongoose";
import fs from "fs";
import * as path from 'path';


import cors from "cors";

export default class App {
    // public app: express.Application;

    constructor() {
        // this.app = express();
        // this.app.use(cors())
        // this.connectToTheDatabase().then(() => {
        //     this.listen()
        // });
        // this.app.use(express.json());

        // controllers.forEach(controller => {
        //     this.app.use("/api", controller.router);
        // });

    }



    // public listen(): void {
    //     this.app.listen(8080, () => {
    //         console.log("Az alkalmazás a 8080-es porton elérhető!");
    //     })
    // }

    private async connectToTheDatabase() {
        mongoose.set("strictQuery", true);
        try {
            await mongoose.connect("mongodb://127.0.0.1:27017/Sender", { connectTimeoutMS: 10000 });
        } catch (error: Error | any) {
            console.log({ message: error.message });
        }
    }
}