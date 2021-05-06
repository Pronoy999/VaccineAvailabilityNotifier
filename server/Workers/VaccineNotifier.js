const logger = require("../Helpers/logger");
const database = require("../Services/databaseService");
const constants = require("../Helpers/constants");
const validators = require("validatorswithgenerators").validators;
const {notify} = require("./../Helpers/notificationHelper");
const moment = require("moment");
const axios = require("axios");

class VaccineNotifier {
   constructor() {
   }

   async checkVaccineAvailability() {
      try {
         const response = await database.runSp(constants.SP_GET_ALL_USERS, []);
         const userDetails = response[0];
         if (userDetails.length > 0) {
            for (const user of userDetails) {
               const details = await this._getAvailableSlots(user[constants.PINCODE], user[constants.AGE]);
               if (validators.validateUndefined(details[constants.VACCINE_NAME]) && details.slots.length > 0) {
                  const vaccineName = details[constants.VACCINE_NAME];
                  const slotTimes = details.slots.join(",");
                  let emailMessage = constants.VACCINE_AVAILABLE_SLOTS_MESSAGE.replace("%name",
                     user[constants.FIRST_NAME]);
                  emailMessage = emailMessage.replace("%vaccine", vaccineName);
                  emailMessage = emailMessage.replace("%times", slotTimes);
                  const subject = "Important: Vaccine AVAILABLE At " + user[constants.PINCODE];
                  await this._notify(emailMessage, subject, user[constants.EMAIL_ADDRESS]);
               } else {
                  logger.info("No Slots Available for User: " + user[constants.EMAIL_ADDRESS]);
               }
            }
         } else {
            logger.info("No Users");
         }
      } catch (e) {
         logger.error(e.toString());
      }
   }

   /**
    * Method to get the available slots.
    * @param pincode: The Pincode for the slots.
    * @param age: the age of the customer.
    * @returns {Promise<Object>}
    * @private
    */
   async _getAvailableSlots(pincode, age) {
      try {
         const today = moment().format("DD-MM-YYYY");
         const url = constants.CO_WIN_API_URL + "?pincode=" + pincode + "&date=" + today;
         const response = await axios.get(url, {
            headers: {
               "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36 Edg/90.0.818.51"
            }
         });
         const centers = response.data[constants.CENTERS];
         let vaccine = "";
         if (centers.length > 0) {
            let slotsArray = [];
            for (const center of centers) {
               const sessions = center[constants.SESSIONS];
               for (const session of sessions) {
                  const capacity = session[constants.AVAILABLE_CAPACITY];
                  const minAgeLimit = session[constants.MIN_AGE_LIMIT];
                  vaccine = session[constants.VACCINE_NAME];
                  const slots = session[constants.SLOTS];
                  slotsArray.push(slots);
                  if (capacity > 0 && age > minAgeLimit) {
                     const vaccine = session[constants.VACCINE_NAME];
                     const slots = session[constants.SLOTS];
                     slotsArray.push(slots);
                  } else {
                     logger.info("Vaccine not available.");
                  }
               }
            }
            return {vaccine, slots: slotsArray};
         } else {
            logger.info("No Centers available.");
            return {};
         }
      } catch (e) {
         logger.error(JSON.stringify(e));
         return {};
      }
   }

   async _notify(msgBody, msgSubject, address) {
      const response = await notify(msgSubject, JSON.stringify(msgBody), address, true);
      logger.info("Vaccine Notification Send Status: " + response);
   }
}

module.exports = VaccineNotifier;