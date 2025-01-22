import { Request, Response } from 'express';
import {entity1Dao} from '../dao/entity1Dao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';







let entity1 = new entity1Dao();

export class entity1Service {
    
    constructor() { }
    
    public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entity1Service.ts: Create')
     let  entity1Data = req.body;
     entity1.Create(entity1Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entity1Service.ts: Create')
             
             
            callback(response);

         });
    }
    
public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entity1Service.ts: Delete')
     let  entity1Id = req.params.id;
     entity1.Delete(entity1Id,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entity1Service.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entity1Service.ts: GetNounCreatedBy')
     let  entity1Data = { created_by: req.query.createdby };
     entity1.GetNounCreatedBy(entity1Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entity1Service.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}