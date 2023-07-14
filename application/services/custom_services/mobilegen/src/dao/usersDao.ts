import * as mongoose from 'mongoose';
import usersModel from '../models/daomodels/users';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class usersDao {
    private users = usersModel;
    constructor() { }
    
    public async GpCreate(usersData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into usersDao.ts: GpCreate');

    let temp = new usersModel(usersData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from usersDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(usersData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into usersDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.users.aggregate(([
                        { $match: { $and: [{ created_by: usersData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from usersDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}