import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import { ddb, TABLE_NAME } from '../lib/dynamo.js';
import { ok, serverError } from '../lib/responses.js';

export const handler = async () => {
  try {
    const { Items } = await ddb.send(new ScanCommand({ TableName: TABLE_NAME }));
    return ok(Items || []);
  } catch (e) { return serverError(e); }
};
