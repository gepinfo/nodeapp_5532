import { Request, Response, NextFunction } from "express";
import { entity1Controller } from '../controller/entity1Controller';


export class Routes {
    private entity1: entity1Controller = new entity1Controller();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/entity1').post(this.entity1.Create);
app.route('/entity1/:id').delete(this.entity1.Delete);
app.route('/entity1/userid/created_by').get(this.entity1.GetNounCreatedBy);
     }

}