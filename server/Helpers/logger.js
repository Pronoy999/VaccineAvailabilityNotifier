const logger = {};
logger.info = (msg) => {
   console.log(msg);
};
logger.debug = (msg) => {
   console.log(msg);
};
logger.error = (msg) => {
   console.error(msg);
};
module.exports = logger;