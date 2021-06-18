'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2342a5022bbd3eecc875717678062f6e7f8d74d2
const params = {
  TableName: process.env.DYNAMODB_TABLE,
};

module.exports.list = (event, context, callback) => {
<<<<<<< HEAD
=======
=======

module.exports.list = (event, context, callback) => {
  const params = {
    TableName: process.env.DYN_T_TODOS,
  };
>>>>>>> de4f989a18eb9909f992a5a39a4c8964f6e25d2b
>>>>>>> 2342a5022bbd3eecc875717678062f6e7f8d74d2
  // fetch all todos from the database
  dynamoDb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the todos.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
    callback(null, response);
  });
};
