const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, GitHubUsername){
        super(name,id,email); 
        this.github = GitHubUsername;
        this.role = "Engineer";
    }

    getGithub(){
        return this.github;
    }

}

module.exports = Engineer;