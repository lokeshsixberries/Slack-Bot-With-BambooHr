import { configDotenv } from "dotenv";
import axios from "axios";
configDotenv({ path: "./.env" });

const sendSlackNotification = async (message, gifUrl) => {
    const payload = {
        text: message,
        attachments: gifUrl ? [{
            image_url: gifUrl,
            text: 'Giphy'
        }] : []
    };

    try {
        await axios.post(process.env.WEBHOOK, payload);
        console.log('Notification sent to Slack:', message);
    } catch (error) {
        console.error('Error sending notification to Slack:', error);
    }
};

export default sendSlackNotification;