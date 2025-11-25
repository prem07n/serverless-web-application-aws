const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require("uuid");

exports.handler = async (event) => {
    const data = JSON.parse(event.body);

    const item = {
        id: uuidv4(),
        name: data.name,
        message: data.message
    };

    await dynamodb.put({
        TableName: "ServerlessTable",
        Item: item
    }).promise();

    return {
        statusCode: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ message: "Data stored successfully!" })
    };
};
