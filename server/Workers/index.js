const VaccineNotifier = require("./VaccineNotifier");
const scheduler = require("node-schedule");
const logger = require("../Helpers/logger");

class Worker {
   constructor() {
   }

   startVaccineNotifier() {
      /* const notifier = new VaccineNotifier();
       notifier.checkVaccineAvailability();*/
      logger.info("Workers Scheduled...");
      scheduler.scheduleJob("* */6 * * *", async () => {
         const notifier = new VaccineNotifier();
         await notifier.checkVaccineAvailability();
      });
   }
}

module.exports = Worker;