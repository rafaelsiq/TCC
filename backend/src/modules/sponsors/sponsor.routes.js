import { Router } from 'express';
import validate from 'express-validation';
import * as sponsorController from './sponsor.controller';
import sponsorValidations from './sponsor.validations';
const routes = new Router();

routes.post('/signup', validate(sponsorValidations.signup), sponsorController.signUp);
export default routes;