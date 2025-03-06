// UC1: Constants for Employee Attendance
const IS_PRESENT = 1;

// Generate Random Number (0 or 1)
let empCheck = Math.floor(Math.random() * 2); 

// Check if Employee is Present or Absent
if (empCheck === IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}

// UC2: Calculate Daily Employee Wage based on Part-time or Full-time
const NO_WORK = 0;
const PART_TIME = 4;
const FULL_TIME = 8;
const WAGE_PER_HOUR = 20;

let empHours = 0;

if (empCheck === IS_PRESENT) {
    console.log("Employee is Present");

    // Work Type Check (0 = No Work, 1 = Part Time, 2 = Full Time)
    let workType = Math.floor(Math.random() * 3); 

    switch (workType) {
        case 0:
            empHours = NO_WORK;
            console.log("Employee did No Work Today");
            break;
        case 1:
            empHours = PART_TIME;
            console.log("Employee worked Part Time (4 Hours)");
            break;
        case 2:
            empHours = FULL_TIME;
            console.log("Employee worked Full Time (8 Hours)");
            break;
        default:
            empHours = NO_WORK;
    }
} else {
    console.log("Employee is Absent");
}

// Calculate Wage
let dailyWage = empHours * WAGE_PER_HOUR;
console.log("Daily Employee Wage: $" + dailyWage);
