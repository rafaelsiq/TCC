import { Router } from 'express';
import * as streamerController from './streamer.controller';
import validate from 'express-validation';
import streamerValidations from './streamer.validations';
import { authLocal } from '../../services/auth.services';

const routes = new Router();

routes.post('/signup', validate(streamerValidations.signup), streamerController.signUp);
routes.post('/login', authLocal, streamerController.login)

export default routes;