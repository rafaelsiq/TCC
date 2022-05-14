import validate from 'express-validation';
import { Router } from 'express';
import * as userController from './user.controller';
import userValidations from './user.validations';
import { authLocal } from '../../services/auth.services';

const routes = new Router();

routes.post('/signup', validate(userValidations.signup), userController.signUp); //ok
routes.post('/login', authLocal, userController.login); //ok
routes.patch('/update', validate(userValidations.update), userController.validateUser, userController.updateById); //ok
routes.delete('/delete', userController.validateUser, userController.deleteUser,);
routes.get('/', userController.getUsersList) //ok

export default routes;