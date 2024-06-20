import cron from "node-cron";
import { fetchEmployeeData } from "../config/bamboo.js";
import fetchGiphy from "../config/giphy.js";
import sendSlackNotification from "../config/slack.js";
import { isNewJoinee } from "../helpers/helpers.js";
import NewJoineeWishes from "../wishes/joinee.js";

function NewJoineesNotifications() {
    cron.schedule('30 6 * * *', async () => {
        console.log('Checking for new joinees...');
        try {
            const employees = await fetchEmployeeData();
            const ActiveUser = (employees || []).filter((item) => item?.status === "Active")
            const newJoineeUsers = (ActiveUser || []).filter((item) => isNewJoinee(item?.hireDate));

            if ((newJoineeUsers || []).length > 0) {
                let message = `\nWe are thrilled to welcome our new joiners to the team! 🎉\n\n`;
                for (const employee of newJoineeUsers) {
                    message += `Welcome aboard!, ${employee.firstName} ${employee.lastName} 🎁\n\n`;
                }
                message += `${NewJoineeWishes[Math.floor(Math.random() * NewJoineeWishes.length)]}\n\n`;

                // Fetch and add a Giphy
                const gifUrl = await fetchGiphy('Welcome aboard!');

                await sendSlackNotification(message, gifUrl);
            }
        } catch (error) {
            console.error('Error checking new joinees and sending notifications:', error);
        }
    });
}


export default NewJoineesNotifications;