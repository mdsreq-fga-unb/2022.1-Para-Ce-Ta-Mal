import Joi from "joi";

export const drugSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().uri().required(),
  ean: Joi.string().required(),
  amount: Joi.string().required(),
  salePrice: Joi.number().integer().required(),
  purchasePrice: Joi.number().integer().required(),
  category: Joi.number().integer().required(),
  maxDiscountPercentage: Joi.number().integer(),
  percentageOfCommission: Joi.number().integer(),
  fixedCommissionValue: Joi.number().integer(),
  description: Joi.string(),
});
