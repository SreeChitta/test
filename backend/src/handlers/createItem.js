import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { v4 as uuid } from 'uuid';
import { ddb, TABLE_NAME } from '../lib/dynamo.js';
import { created, badRequest, serverError } from '../lib/responses.js';

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}');
    if (!body.name) return badRequest('name is required');
    const item = { id: uuid(), name: body.name, description: body.description || '', createdAt: new Date().toISOString() };
    await ddb.send(new PutCommand({ TableName: TABLE_NAME, Item: item }));
    return created(item);
  } catch (e) { return serverError(e); }
};
