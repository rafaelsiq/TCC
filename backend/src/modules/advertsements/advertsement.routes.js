import { Router } from 'express';
import * as adController from './advertsement.controller';

const routes = new Router();

routes.post('/create', adController.validateUser, adController.createAd);
routes.post('/update', adController.validateUser, adController.updateById);
routes.delete('/delete', adController.validateUser, adController.deleteAd);

export default routes;