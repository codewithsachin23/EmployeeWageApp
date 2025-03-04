const { calculateTotalWage, processDayWiseWage, categorizeWorkDays } = require("./wageHelper");

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// Function to get work hours
function getWorkHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

// Arrays and Maps to store daily data
let dailyWages = [];
let dailyWageMap = new Map();
let dailyHourMap = new Map();

// Calculating total hours and days
let totalEmpHours = 0;
let totalWorkingDays = 0;


while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let empHours = getWorkHours(empCheck);
    let dailyWage = empHours * WAGE_PER_HOUR;

    // Storing data
    dailyWages.push({ day: totalWorkingDays, wage: dailyWage });
    dailyWageMap.set(totalWorkingDays, dailyWage);
    dailyHourMap.set(totalWorkingDays, empHours);

    totalEmpHours += empHours;
}

// Calculating total wages
console.log("\n\nWage Calculations Using Helper Functions");
calculateTotalWage(dailyWages);

// Processing and displaying day-wise wages
console.log("\n\nProcessing Day-wise Wage & Hours");
processDayWiseWage(dailyWageMap, dailyHourMap);

// Categorizing workdays
console.log("\n\nCategorizing Workdays");
categorizeWorkDays(dailyHourMap);