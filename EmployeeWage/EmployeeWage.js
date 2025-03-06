// Constants for Employee Attendance
const IS_PRESENT = 1;

// Generate Random Number (0 or 1)
let empCheck = Math.floor(Math.random() * 2); 

// Check if Employee is Present or Absent
if (empCheck === IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}
