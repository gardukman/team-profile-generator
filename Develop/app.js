const Manager = require("./scripts/Manager");
const Engineer = require("./scripts/Engineer");
const Intern = require("./scripts/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./scripts/renderHTML");
const Employee = require("./scripts/Employee");
const { type } = require("os");
const Team = [];

let mainMenu = [
    {
        type: "list",
        name: "MainMenu",
        message: "What would you like to do?",
        choices: ['Create_Team', 'Exit'],
    },

];

let addEmployees = [
    {
        type: "list",
        name: "addEditTeam",
        message: "Add orEdit Employees - What would you like to do",
        choices: ["Add a Manager", "Add a Engineer", "Add a Intern","Render a Team List", "Go Back to Main Menu"]

    }

];

addManager = () => {
    const addManager = [
        {
            type: 'input',
            name: 'managerName',
            message: 'Enter Manager\'s Name?',
        },
        { 
            type: 'input',
            name: 'id',
            message: 'Please enter the ID.',
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
            },
            filter: Number,
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter Manager\'s Email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the Manager\'s office number.',
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
            },
            filter: Number,
        }
    ]

    inquirer.prompt(addManager).then((aManagerObj) => {
       const {managerName, id, managerEmail, officeNumber} = aManagerObj;
       let ManagerToAdd = new Manager(managerName, id, managerEmail, officeNumber);
        console.log(ManagerToAdd);
        Team.push(ManagerToAdd);
        console.log(Team);
        console.log("manger is type of" + typeof(ManagerToAdd));
        teamMaker();
    });


}

addEngineer = () => {
    const addEngineer = [
        {
            type: 'input',
            name: 'engineerName',
            message: 'Enter Engineer\'s Name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the ID.',
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
            },
            filter: Number,
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Enter Engineer\'s Email?',
        },
        {
            type: 'input',
            name: 'GitHubUsername',
            message: 'Please enter the Engineer\'s GitHub user name.',
        }
    ]

    inquirer.prompt(addEngineer).then((aEngineerObj) => {
        const { engineerName, id, engineerEmail, GitHubUsername } = aEngineerObj;
        let EngineerToAdd = new Engineer(engineerName, id, engineerEmail, GitHubUsername);
        console.log(EngineerToAdd);
        Team.push(EngineerToAdd);
        console.log(Team);
        teamMaker();
    });
}

addIntern = () => {
    const addIntern = [
        {
            type: 'input',
            name: 'internName',
            message: 'Enter Intern\'s Name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the ID.',
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
            },
            filter: Number,
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Enter Intern\'s Email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Where did the intern attend school?',
        }
    ]

    inquirer.prompt(addIntern).then((aInternObj) => {
        const { internName, id, internEmail, school } = aInternObj;
        let InternToAdd = new Intern(internName, id, internEmail, school);
        console.log(InternToAdd);
        Team.push(InternToAdd);
        console.log(Team);
        teamMaker();
    });
}

function renderTeam(){
    console.log("rendering team....");
    let teamHTML = render(Team);
    fs.writeFile(outputPath, teamHTML, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully wrote to html!");
    });

    teamMaker();
}

function teamMaker() {
    inquirer.prompt(addEmployees).then((answer) => {
        switch(answer.addEdit){
            case "Add a Manager":
                addManager();
                break;
            case "Add an Engineer":
                addEngineer();
                break;
            case "Add an Intern":
                addIntern();
                break;
            case "Make a Team List":
                renderTeam();
                break;
            case "Go Back to Main Menu":
                init();     
                break;
            default:
                init();
                break;           
        }
    });
}

function init() {
    inquirer.prompt(mainMenu).then((answer) => {
        if (answer.MainMenu === "Create_Team") {
            teamMaker();
        } else {
            console.log("Exiting....")
        }
    });
}
let currentPrompt = mainMenu;
init();