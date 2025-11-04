import { UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE_NAME } from '../lib/dynamo.js';
import { ok, badRequest, serverError } from '../lib/responses.js';

export const handler = async (event) => {
  try {
    const id = event.pathParameters?.id;
    const body = JSON.parse(event.body || '{}');
    if (!body.name) return badRequest('name is required');
    const result = await ddb.send(new UpdateCommand({
      TableName: TABLE_NAME,
      Key: { id },
      UpdateExpression: 'SET #n = :n, #d = :d, updatedAt = :u',
      ExpressionAttributeNames: { '#n': 'name', '#d': 'description' },
      ExpressionAttributeValues: { ':n': body.name, ':d': body.description || '', ':u': new Date().toISOString() },
      ReturnValues: 'ALL_NEW'
    }));
    return ok(result.Attributes);
  } catch (e) { return serverError(e); }
};
