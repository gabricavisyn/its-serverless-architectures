'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = (event, context, callback) => {
  const params = {
<<<<<<< HEAD
    TableName: process.env.DYNAMODB_TABLE,
=======
<<<<<<< HEAD
    TableName: process.env.DYNAMODB_TABLE,
=======
    TableName: process.env.DYN_T_TODOS,
>>>>>>> de4f989a18eb9909f992a5a39a4c8964f6e25d2b
>>>>>>> 2342a5022bbd3eecc875717678062f6e7f8d74d2
    Key: {
      id: event.pathParameters.id,
    },
  };

  // fetch todo from the database
  dynamoDb.get(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the todo item.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
    callback(null, response);
  });
};
