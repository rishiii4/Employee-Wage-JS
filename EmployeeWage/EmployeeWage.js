// UC1: Constants for Employee Attendance
const IS_PRESENT = 1;

// Generate Random Number (0 or 1)
let empCheck = Math.floor(Math.random() * 2); 


// UC2: Calculate Daily Employee Wage based on Part-time or Full-time
const NO_WORK = 0;
const PART_TIME = 4;
const FULL_TIME = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_IN_MONTH = 20;
const MAX_WORKING_HOURS = 160;

let empHours = 0;

// UC3: Function to Get Work Hours
function getWorkHours() {
    let workType = Math.floor(Math.random() * 3); 
    switch (workType) {
        case 0:
            console.log("Employee did No Work Today");
            return NO_WORK;
        case 1:
            console.log("Employee worked Part Time (4 Hours)");
            return PART_TIME;
        case 2:
            console.log("Employee worked Full Time (8 Hours)");
            return FULL_TIME;
        default:
            return NO_WORK;
    }
}

if (empCheck === IS_PRESENT) {
    console.log("Employee is Present");
    empHours = getWorkHours(); 
} else {
    console.log("Employee is Absent");
}

// Calculate Wage
let dailyWage = empHours * WAGE_PER_HOUR;
console.log("Daily Employee Wage: $" + dailyWage);

// UC4: Calculate Monthly Wage
let totalMonthlyWage = 0;
for (let day = 1; day <= WORKING_DAYS_IN_MONTH; day++) {
    let empCheck = Math.floor(Math.random() * 2); 
    let empHours = empCheck === IS_PRESENT ? getWorkHours() : NO_WORK;
    let dailyWage = empHours * WAGE_PER_HOUR;
    totalMonthlyWage += dailyWage;

    console.log(`Day ${day}: Hours Worked = ${empHours}, Daily Wage = $${dailyWage}`);
}

console.log("\nTotal Monthly Wage: $" + totalMonthlyWage);

// UC5: Variables for Calculation
let totalWorkingHours = 0;
let totalWorkingDays = 0;
// UC6: Store Daily Wage in Array
let dailyWages = []; 

// Loop till 160 Hours or 20 Days Condition
while (totalWorkingDays < WORKING_DAYS_IN_MONTH && totalWorkingHours < MAX_WORKING_HOURS) {
    totalWorkingDays++; 
    let empCheck = Math.floor(Math.random() * 2); 
    let empHours = empCheck === IS_PRESENT ? getWorkHours() : NO_WORK;

    // Check if total hours exceed 160
    if (totalWorkingHours + empHours > MAX_WORKING_HOURS) {
        empHours = MAX_WORKING_HOURS - totalWorkingHours; 
    }

    totalWorkingHours += empHours;
    let dailyWage = empHours * WAGE_PER_HOUR;
    totalMonthlyWage += dailyWage;

    // Store Daily Wage in Array
    dailyWages.push({ day: totalWorkingDays, wage: dailyWage });

    console.log(`Day ${totalWorkingDays}: Hours Worked = ${empHours}, Daily Wage = $${dailyWage}, Total Hours = ${totalWorkingHours}`);
}

// Print Daily Wages Stored in Array
console.log("\nDaily Wages: ", dailyWages);
console.log("Total Working Days: " + totalWorkingDays);
console.log("Total Working Hours: " + totalWorkingHours);
console.log("Total Monthly Wage: $" + totalMonthlyWage);

// Calculate Total Wage using reduce()
let totalWage = dailyWages.reduce((total, day) => total + day.wage, 0);
console.log("\nTotal Monthly Wage: $" + totalWage);

// Show the Day along with Daily Wage using map()
let dayWiseWage = dailyWages.map(day => `Day ${day.day}: $${day.wage}`);
console.log("\nDay-wise Wages:\n", dayWiseWage.join("\n"));

// Show Days when Full Time Wage (160) was earned using filter()
let fullTimeDays = dailyWages.filter(day => day.wage === FULL_TIME * WAGE_PER_HOUR);
console.log("\nDays when Full Time Wage was Earned:", fullTimeDays.map(day => day.day));

// Find the first occurrence when Full Time Wage was earned using find()
let firstFullTimeDay = dailyWages.find(day => day.wage === FULL_TIME * WAGE_PER_HOUR);
console.log("\nFirst Day Full Time Wage Earned:", firstFullTimeDay ? firstFullTimeDay.day : "Never");

// Check if Every Element of Full Time Wage is truly holding Full Time Wage
let allFullTime = fullTimeDays.every(day => day.wage === FULL_TIME * WAGE_PER_HOUR);
console.log("\nDid Employee Work Full-Time Every Time Full Wage was Given?", allFullTime);

// Check if there is any Part Time Wage using some()
let hasPartTime = dailyWages.some(day => day.wage === PART_TIME * WAGE_PER_HOUR);
console.log("\nDid Employee Work Part-Time on Any Day?", hasPartTime);

// Find the number of days the Employee Worked using filter()
let workedDays = dailyWages.filter(day => day.wage > 0).length;
console.log("\nTotal Days Employee Worked:", workedDays);