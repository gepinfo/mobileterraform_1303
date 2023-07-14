import { Request, Response } from 'express';
import {usersDao} from '../dao/usersDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let users = new usersDao();

export class usersService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usersService.ts: GpCreate')
     let  usersData = req.body;
     users.GpCreate(usersData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from usersService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usersService.ts: GpGetNounCreatedBy')
     let  usersData = { created_by: req.query.createdby };
     users.GpGetNounCreatedBy(usersData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from usersService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}