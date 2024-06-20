import sdk from '@api/bamboohr';
import { configDotenv } from 'dotenv';

configDotenv({ path: "./.env" });
sdk.auth(process.env.API_KEY, process.env.PASSWORD);


console.log("process.env.API_KEY", process.env.API_KEY)

const fetchEmployeeData = async () => {
    try {
        const { data } = await sdk.requestCustomReport(
            { fields: ['id', 'firstName', 'lastName', 'hireDate', 'dateOfBirth', 'status', 'birthday'] },
            {
                format: 'JSON',
                onlyCurrent: 'true',
                companyDomain: process.env.DOMAIN
            }
        );
        return data?.employees || [];
    } catch (error) {
        console.error("Error fetching employee data:", error);
        return [];
    }
};

const fetchLeaveInfo = async () => {
    try {
        const { data } = await sdk.getAListOfWhoSOut({ companyDomain: process.env.DOMAIN });
        return data || [];
    } catch (error) {
        console.error("Error fetching leave information:", error);
        return [];
    }
};

export { fetchEmployeeData, fetchLeaveInfo };
