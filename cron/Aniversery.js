import cron from "node-cron";
import { fetchEmployeeData } from "../config/bamboo.js";
import { DateDiff, isAniverseryDay } from "../helpers/helpers.js";
import fetchGiphy from "../config/giphy.js";
import sendSlackNotification from "../config/slack.js"
import AniverseryWishes from "../wishes/aniversery.js";

function AnniversariesNotifications() {
    cron.schedule('45 4 * * *', async () => {
        console.log('Checking for anniversaries...');
        try {
            const employees = await fetchEmployeeData();
            const ActiveUser = (employees || []).filter((item) => item?.status === "Active")

            const aniveseryhUsers = (ActiveUser || []).filter((item) => isAniverseryDay(item?.hireDate));

            if ((aniveseryhUsers || []).length > 0) {
                let message = `\nWe are celebrating these work anniversaries! today! 🏆\n\n`;
                for (const employee of aniveseryhUsers) {
                    message += `${employee.firstName} ${employee.lastName} has completed ${DateDiff(new Date(employee?.hireDate), new Date())} years! 🎁\n\n`;
                }
                message += `${AniverseryWishes[Math.floor(Math.random() * AniverseryWishes.length)]}\n\n`;

                // Fetch and add a Giphy
                const gifUrl = await fetchGiphy('Celebrating work today`s anniversaries! ');

                await sendSlackNotification(message, gifUrl);
            }
        } catch (error) {
            console.error('Error checking anniversaries and sending notifications:', error);
        }
    });
}


export default AnniversariesNotifications;