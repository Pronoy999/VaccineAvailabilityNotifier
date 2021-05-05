const VaccineNotifier = require("./VaccineNotifier");
const scheduler = require("node-schedule");

class Worker {
   constructor() {
   }

   startVaccineNotifier() {
      const notifier = new VaccineNotifier();
      //notifier.checkVaccineAvailability();
      scheduler.scheduleJob("* * * * *", async () => {
         const notifier = new VaccineNotifier();
         await notifier.checkVaccineAvailability();
      });
   }
}

module.exports = Worker;