var events = require('./events.js');

const statusCodes = require('http').STATUS_CODES;
const httpConstants = require('http2').constants;

// Include the AWS SDK module
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
// Instantiate a DynamoDB document client with the SDK
let dynamodb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

var params = {
  TableName: "TABLE",
  Item: {
    CUSTOMER_ID: { N: "001" },
    CUSTOMER_NAME: { S: "Richard Roe" },
  },
  Key: {
    KEY_NAME: { N: "001" },
  },
  ProjectionExpression: "ATTRIBUTE_NAME",
};

var events = require('./events.js');

exports.events = function (req, res) {
  // Call DynamoDB to read the item from the table
    dynamodb.getItem(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.Item);
      }
    });
};

exports.event = function (req, res) {
  ddb.putItem(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
};