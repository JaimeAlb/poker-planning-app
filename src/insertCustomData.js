import * as uuid from "uuid";
import handler from "./util/handler";
import dynamoDb from "./util/dynamodb";

export const main = handler(async (event) => {
  const data = JSON.parse(event.body);
  console.log(data);
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      userId: data.userId, // The id of the author
      noteId: uuid.v1(), // A unique uuid
      custom: data.custom,
      // custom2: data.custom,
    },
  };

  await dynamoDb.put(params);

  return params.Item;
  // return "ok";
});