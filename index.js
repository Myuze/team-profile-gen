// Required Imports
const Questions = require('./src/Questions');
const RenderBodyHTML = require('./src/RenderBodyHTML');
const RenderHTML = require('./src/RenderHTML');
const renderCardsHTML = require('./src/renderCardsHTML');
const parseEmployee = require('./lib/parseEmployee');

// Class Instances
const Question = new Questions();
const Body = new RenderBodyHTML();
const Render = new RenderHTML();

// Main
function main() {
  // Prompt for Team Member data
  Question.getResponse()
  .then((response) => {
    // Create an array of Employee classes based on role
    var empArray = [];
    
    response.forEach(member => {
      var empClass = parseEmployee(member);
      empArray.push(empClass)
    });
    
    // Create Employee Cards 
    const htmlCards = renderCardsHTML(empArray);
    
    // Create HTML body and add employee cards
    const htmlBody = Body.addContent(htmlCards);
    
    // Create Team Profile HTML
    Render.createHTML(htmlBody);

  }).catch((error) => error ? console.log(new Error(error)): console.log('SUCCESS'));
};

main();