import {
    Router
} from 'express';
import * as administratorController from './administrator.controller';
import validate from 'express-validation';
import administratorValidations from './administrator.validations';

const routes = new Router();

routes.post('/signup', validate(administratorValidations.signup), administratorController.signUp);
export default routes;