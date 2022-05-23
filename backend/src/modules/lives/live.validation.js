import Joi from 'joi';

export default {
    createLives: {
        body: {
            adId: Joi.string(),
            userId: Joi.string(),
            value: Joi.string(),
            sponsorId: Joi.string()
        },
    }
};