import { Request, Response } from 'express';
import { usersService } from '../service/usersService';
import { CustomLogger } from '../config/Logger'
let users = new usersService();

export class usersController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    users.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usersController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usersController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    users.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usersController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usersController.ts: GpGetNounCreatedBy');
    })}


}