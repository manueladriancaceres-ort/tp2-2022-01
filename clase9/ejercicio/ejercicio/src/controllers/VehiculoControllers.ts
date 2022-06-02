import express from 'express'
import {VehiculoDaoMongodb} from '../repository/VehiculoDaoMongodb.js'

class VehiculoController {

    async getAll(req: express.Request, res: express.Response) {
        const vehiculoDaoMongodb : VehiculoDaoMongodb = new VehiculoDaoMongodb();
        res.status(200).send( await vehiculoDaoMongodb.getAll());
    }

    async add (req: express.Request, res: express.Response) {
        const vehiculoDaoMongodb : VehiculoDaoMongodb = new VehiculoDaoMongodb();
        res.status(200).send( await vehiculoDaoMongodb.add(req.body));
    }

}

export default new VehiculoController();