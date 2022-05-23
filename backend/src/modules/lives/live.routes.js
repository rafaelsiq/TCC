import { Router } from 'express';
import * as liveController from './live.controller';

const routes = new Router();

routes.post('/create', liveController.validateUser, liveController.createAd);
routes.post('/update', liveController.validateUser, liveController.updateById);
routes.delete('/delete', liveController.validateUser, liveController.deleteAd);

export default routes;