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


const payrollService = new PayrollService();
payrollService.addEmployee(1, "Alice", 50000, "Female", "2023-01-10");
payrollService.addEmployee(2, "bob", 60000, "Male", "2022-05-15");
payrollService.addEmployee(3, "Al", 45000, "Male", "2021-08-20");
payrollService.addEmployee(4, "Charlie", 70000, "Male", "2020-12-05");

console.log("Employee Payroll Data:");
console.log(payrollService.getAllEmployees());

module.exports = PayrollService;