// Function to process wage calculations using array helper functions
function calculateTotalWage(dailyWages) {

    // Calculate total Wage
    let totalWage = dailyWages.reduce((total, day) => total + day.wage, 0);
    console.log(`Total Monthly Wage: $${totalWage}`);

    // Displaying day along with Daily Wage
    let dailyWageMap = dailyWages.map(day => `Day ${day.day}: Wage $${day.wage}`);
    console.log("Daily Wages:", dailyWageMap);

    let fullTimeDays = dailyWages.filter(day => day.wage === 160).map(day => day.day);
    console.log("Days with Full Time Wage:", fullTimeDays);

    let firstFullTimeDay = dailyWages.find(day => day.wage === 160);
    console.log("First Day with Full Time Wage:", firstFullTimeDay ? `Day ${firstFullTimeDay.day}` : "None");

    let allFullTime = dailyWages.every(day => day.wage === 160);
    console.log("Is every day a Full Time Wage Day?", allFullTime);

    // Checking if there is any Part Time Wage
    let hasPartTime = dailyWages.some(day => day.wage === 80);
    console.log("Is there any Part Time Wage?", hasPartTime);

    // Calculating number of days an employee Worked
    let totalWorkedDays = dailyWages.length;
    console.log("Total Days Worked:", totalWorkedDays);
}

// Exporting function
module.exports = { calculateTotalWage };