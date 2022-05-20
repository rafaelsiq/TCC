import Joi from 'joi';

export const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
export default {
    createAds: {
        body: {
            user: Joi.string(),
            title: Joi.string(),
            text: Joi.string(),
            fileURL: Joi.string(),
            startDate: Joi.string(),
            endDate: Joi.string(),
            startHour: Joi.string(),
            tags: Joi.string(),
            value: Joi.number(),
            slug: Joi.string(),
        },
    },
    updateAd: {
        body: {
            user: Joi.string(),
            title: Joi.string(),
            text: Joi.string(),
            fileURL: Joi.string(),
            startDate: Joi.string(),
            endDate: Joi.string(),
            startHour: Joi.string(),
            tags: Joi.string(),
            value: Joi.number(),
            slug: Joi.string(),
        },
    },
};