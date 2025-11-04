import { DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE_NAME } from '../lib/dynamo.js';
import { noContent, serverError } from '../lib/responses.js';

export const handler = async (event) => {
  try {
    const id = event.pathParameters?.id;
    await ddb.send(new DeleteCommand({ TableName: TABLE_NAME, Key: { id } }));
    return noContent();
  } catch (e) { return serverError(e); }
};
