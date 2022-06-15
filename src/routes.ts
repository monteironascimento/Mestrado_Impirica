import { Router, Request, Response } from 'express';

import { processar } from './controller/RepositoriosControle';
 
const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.json({status: process.env.NODE_ENV})
})

routes.get('/processar', processar);


export default routes;