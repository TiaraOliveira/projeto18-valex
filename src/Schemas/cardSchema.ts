import Joi from "joi";

const creationSchema = Joi.object({
  type: Joi.string().valid('groceries', 'restaurant', 'transport', 'education', 'health').required()
});
  
export default creationSchema;