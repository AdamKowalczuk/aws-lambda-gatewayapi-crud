import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
const REGION = "eu-central-1";
const ddbClient = new DynamoDBClient({ region: REGION });
export { ddbClient };
