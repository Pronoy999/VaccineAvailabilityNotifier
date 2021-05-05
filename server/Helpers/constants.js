const constants = {};
/**
 * ENV constants
 */
constants.DB_HOST_KEY = "DB_Host";
constants.DB_DATABASE_NAME = "Database_name";
constants.DB_USER_NAME = "Database_user_name";
constants.DB_PASSWORD = "Database_password";
constants.AWS_KEY_ID = "Key_ID";
constants.AWS_SECRET_KEY = "Secret_Key";
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
constants.SP_GET_ALL_USERS = "sp_GetAllUsers";

/**
 * Column Constants
 */
constants.FIRST_NAME = "first_name";
constants.LAST_NAME = "last_name";
constants.EMAIL_ADDRESS = "email_address";
constants.PINCODE = "pincode";
constants.AGE = "age";

constants.CENTERS = "centers";
constants.SESSIONS = "sessions";
constants.AVAILABLE_CAPACITY = "available_capacity";
constants.MIN_AGE_LIMIT = "min_age_limit";
constants.VACCINE_NAME = "vaccine";
constants.SLOTS = "slots";

constants.DESTINATION = "Destination";
constants.TO_ADDRESS = "ToAddresses";
constants.MESSAGE = "Message";
constants.BODY = "Body";
constants.HTML = "Html";
constants.CHARSET = "Charset";
constants.CHARSET_UTF8 = "UTF-8";
constants.DATA = "Data";
constants.TEXT = "Text";
constants.SUBJECT = "Subject";
constants.SOURCE_ADDRESS = "Source";

/**
 * API Constants.
 */
constants.CO_WIN_API_URL = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin";

module.exports = constants;