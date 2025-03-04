// Function to process wage calculations using array helper functions
function calculateTotalWage(dailyWages) {
    // Calculate total Wage
    let totalWage = dailyWages.reduce((total, day) => total + day.wage, 0);
    console.log(`Total Monthly Wage: $${totalWage}`);

    // Displaying day along with Daily Wage
    let dailyWageMap = dailyWages.map(day => `Day ${day.day}: Wage $${day.wage}`);
    console.log("Daily Wages:", dailyWageMap);

    // Displaying days when Full time wage of 160 were earned
    let fullTimeDays = dailyWages.filter(day => day.wage === 160).map(day => day.day);
    console.log("Days with Full Time Wage:", fullTimeDays.length > 0 ? fullTimeDays : "None");

    // Find first occurrence when Full Time Wage was earned
    let firstFullTimeDay = dailyWages.find(day => day.wage === 160);
    console.log("First Day with Full Time Wage:", firstFullTimeDay ? `Day ${firstFullTimeDay.day}` : "None");

    // Check if every element of Full Time Wage is actually holding Full Time Wage
    let allFullTime = dailyWages.every(day => day.wage === 160);
    console.log("Are all wages Full Time Wage?", allFullTime);

    // Checking if there is any Part Time Wage
    let hasPartTime = dailyWages.some(day => day.wage === 80);
    console.log("Is there any Part Time Wage?", hasPartTime);

    // Calculating number of days an employee worked
    let totalWorkedDays = dailyWages.length;
    console.log("Total Days Worked:", totalWorkedDays);
}

// Function for processing day-wise wage & hours
function processDayWiseWage(dailyWageMap, dailyHourMap) {
    console.log("Day-wise Wage & Hours:");
    dailyWageMap.forEach((wage, day) => {
        let hours = dailyHourMap.get(day) || 0;
        console.log(`Day ${day}: Wage $${wage}, Hours ${hours}`);
    });

    // Calculating Total Wage & Total Hours
    let totalWageFromMap = Array.from(dailyWageMap.values()).reduce((total, wage) => total + wage, 0);
    let totalHoursFromMap = Array.from(dailyHourMap.values()).reduce((total, hours) => total + hours, 0);

    console.log(`Total Monthly Wage (From Map): $${totalWageFromMap}`);
    console.log(`Total Hours Worked (From Map): ${totalHoursFromMap}`);
}

// Functions for categorizing workdays
const categorizeWorkDays = (dailyHourMap) => {
    let fullWorkingDays = [...dailyHourMap.entries()].filter(([day, hours]) => hours === 8).map(([day]) => day);
    let partWorkingDays = [...dailyHourMap.entries()].filter(([day, hours]) => hours === 4).map(([day]) => day);
    let noWorkingDays = [...dailyHourMap.entries()].filter(([day, hours]) => hours === 0).map(([day]) => day);

    console.log("Full Working Days:", fullWorkingDays.length > 0 ? fullWorkingDays : "None");
    console.log("Part Working Days:", partWorkingDays.length > 0 ? partWorkingDays : "None");
    console.log("No Working Days:", noWorkingDays.length > 0 ? noWorkingDays : "None");
};

// Exporting functions
module.exports = { calculateTotalWage, processDayWiseWage, categorizeWorkDays };