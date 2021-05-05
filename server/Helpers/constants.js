const constants = {};
/**
 * ENV constants
 */
constants.DB_HOST_KEY = "DB_Host";
constants.DB_DATABASE_NAME = "Database_name";
constants.DB_USER_NAME = "Database_user_name";
constants.DB_PASSWORD = "Database_password";
/**
 * HTTP Codes and messages.
 */
constants.BAD_REQUEST_CODE = 400;
constants.HTTP_NOT_FOUND_CODE = 404;
constants.FORBIDDEN_REQUEST_CODE = 403;
constants.INTERNAL_SERVER_ERROR_CODE = 500;
constants.HTTP_SUCCESS = 200;
constants.HTTP_ACCEPTED_OKAY = 201;
constants.HTTP_UNAUTHORIZED_CODE = 401;

constants.BAD_REQUEST_MESSAGE = "Incorrect Request";
constants.FORBIDDEN_MESSAGE = "Incorrect Token or token expired or the user doesn't have sufficient permissions.";
constants.INSUFFICIENT_DATA_MESSAGE = "Insufficient Data";
constants.INVALID_METHOD_MESSAGE = "Invalid Method";
constants.INVALID_PATH = "Invalid Path";
constants.INTERNAL_SERVER_ERROR_MESSAGE = "Internal Server Error";

/**
 * SP Names
 */
constants.SP_REGISTER_USER = "sp_registerUser";

/**
 * Column Constants
 */
constants.FIRST_NAME = "first_name";
constants.LAST_NAME = "last_name";
constants.EMAIL_ADDRESS = "email_address";
constants.PINCODE = "pincode";
constants.AGE = "age";

module.exports = constants;