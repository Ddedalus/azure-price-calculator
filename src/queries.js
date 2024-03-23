import { HttpError } from 'wasp/server'

export const getCostEstimate = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  const costEstimate = await context.entities.CostEstimate.findUnique({
    where: { id: args.id },
    select: { awsCost: true, isEnterprise: true, userId: true }
  });

  if (!costEstimate) { throw new HttpError(400, 'CostEstimate not found') }
  if (costEstimate.userId !== context.user.id) { throw new HttpError(400, 'CostEstimate does not belong to the user') }

  return costEstimate;
}