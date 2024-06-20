import cron from "node-cron";
import fetchGiphy from "../config/giphy.js";
import sendSlackNotification from "../config/slack.js";


function FridayNotification() {
    cron.schedule('30 10 * * 5', async () => {
        console.log('Checking for Friday...');
        try {
            // Fetch and add a Giphy
            const gifUrl = await fetchGiphy('Happy Friday !!!');

            await sendSlackNotification("It's Friday :partyparrot: :partyparrot: :partyparrot:", gifUrl);
        } catch (error) {
            console.error('Error checking for Friday and sending notifications:', error);
        }
    });
}


export default FridayNotification;