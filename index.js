import express from 'express';
import EmployeesOnLeaveNotifications from './cron/Leaves.js';
import AnniversariesNotifications from './cron/Aniversery.js';
import FridayNotification from './cron/Friday.js';
import NewJoineesNotifications from './cron/NewJoinee.js';
import BirthdayNotifications from './cron/Birthday.js';

const app = express();
const port = 4000;

app.use(express.json());

EmployeesOnLeaveNotifications();
AnniversariesNotifications();
FridayNotification();
NewJoineesNotifications();
BirthdayNotifications();


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
