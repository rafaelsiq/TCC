import { Router } from 'express';
import validate from 'express-validation';
import * as adController from './advertsement.controller';
import { authJwt } from '../../services/auth.services';
import adValidation from './advertsement.validation';

const routes = new Router();
routes.post('/', authJwt, validate(adValidation.createAds), adController.createAds,);
routes.patch('/:id', authJwt, validate(adValidation.updateAd), adController.updateAd,);
routes.delete('/:id', authJwt, adController.deleteAd);
routes.get('/:id', adController.getAdById)
routes.get('/', adController.getAdsList);
export default routes;