const constants = require("../Helpers/constants");
const router = require('express').Router();
const validators = require("validatorswithgenerators").validators;
const Users = require("./../Entity/users");
const logger = require("../Helpers/logger");

router.post("/", async function (req, res) {
   try {
      const firstName = validators.validateString(req.body[constants.FIRST_NAME]) ?
         req.body[constants.FIRST_NAME] : false;
      const lastName = validators.validateString(req.body[constants.LAST_NAME]) ?
         req.body[constants.LAST_NAME] : false;
      const email = validators.validateEmail(req.body[constants.EMAIL_ADDRESS]) ?
         req.body[constants.EMAIL_ADDRESS] : false;
      const pincode = validators.validateNumber(req.body[constants.PINCODE]) ?
         req.body[constants.PINCODE] : false;
      const age = validators.validateNumber(req.body[constants.AGE]) ?
         req.body[constants.AGE] : false;
      if (firstName && lastName && email && pincode && age) {
         const users = new Users(firstName, lastName, email, pincode, age);
         const response = await users.registerUser();
         res.status(constants.HTTP_SUCCESS).json(response);
         logger.info("Returning response: " + JSON.stringify(response));
      } else {
         res.status(constants.BAD_REQUEST_CODE).json(constants.INSUFFICIENT_DATA_MESSAGE);
      }
   } catch (e) {
      logger.error(e.toString());
      res.status(constants.INTERNAL_SERVER_ERROR_CODE).json(constants.INTERNAL_SERVER_ERROR_MESSAGE);
   }
});
router.get("/", async (req, res) => {
   res.status(constants.BAD_REQUEST_CODE).json(constants.INVALID_METHOD_MESSAGE);
});

module.exports = router;
