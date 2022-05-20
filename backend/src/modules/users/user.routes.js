import validate from 'express-validation';
import { Router } from 'express';
import * as userController from './user.controller';
import userValidations from './user.validations';
import { authLocal } from '../../services/auth.services';
import * as advertisementController from '../advertsements/advertsement.controller';

const routes = new Router();

routes.post('/signup', validate(userValidations.signup), userController.signUp); //ok
routes.post('/login', authLocal, userController.login); //ok
routes.patch('/update', validate(userValidations.update), userController.validateUser, userController.updateById); //ok
routes.delete('/delete', userController.validateUser, userController.deleteUser,);
routes.get('/', userController.getUsersList) //ok

routes.post('/ads/', userController.validateUser, advertisementController.createAd)
routes.patch('/ads/:id',userController.validateUser,advertisementController.updateById)
routes.get('/ads/all/:id', advertisementController.getUsersList)
routes.get('/ads/:id', advertisementController.getUserById)


export default routes;