const Employee = require("../entity/Employee");

class PayrollService {
    constructor() {
        this.employees = [];
    }

    addEmployee(id, name, salary, gender, startDate) {
        const newEmployee = new Employee(id, name, salary, gender, startDate);
        this.employees.push(newEmployee);
    }

    getAllEmployees() {
        return this.employees.map(emp => emp.getDetails());
    }
}

// Example Usage
const payrollService = new PayrollService();
payrollService.addEmployee(1, "Alice", 50000, "Female", "2023-01-10");
payrollService.addEmployee(2, "Bob", 60000, "Male", "2022-05-15");

console.log("Employee Payroll Data:");
console.log(payrollService.getAllEmployees());

module.exports = PayrollService;