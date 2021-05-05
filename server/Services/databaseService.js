const mysql = require('mysql');
const logger = require('./../Helpers/logger');
const validators = require('validatorswithgenerators').validators;
const queryGenerator = require('./queryGenerator');
const config = require('./../Helpers/config');
const constants = require('./../Helpers/constants');
/**
 * Creating pool for Database.
 */
const pool = mysql.createPool({
   host: process.env[constants.DB_HOST_KEY],
   user: process.env[constants.DB_USER_NAME],
   database: process.env[constants.DB_DATABASE_NAME],
   password: process.env[constants.DB_PASSWORD],
   port: config.databasePort
});
const database = {};
/**
 * Method to execute the Stored Procedures.
 * @param spName: The name of the SPs.
 * @param params: The array containing the params for the SP.
 * @returns {Promise<>}: Resolves result if executed, else false.
 */
database.runSp = (spName, params) => {
   return new Promise((resolve, reject) => {
      if (!validators.validateString(spName)) {
         reject("Invalid SP Name");
         return;
      }
      let spQuery = queryGenerator.generateSPQuery(spName, params);
      logger.debug(spQuery);
      pool.getConnection((err, conn) => {
         if (err) {
            logger.error(err);
            reject(err);
         } else {
            conn.query(spQuery, (err, results) => {
               conn.release();
               if (err) {
                  logger.error(err);
                  reject(err);
               } else {
                  logger.info("Query :" + spQuery + " Executed.");
                  resolve(results);
               }
            });
         }
      });
   });
};
/**
 * Exporting modules.
 */
module.exports = database;