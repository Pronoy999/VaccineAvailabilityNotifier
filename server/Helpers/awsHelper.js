const awsHelper = {};
const aws = require('aws-sdk');
const constants = require('./constants');
aws.config.update({
   region: 'ap-south-1',
   accessKeyId: process.env[constants.AWS_KEY_ID],
   secretAccessKey: process.env[constants.AWS_SECRET_KEY]
});
awsHelper.ses = new aws.SES({apiVersion: '2010-12-01'})
/**
 * Exporting the module.
 */
module.exports = awsHelper;