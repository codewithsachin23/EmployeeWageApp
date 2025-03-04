const IS_PRESENT = 1;

// Generating random number (0 or 1)
let empCheck = Math.floor(Math.random() * 2);

if (empCheck === IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}