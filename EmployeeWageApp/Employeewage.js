const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// Generating work type :- Absent, Part-Time, Full-Time
let empCheck = Math.floor(Math.random() * 3);

let empHours = 0;

switch (empCheck) {
    case IS_PART_TIME:
        empHours = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHours = FULL_TIME_HOURS;
        break;
    default:
        empHours = 0;
}

let dailyWage = empHours * WAGE_PER_HOUR;
console.log(`Employee worked ${empHours} hours, Daily Wage: $${dailyWage}`);
