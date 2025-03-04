class Employee {
    constructor(id, name, salary, gender, startDate) {
        this.setName(name);
        this.setId(id);
        this.setSalary(salary);
        this.setGender(gender);
        this.setStartDate(startDate);
    }

    // Validating name
    setName(name) {
        const namePattern = /^[A-Z][a-zA-Z]{2,}$/; // Starts with capital, at least 3 characters
        if (!namePattern.test(name)) {
            throw new Error("Invalid Name: Must start with a capital letter and have at least 3 characters.");
        }
        this.name = name;
    }

    // validating id
    setId(id) {
        if (isNaN(id) || id <= 0) {
            throw new Error("Invalid ID: Must be a non-zero positive number.");
        }
        this.id = id;
    }

    // Validating salary
    setSalary(salary) {
        if (isNaN(salary) || salary <= 0) {
            throw new Error("Invalid Salary: Must be a non-zero positive number.");
        }
        this.salary = salary;
    }

    // Validating gender
    setGender(gender) {
        const genderPattern = /^[MF]$/; // Only "M" or "F"
        if (!genderPattern.test(gender)) {
            throw new Error("Invalid Gender: Must be 'M' or 'F'.");
        }
        this.gender = gender;
    }

    // Validating date
    setStartDate(startDate) {
        const dateObj = new Date(startDate);
        const today = new Date();
        if (isNaN(dateObj) || dateObj > today) {
            throw new Error("Invalid Start Date: Cannot be a future date.");
        }
        this.startDate = startDate;
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: $${this.salary}, Start Date: ${this.startDate}`;
    }
}

module.exports = Employee;