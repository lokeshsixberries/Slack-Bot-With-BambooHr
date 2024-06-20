import cron from "node-cron";
import { fetchLeaveInfo } from "../config/bamboo.js";
import { convertXmlToJson, isEmployeeOnLeaveToday } from "../helpers/helpers.js";
import sendSlackNotification from "../config/slack.js";

function EmployeesOnLeaveNotifications() {
    cron.schedule('0 5 * * *', async () => {
        console.log('Checking for employees on leave...');
        try {
            const leaveInfo = await fetchLeaveInfo();

            if (leaveInfo.length > 50) {
                const jsonUserData = convertXmlToJson(leaveInfo);
                if ((jsonUserData || []).length > 0) {
                    let message = `\n🌟 Attention! 🌟\n\n📅 Employees on leave today:\n\n`;

                    jsonUserData.forEach(employee => {
                        if (employee.timeOff !== "holiday" && isEmployeeOnLeaveToday(employee)) {
                            message += `${employee.name} : From ${new Date(employee.start).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })} to ${new Date(employee.end).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}\n\n`;
                        }
                    });

                    const isLeaveToday = jsonUserData.some(item => isEmployeeOnLeaveToday(item) && item.timeOff !== "holiday");
                    if (isLeaveToday) {
                        await sendSlackNotification(message);
                    }
                }
            }
        } catch (error) {
            console.error('Error checking employees on leave and sending notifications:', error);
        }
    });
}


export default EmployeesOnLeaveNotifications;