import json


def lambda_handler(event, context):
    headers = {"Access-Control-Allow-Origin": "*", "Accept": "application/json"}
    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"status": "success", "data": {}}),
    }