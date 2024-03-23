import { HttpError } from 'wasp/server'

export const createCostEstimate = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.CostEstimate.create({
    data: {
      awsCost: args.awsCost,
      isEnterprise: args.isEnterprise,
      userId: context.user.id
    }
  });
}