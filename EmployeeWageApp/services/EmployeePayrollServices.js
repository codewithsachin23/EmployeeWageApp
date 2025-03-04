const Employee = require("../entity/Employee");

class PayrollService {
    constructor() {
        this.employees = [];
    }

    addEmployee(id, name, salary, gender, startDate) {
        try {
            const newEmployee = new Employee(id, name, salary, gender, startDate);
            this.employees.push(newEmployee);
        } catch (error) {
            console.error(`Failed to add employee: ${error.message}`);
        }
    }

    getAllEmployees() {
        return this.employees.map(emp => emp.getDetails());
    }
}

// Example Usage
const payrollService = new PayrollService();
payrollService.addEmployee(1, "Alice", 50000, "F", "2023-01-10");
payrollService.addEmployee(0, "Bob", 60000, "M", "2022-05-15");
payrollService.addEmployee(3, "Charlie", -70000, "M", "2021-08-20");
payrollService.addEmployee(4, "David", 45000, "X", "2023-06-01");
payrollService.addEmployee(5, "Eve", 70000, "F", "2030-12-05");
payrollService.addEmployee(6, "Frank", 80000, "M", "2019-07-15");

console.log("\nEmployee Payroll Data:");
console.log(payrollService.getAllEmployees());

module.exports = PayrollService;