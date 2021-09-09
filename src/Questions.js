const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: 'input',
    message: 'Enter Team name?',
    name: 'teamName'
  },
  {
    type: 'input',
    message: 'Enter a Team Member name: ',
    name: 'memberName'
  },  
  {
    type: 'input',
    message: 'Enter Employee ID: ',
    name: 'id'
  },  
  {
    type: 'input',
    message: 'Enter Employee Email Address: ',
    name: 'email'
  },  
  {
    type: 'list',
    message: 'Select a Role: ',
    choices: ['Manager', 'Engineer', 'Intern'],
    name: 'role'
  },
  {
    type: 'input',
    message: 'Enter Office Number: ',
    when: (answers) => answers.role === 'Manager',
    name: 'officeNum'
  },
  {
    type: 'input',
    message: 'Enter Github Username: ',
    when: (answers) => answers.role === 'Engineer',
    name: 'github'
  },
  {
    type: 'input',
    message: 'Enter School Attended: ',
    when: (answers) => answers.role === 'Intern',
    name: 'school'
  },
  {
    type: 'confirm',
    message: 'Would you like to add another Team Member? ',
    name: 'repeat',
    default: false
  }
];

class Questions {
  constructor (questions) {
    this.questions = questions;
    this.response;
  }

  getResponse() { return prompt(questions) };

  logResponse() { console.log(this.response) };
}

module.exports = {
  questions,
  Questions
}