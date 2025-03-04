const Employee = require("../entity/Employee.js");

class PayrollService {
    constructor() {
        this.employees = [];
    }

    addEmployee(id, name, salary) {
        const newEmployee = new Employee(id, name, salary);
        this.employees.push(newEmployee);
    }

    getAllEmployees() {
        return this.employees.map(emp => emp.getDetails());
    }
}


const payrollService = new PayrollService();
payrollService.addEmployee(1, "Alice", 50000);
payrollService.addEmployee(2, "Bob", 60000);

console.log("Employee Payroll Data:");
console.log(payrollService.getAllEmployees());

module.exports = PayrollService;