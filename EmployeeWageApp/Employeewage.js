const {
    calculateTotalWage,
    showFullWorkingDays,
    showPartWorkingDays,
    showNoWorkingDays,
    processArrayOperations
} = require("./wagehelper");

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// Function to get work hours
const getWorkHours = (empCheck) => {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
};

// Array to store employee daily records
let employeeDailyRecords = [];

// Variables to track total hours and days
let totalEmpHours = 0;
let totalWorkingDays = 0;

// Simulate work for each day
while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let empHours = getWorkHours(empCheck);
    let dailyWage = empHours * WAGE_PER_HOUR;

    // Storing data in an object
    employeeDailyRecords.push({
        day: totalWorkingDays,
        hoursWorked: empHours,
        wageEarned: dailyWage
    });

    totalEmpHours += empHours;
}

// Object operations using Arrow Functions
console.log("\n\nObject Operations Using Arrow Functions\n");
calculateTotalWage(employeeDailyRecords);
showFullWorkingDays(employeeDailyRecords);
showPartWorkingDays(employeeDailyRecords);
showNoWorkingDays(employeeDailyRecords);

// Array-based calculations
console.log("\n\nArray Helper Functions");
processArrayOperations(employeeDailyRecords);