const constants = require("./constants");
const awsHelper = require("./awsHelper");
const logger = require("./logger");
const notificationHelper = {};
/**
 * Method to notify a user.
 * @param emailSubject
 * @param msgBody
 * @param address
 * @param isHtml: true to send HTML text.
 * @returns {Promise<boolean>}
 */
notificationHelper.notify = async (emailSubject, msgBody, address, isHtml) => {
   try {
      const params = {};
      params[constants.SOURCE_ADDRESS] = process.env[constants.SOURCE_ADDRESS];
      const destination = {};
      destination[constants.TO_ADDRESS] = [address];
      params[constants.DESTINATION] = destination;
      const textBody = {};
      textBody[constants.CHARSET] = constants.CHARSET_UTF8;
      textBody[constants.DATA] = msgBody;
      const subject = {};
      subject[constants.CHARSET] = constants.CHARSET_UTF8;
      subject[constants.DATA] = emailSubject;
      const emailBody = {};
      if (!isHtml) {
         emailBody[constants.TEXT] = textBody;
      } else {
         emailBody[constants.HTML] = textBody;
      }
      const messageBody = {};
      messageBody[constants.BODY] = emailBody;
      messageBody[constants.SUBJECT] = subject;
      params[constants.MESSAGE] = messageBody;
      const response = await awsHelper.ses.sendEmail(params).promise();
      logger.info(JSON.stringify(response));
      return true;
   } catch (e) {
      logger.error(JSON.stringify(e));
      return false;
   }
};

module.exports = notificationHelper;