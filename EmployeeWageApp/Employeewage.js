const { calculateTotalWage } = require("./Wagehelper");

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

// Function for calculating total wage and storing daily wages
function generateEmployeeWages() {
    let totalEmpHours = 0;
    let totalWorkingDays = 0;
    let dailyWages = [];

    while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
        let empCheck = Math.floor(Math.random() * 3);
        let empHours = getWorkHours(empCheck);
        let dailyWage = empHours * WAGE_PER_HOUR;

        dailyWages.push({ day: totalWorkingDays + 1, wage: dailyWage, hours: empHours });
        totalEmpHours += empHours;
        totalWorkingDays++;
    }

    // Calling helper function to process wages
    calculateTotalWage(dailyWages);
}


generateEmployeeWages();