const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

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
// Function for storing daily wages and calculating total wages
function calculateTotalWage() {
    let totalEmpHours = 0;
    let totalWorkingDays = 0;
    let dailyWages = [];

    while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
        let empCheck = Math.floor(Math.random() * 3);
        let empHours = getWorkHours(empCheck);
        let dailyWage = empHours * WAGE_PER_HOUR;

        dailyWages.push(dailyWage); // Store daily wage
        totalEmpHours += empHours;
        totalWorkingDays++;
    }

    return totalEmpHours * WAGE_PER_HOUR;
}

// calculating total wages
let totalWage = calculateTotalWage();
console.log(`Total Monthly Wage: $${totalWage}`);