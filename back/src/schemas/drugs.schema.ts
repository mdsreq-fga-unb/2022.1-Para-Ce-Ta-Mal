import Joi from "joi";

export const drugSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().uri().required(),
  ean: Joi.string().required(),
  amount: Joi.number().integer().required(),
  salePrice: Joi.number().integer().required(),
  purchasePrice: Joi.number().integer().required(),
  category: Joi.string().required(),
  maxDiscountPercentage: Joi.number(),
  percentageOfCommission: Joi.number(),
  fixedCommissionValue: Joi.number().integer(),
  description: Joi.string(),
});
