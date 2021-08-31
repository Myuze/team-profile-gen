const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: 'input',
    message: 'What is the team name?',
    name: 'teamName'
  }
];

module.exports = {
  Questions
}