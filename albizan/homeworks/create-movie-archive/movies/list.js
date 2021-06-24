'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.list = (event, context, callback) => {

  const queryStringParameters = event.queryStringParameters || {}
  const {director, title} = queryStringParameters;
  console.log(`Director: ${director}`);
  console.log(`Title: ${title}`);

  const params = {
    TableName: process.env.MOVIES_TABLE
  };

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

    let moviesList = result.Items;

    if(director) {
      moviesList = moviesList.filter(m => m.director === director);
    }
    if(title) {
      moviesList = moviesList.filter(m => m.title === title);
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(moviesList),
    };
    callback(null, response);
  });
};
