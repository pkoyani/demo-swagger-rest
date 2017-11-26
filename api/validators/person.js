import Joi from 'joi';

const personSchema = Joi.object().keys({
  firstName: Joi.string().regex(/^[a-zA-Z]+$/).max(30).required(),
  lastName: Joi.string().regex(/^[a-zA-Z]+$/).max(30).required(),
  id: Joi.number().integer(),
});

const validate = person =>
  new Promise((resolve, reject) => {
    try {
      const result = Joi.validate(person, personSchema);
      resolve({ isValid: result.error === null, message: result.error ? result.error.details[0].message : '' });
    } catch (err) {
      reject(err);
    }
  });
export default validate;
