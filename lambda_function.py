import json
import boto3
import uuid

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('ServerlessTable')

def lambda_handler(event, context):
    body = json.loads(event['body'])

    item = {
        "id": str(uuid.uuid4()),
        "name": body["name"],
        "message": body["message"]
    }

    table.put_item(Item=item)

    return {
        "statusCode": 200,
        "headers": { "Access-Control-Allow-Origin": "*" },
        "body": json.dumps({"message": "Data stored successfully!"})
    }
