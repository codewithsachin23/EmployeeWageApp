// Function to calculate total wage and total hours worked using reduce
const calculateTotalWage = (employeeDailyRecords) => {
    let totalWage = employeeDailyRecords.reduce((total, record) => total + record.wageEarned, 0);
    let totalHours = employeeDailyRecords.reduce((total, record) => total + record.hoursWorked, 0);

    console.log(`Total Monthly Wage: $${totalWage}`);
    console.log(`Total Hours Worked: ${totalHours} hours`);
};

// Function to show full working days using forEach
const showFullWorkingDays = (employeeDailyRecords) => {
    console.log("\nFull Working Days:");
    employeeDailyRecords.forEach(record => {
        if (record.hoursWorked === 8) {
            console.log(`Day ${record.day}: ${record.hoursWorked} hours`);
        }
    });
};

// Function to show part-time working days using map and reduce to String Array
const showPartWorkingDays = (employeeDailyRecords) => {
    let partTimeDays = employeeDailyRecords
        .filter(record => record.hoursWorked === 4)
        .map(record => `Day ${record.day}`);

    console.log("\nPart-Time Working Days:", partTimeDays.join(", "));
};

// Function to show no working days
const showNoWorkingDays = (employeeDailyRecords) => {
    let noWorkDays = employeeDailyRecords
        .filter(record => record.hoursWorked === 0)
        .map(record => `Day ${record.day}`);

    console.log("\nNo Working Days:", noWorkDays.length > 0 ? noWorkDays.join(", ") : "None");
};

// Function to process wage calculations
const processArrayOperations = (employeeDailyRecords) => {
    // Calculate total Wage
    let totalWage = employeeDailyRecords.reduce((total, day) => total + day.wageEarned, 0);
    console.log(`Total Monthly Wage: $${totalWage}`);

    // Displaying day along with Daily Wage
    let dailyWageMap = employeeDailyRecords.map(day => `Day ${day.day}: Wage $${day.wageEarned}`);
    console.log("Daily Wages:", dailyWageMap);

    // Displaying days when Full time wage of 160 were earned
    let fullTimeDays = employeeDailyRecords.filter(day => day.wageEarned === 160).map(day => day.day);
    console.log("Days with Full Time Wage:", fullTimeDays);

    // Find first occurrence when Full Time Wage was earned
    let firstFullTimeDay = employeeDailyRecords.find(day => day.wageEarned === 160);
    console.log("First Day with Full Time Wage:", firstFullTimeDay ? `Day ${firstFullTimeDay.day}` : "None");

    // Function to Check if every element of Full Time wage is actually holding Full Time wage
    let allFullTime = employeeDailyRecords.every(day => day.wageEarned === 160);
    console.log("Is every day a Full Time Wage Day?", allFullTime);

    // Checking if there is any Part Time Wage
    let hasPartTime = employeeDailyRecords.some(day => day.wageEarned === 80);
    console.log("Is there any Part Time Wage?", hasPartTime);

    // Calculating number of days an employee Worked
    let totalWorkedDays = employeeDailyRecords.length;
    console.log("Total Days Worked:", totalWorkedDays);
};

// Exporting functions
module.exports = {
    calculateTotalWage,
    showFullWorkingDays,
    showPartWorkingDays,
    showNoWorkingDays,
    processArrayOperations
};