import Joi from 'joi';

export const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
export default {
    signup: {
        type: Joi.string(),
        email: Joi.string().email(),
        password: Joi.string().regex(passwordReg).required(),
        firstName: Joi.string(),
        lastName: Joi.string(),
        userName: Joi.string(),
        links: Joi.string(),
        cpf: Joi.string(),
        tags: Joi.string(),
        ads: Joi.string(),
        cnpj: Joi.string(),
    },
    update: {
        password: Joi.string().regex(passwordReg),
    }
};
