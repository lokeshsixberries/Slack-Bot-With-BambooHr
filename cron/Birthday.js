import cron from 'node-cron';
import { fetchEmployeeData } from '../config/bamboo.js';
import { formatDateNew, isBirthDay } from '../helpers/helpers.js';
import fetchGiphy from '../config/giphy.js';
import sendSlackNotification from '../config/slack.js';
import BirthDayWishes from '../wishes/birthday.js';

function BirthdayNotifications() {
    cron.schedule('30 4 * * *', async () => {
        console.log('Checking for birthdays...');
        try {
            const employees = await fetchEmployeeData();
            const ActiveUser = (employees || []).filter((item) => item?.status === "Active")
            const birthUsers = (ActiveUser || []).filter((item) => isBirthDay(item?.dateOfBirth));

            if ((birthUsers || []).length > 0) {
                let message = `\n🎂We are celebrating these birthdays today! :birthday:\n\n`;
                for (const employee of birthUsers) {
                    message += `${formatDateNew(employee.dateOfBirth)} : ${employee.firstName} ${employee.lastName}🎁\n\n`;
                }
                message += `${BirthDayWishes[Math.floor(Math.random() * BirthDayWishes.length)]}\n\n`;

                // Fetch and add a Giphy
                const gifUrl = await fetchGiphy('Happy birthday');

                await sendSlackNotification(message, gifUrl);
            }
        } catch (error) {
            console.error('Error checking birthdays and sending notifications:', error);
        }
    });
}


export default BirthdayNotifications;