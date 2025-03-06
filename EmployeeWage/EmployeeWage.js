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
