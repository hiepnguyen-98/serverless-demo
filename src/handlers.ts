// import * as AWS from 'aws-sdk';
// import * as uuid from 'uuid';
// // import { APIGatewayProxyHandler } from "aws-lambda";
// let dynamoDb = null;

// dynamoDb = new AWS.DynamoDB.DocumentClient({
//     endpoint: "http://192.168.2.68:8000",
//     region: 'local',
//   });

// function parseBody(body: string): any {
//   try {
//     return JSON.parse(body);
//   } catch {
//     return {};
//   }
// }

// export function createCat(event, context, callback) {
//   const {name, mood} = parseBody(event.body);
//   const params = {
//     Item: {
//       id: uuid.v4(),
//       mood: mood,
//       name: name,
//     },
//     TableName: 'cats',
//   };
//   const response = {
//     statusCode: 200,
//     headers: {
//       'x-custom-header' : 'my custom header value'
//     },
//     body: ''
//   };
//   dynamoDb.put(params, (err) => {
//     if (err) {
//       response.statusCode = 500;
//       response.body = JSON.stringify({message: err.toString()})
//     } else {
//       response.body = JSON.stringify(params.Item);
//     }
//     callback(null, response);
//   });
// }

// export function findCatById(event, context, callback) {
//   const id = 1998;
//   const params = {
//     Key: {
//       id,
//     },
//     TableName: 'Scranton',
//   };
//   const response = {
//     statusCode: 200,
//     headers: {
//       'x-custom-header' : 'my custom header value'
//     },
//     body: ''
//   };
//   dynamoDb.get(params, (err, data) => {
//     if (err) {
//       response.statusCode = 500;
//       response.body = JSON.stringify({message: err.toString()})
//     } else {
//       response.body = JSON.stringify(data.Item);
//     }
//     callback(null, response);
//   });
// }

// // export function findCatById(event, context, callback) {

// //   const AWS = require("aws-sdk");
// //   AWS.config.update({
// //   region: "local",
// //   endpoint: "http://192.168.2.68:8000"
// //   });
// //   const user = {
// //     "id": 1998,
// //     "name": "Nguyen van aaaa",
// //   } 
// //   const params = {
// //       TableName: "Scranton",
// //       Item: user
// //   };
// //   var db = new AWS.DynamoDB.DocumentClient();
// //   db.put(params, function(err, data) {
// //       if (err) {
// //           console.log(err);
// //           const response = {
// //             statusCode: 200,
// //             headers: {
// //               'x-custom-header' : 'my custom header value'
// //             },
// //             body: err
// //           };
// //           callback(null, response);
// //       } else {
// //           console.log('Thanh cong')
// //           const response = {
// //             statusCode: 200,
// //             headers: {
// //               'x-custom-header' : 'my custom header value'
// //             },
// //             body: 'Thanh cong'
// //           };
// //           callback(null, response);
// //       }
// //   });

// // }

// // export const hello: APIGatewayProxyHandler = async (event, context) => {

// //   return {
// //     statusCode: 200,
// //     body: JSON.stringify({
// //       message: "Go Serverless v2.0! Your function executed successfully!",
// //       hiep: "hiep",
// //       ok: "ok"
// //     }),
// //   };
// // };