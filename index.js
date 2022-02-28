// PACKAGES NEEDED FOR APP
const inquirer = require("inquirer");
const fs = require("fs");
const createTeam = require("./src/createTeam");

// LIBS REQUIRED FOR APP
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const allEmployees = [];

function employeePromt(){
    return inquirer.prompt([
        {
            // EMPLOYEE ROLE 
            type: "list",
            name: "role",
            message: "what is the employees role?",
            choices: [ "Manager", "Engineer", "Intern"]

        },

        {
            // Manager Phone
            type: 'input',
            name: 'phone',
            message: 'what is the managers phone?',
            when: (input) => input.role === "Manager",
           
        },

        {
            // Engineer GitHub
            type: 'input',
            name: 'github',
            message: 'what is the engineers github?',
            when: (input) => input.role === "Engineer",
            
        },

        {
            // Intern School
            type: 'input',
            name: 'school',
            message: 'what is the interns school?',
            when: (input) => input.role === "Intern",

        },

        {
            // EMPLOYEE NAME
            name: "name",
            message: "what is the employee's name",
            type: "input"
            
        },

        {
            // EMPLOYEE ID
            name: "id",
            message: "what is the employees id?",
            type: "input"
            
        },

        {
            // EMPLOYEE EMAIL
            name: "email",
            message: "what is the employees email?",
            type: "input"
    
        },

        {
            type: "confirm",
            name: "moreMembers",
            message: "would you like to add more members to your team?",
            default: false
            
        }]).then(employeeInput => {
        let { name, id, email, role, github, school, phone, moreMembers } = employeeInput;
        let employee;

        if(role === "Manager"){
            employee = new Manager (name, id, email, phone);
        } else if (role === "Engineer") {
            employee = new Engineer(name, id, email, github);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }
            allEmployees.push(employee);
                if (moreMembers){
                    return employeePromt()
                } else {
                    return allEmployees
                }

          })

}

function writeFile(data){
    fs.writeFile("dist/index.html", data, err => {
        if (err) {
            console.log("There was an error writing your file!")
        } else {
            console.log("Your Team has been created!")
        }
    })
}

employeePromt()
    .then(employeePromt)
    .then(allEmployees => {
        return createTeam(allEmployees);
    })
    .then(teamHTML => {
        return writeFile(teamHTML);
    })