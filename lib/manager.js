const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, id, email, phone) {
        super(name, id, email);
        this.phone = phone;
    }
    getRole(){
        return "Manager";
    }
    getOfficeNumber(){
        return this.phone;
    }

}

module.exports = Manager;