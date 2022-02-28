const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

function generateHTML(data) {
    let cards = []
    for(let i = 0; i < data.length; i++) {
      const employeeArray = data[i];
      switch(employeeArray.getRole()) {

        case 'Manager':
          const manager = new Manager(employeeArray.id, employeeArray.name, employeeArray.email, employeeArray.phone);
          cards.push(managerCard(manager));
          break;

        case 'Engineer':
          const engineer = new Engineer(employeeArray.id, employeeArray.name, employeeArray.email, employeeArray.github);
          cards.push(engineerCard(engineer));
          break;

        case 'Intern':
          const intern = new Intern(employeeArray.id, employeeArray.name, employeeArray.email, employeeArray.school);
          cards.push(internCard(intern));
          break;
      }
    }
        const employeeCards = cards.join('')

        const generateTeamPage = generateTeam(employeeCards); 
        return generateTeamPage;
  }
  


const managerCard = (manager) => {
    return `
    <div class = "manager-box">  
        <div class = "box">
            <h2 class = "title is-3"> Team Manager <i class="fas fa-user-check"></i></h2>
            <p> Name: ${manager.name}</p>
            <p> Employee ID: ${manager.id} </p>
            <p> Email: ${manager.email} </p>
            <p> Office Phone: ${manager.phone} </p>
         </div>
    </div> `
   
}

const engineerCard = (engineer) => {
    return  `
    <div class = "engineer-box">
       <div class = "box">
            <h2 class = "title is-3"> Engineer <i class="fas fa-hammer"></i> </h2>
            <p> Name: ${engineer.name} </p>
            <p> Employee ID: ${engineer.id}</p>
            <p> Email: ${engineer.email} </p>
         <p> GitHub: ${engineer.github} </p>
        </div>
    </div>
`
}

const internCard = (intern) => {
    return `
    <div class = "intern-box">
        <div class = "box">
            <h2 class = "title is-3"> Intern <i class="fas fa-user-graduate"></i> </h2>
            <p> Name: ${intern.name}</p>
            <p> Employee ID: ${intern.id}</p>
            <p> Email: ${intern.email} </p>
            <p> School: ${intern.school} </p>
        </div>
    </div>
    
    `
}


const generateTeam = (teamCards) =>{
    return ` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <script src="https://kit.fontawesome.com/67537d6602.js" crossorigin="anonymous"></script>
        <link rel= "stylesheet" href = "../public/stylesheet.css">
        <title> Team Profile </title>
    </head>
    <body>
    
    <div class = "title-box">  
        <h1 class = "title is-2"> Team Profile Generator </h1>
    </div>
            ${teamCards}
    </body>
    </html> `

}

module.exports = generateHTML;