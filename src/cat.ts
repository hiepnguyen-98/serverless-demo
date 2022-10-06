import * as AWS from 'aws-sdk';
import * as uuid from 'uuid';
// import { APIGatewayProxyHandler } from "aws-lambda";
let dynamoDb = null;

dynamoDb = new AWS.DynamoDB.DocumentClient({
    endpoint: "http://192.168.2.68:8000",
    region: 'local',
  });

export function findUserById(event, context, callback) {
  const id =  1*event.queryStringParameters.id;

  const params = {
    Key: {
      id,
    },
    TableName: 'Scranton',
  };
  
  const response = {
    statusCode: 200,
    headers: {
      'x-custom-header' : 'my custom header value'
    },
    body: ''
  };
  dynamoDb.get(params, (err, data) => {
    if (err) {
      response.statusCode = 500;
      response.body = JSON.stringify({message: err.toString()})
    } else {
      response.body = JSON.stringify(data.Item);
    }
    callback(null, response);
  });
}

export function insertUser(event, context, callback) {
 
  const user = JSON.parse(event.body)

  const params = {
      TableName: "Scranton",
      Item: user
  };
  dynamoDb.put(params, function(err, data) {
      if (err) {
          console.log(err);
          const response = {
            statusCode: 200,
            headers: {
              'x-custom-header' : 'my custom header value'
            },
            body: err
          };
          callback(null, response);
      } else {
          console.log('Thanh cong')
          const response = {
            statusCode: 200,
            headers: {
              'x-custom-header' : 'my custom header value'
            },
            body: 'Thanh cong'
          };
          callback(null, response);
      }
  });
}

export function findAll(event, context, callback) {
  
  const params = {
    TableName: "Scranton",
}
  
  const response = {
    statusCode: 200,
    headers: {
      'x-custom-header' : 'my custom header value'
    },
    body: ''
  };

  dynamoDb.scan(params).promise().then( data =>{
    response.body = JSON.stringify(data)
    callback(null, response);
  })
  .catch(err=>{
    response.body = JSON.stringify(err)
    callback(null, response);
  })
}
