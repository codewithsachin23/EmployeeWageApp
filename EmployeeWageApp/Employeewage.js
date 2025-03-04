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
// Calculating total monthly wage
let totalEmpHours = 0;

for (let day = 0; day < WORKING_DAYS_PER_MONTH; day++) {
    let empCheck = Math.floor(Math.random() * 3);
    totalEmpHours += getWorkHours(empCheck);
}

let totalWage = totalEmpHours * WAGE_PER_HOUR;
console.log(`Total Hours Worked: ${totalEmpHours}, Monthly Wage: $${totalWage}`);
