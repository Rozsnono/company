import { Request, Response, Router } from "express";
import Controller from "../interfaces/controller.interface";

export default class User implements Controller{
    public router = Router();

    constructor(){
        this.router.get("/skins", this.getAll);
        this.router.get("/skin", this.getPag);
        this.router.get("/one", this.getOne);
    }

    private getAll = async (req: Request, res: Response) => {
        fetch("https://csgobackpack.net/api/GetItemsList/v2/?currency=eur")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.status(400).send({ message: error.message });
            });
    };

    private getPag = async (req: Request, res: Response) => {
        
        const offset = parseInt(req.query.offset as string);
        const limit = parseInt(req.query.limit as string);
        const filter = req.query.filter as string;
        
        fetch("https://csgobackpack.net/api/GetItemsList/v2/?currency=eur")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if(filter != null){
                    const items = Object.values(data.items_list).filter((item: any) => item.name.toLowerCase().includes(filter.toLowerCase()));
                    const total = items.length;

                    console.log(items);
                    console.log(offset, limit)

                    res.send({
                        total: total, 
                        items: items.slice(offset, offset + limit)
                    });
                }else{
                    const items = Object.values(data.items_list);
                    const total = items.length;

                    res.send({
                        total: total, 
                        items: items.slice(offset, offset + limit)
                    });
                }

               
            })
            .catch(error => {
                res.status(400).send({ message: error.message });
            });
    };

    private getOne = async (req: Request, res: Response) => {
        const id = req.query.id as string;

        fetch(" http://csgobackpack.net/api/GetItemPrice/?currency=eur&icon=true&id="+id)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.status(400).send({ message: error.message });
            });
    };
}
