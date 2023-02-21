const Joi = require('joi');
const userController = require('./controllers');

module.exports = [
    {
        method : 'POST',
        path : '/users',
        handler: userController.createUser,
        options: {
            validate: {
                payload:  Joi.object({
                    name : Joi.string(),
                    email: Joi.string(),
                    phoneNumber: Joi.string(),
                }),
            }
        }
    },
    {
        method : 'GET',
        path : '/users',
        handler: userController.getAllUsers,
        config: {
            description: 'Get all users',
            tags: ['api', 'Batch'],
            auth: false,
        }
       
    }
];

