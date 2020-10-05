const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeRoomNumber) {
        super(name, id, email);
        // sets office room number
        this.officeRoomNumber = officeRoomNumber; 
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;