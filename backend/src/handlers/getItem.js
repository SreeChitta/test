import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE_NAME } from '../lib/dynamo.js';
import { ok, notFound, serverError } from '../lib/responses.js';

export const handler = async (event) => {
  try {
    const id = event.pathParameters?.id;
    const { Item } = await ddb.send(new GetCommand({ TableName: TABLE_NAME, Key: { id } }));
    if (!Item) return notFound('Item not found');
    return ok(Item);
  } catch (e) { return serverError(e); }
};
