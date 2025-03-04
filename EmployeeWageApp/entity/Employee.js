class Employee {
    constructor(id, name, salary, gender, startDate) {
        this.setName(name);
        this.id = id;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    // Validating name
    setName(name) {
        const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
        if (!namePattern.test(name)) {
            throw new Error("Invalid Name: Must start with a capital letter and have at least 3 characters.");
        }
        this.name = name;
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: $${this.salary}, Start Date: ${this.startDate}`;
    }
}

module.exports = Employee;