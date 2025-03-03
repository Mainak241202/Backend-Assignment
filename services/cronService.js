const cron = require("cron");
const Order = require("../models/Order");

const startCronJob = () => {
    const job = new cron.CronJob("0 * * * *", async () => {
        const orders = await Order.find();
        const total_orders = orders.length;
        const total_amount = orders.reduce((sum, order) => sum + order.total_amount, 0);
        console.log({ total_orders, total_amount, timestamp: new Date() });
    });
    job.start();
};

module.exports = startCronJob;