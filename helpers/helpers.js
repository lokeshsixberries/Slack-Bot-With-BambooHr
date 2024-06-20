import * as convert from 'xml-js';


const isBirthDay = (dateString) => {
    const today = new Date();
    const birthDate = new Date(dateString);

    return (
        today.getMonth() === birthDate.getMonth() &&
        today.getDate() === birthDate.getDate()
    );
};

const isAniverseryDay = (dateString) => {
    const today = new Date();
    const birthDate = new Date(dateString);

    return (
        today.getMonth() === birthDate.getMonth() &&
        today.getDate() === birthDate.getDate() && today.getFullYear() !== birthDate.getFullYear()
    );
};

const isNewJoinee = (dateString) => {
    const today = new Date();
    const birthDate = new Date(dateString);

    return (
        today.getMonth() === birthDate.getMonth() &&
        today.getDate() === birthDate.getDate() &&
        today.getFullYear() === birthDate.getFullYear()
    );
};

function DateDiff(dt2, dt1) {

    var diff = (new Date(dt2).getTime() - new Date(dt1).getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff / 365.25));
}

const convertXmlToJson = (xmlString) => {
    const options = { compact: true, ignoreComment: true, spaces: 4 };

    let json;
    try {
        json = JSON.parse(convert.xml2json(xmlString, options));
    } catch (error) {
        console.error("Failed to convert XML to JSON:", error);
        return [];
    }

    let items = json?.calendar?.item;

    console.log("json?.calendar?.item;", json?.calendar?.item)

    if (!Array.isArray(items)) {
        console.error("Invalid JSON structure, converting to array:", items);
        items = [items];
    }

    let userInfoArr = items;



    const userInfo = userInfoArr.map((item) => {
        return {
            timeOff: item._attributes?.type,
            reqId: item.request?._attributes?.id,
            empId: item.employee?._attributes?.id,
            name: item.employee?._text,
            start: item.start?._text,
            end: item.end?._text
        };
    });

    return userInfo;
};

function formatDate(dateStr) {
    const [year, month, day] = dateStr.split('-');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

const isEmployeeOnLeaveToday = (item) => {
    const { start, end } = item;

    const today = new Date();
    const startDate = new Date(formatDate(start));
    const endDate = new Date(formatDate(end));

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        throw new Error("Invalid date format. Please use 'YYYY-MM-DD'.");
    }

    today.setHours(0, 0, 0, 0);
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    if (today >= startDate && today <= endDate) {
        return true;
    } else {
        return false;
    }
};

const formatDateNew = (date) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
};


export { isBirthDay, isNewJoinee, DateDiff, convertXmlToJson, isEmployeeOnLeaveToday, formatDateNew, isAniverseryDay };