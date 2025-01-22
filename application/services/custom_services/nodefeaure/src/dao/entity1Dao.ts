import * as mongoose from 'mongoose';
import entity1Model from '../models/daomodels/entity1';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class entity1Dao {
    private entity1 = entity1Model;

    

    constructor() { }
    
    public async Create(entity1Data, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entity1Dao.ts: Create');

    let temp = new entity1Model(entity1Data);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entity1Dao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Delete(entity1Id, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entity1Dao.ts: Delete');

    

    
    
    
    this.entity1.findByIdAndRemove(entity1Id).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entity1Dao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(entity1Data, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entity1Dao.ts: GetNounCreatedBy');

    

    
    
    
    this.entity1.aggregate(([
                        { $match: { $and: [{ created_by: entity1Data.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entity1Dao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}