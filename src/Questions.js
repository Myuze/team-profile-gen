const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: 'input',
    message: 'What is the team name?',
    name: 'teamName'
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