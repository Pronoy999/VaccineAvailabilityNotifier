const database = require("./../Services/databaseService");
const constants = require("../Helpers/constants");

class Users {
   constructor(firstName, lastName, email, pincode, age) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._email = email;
      this._pincode = pincode;
      this._age = age;
   }

   /**
    * Method to register the user.
    */
   async registerUser() {
      try {
         const response = await database.runSp(constants.SP_REGISTER_USER, [this._firstName, this._lastName, this._email,
            this._pincode, this._age]);
         return response[0][0];
      } catch (e) {
         throw e;
      }
   }
}

module.exports = Users;