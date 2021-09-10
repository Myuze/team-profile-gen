const Questions = require('./src/Questions');
const renderCardsHTML = require('./src/renderCardsHTML');
const RenderBodyHTML = require('./src/RenderBodyHTML');
const RenderHTML = require('./src/RenderHTML');
const parseEmployee = require('./lib/parseEmployee');

const Question = new Questions();
const Body = new RenderBodyHTML();
const Render = new RenderHTML();

const HTMLPath = './src/index.html';

// Question.getResponse()
// .then((response) => {
//   console.info('index response: ', response)
  
// }).catch((error) => error ? console.log(new Error(error)): console.log('SUCCESS'));

// TEST OBJECT
var testObject = [
  {
    teamName: "Myuze's Team",
    memberName: 'Florian Meneses',
    id: '1',
    email: 'flmeneses.dev@gmail.com',
    role: 'Manager',
    officeNum: '100'
  },
  {
    teamName: "Myuze's Team",
    memberName: 'Evelyn Nguyen',
    id: '2',
    email: 'lotus@gmail.com',
    role: 'Engineer',
    github: 'ENguyen25'
  },
  {
    teamName: "Myuze's Team",
    memberName: 'Alice Nguyen',
    id: '2',
    email: 'awonder@gmail.com',
    role: 'Engineer',
    github: 'mrogers23458'
  },
  {
    teamName: "Myuze's Team",
    memberName: 'Michael Rogers',
    id: '3',
    email: 'mrogers@gmail.com',
    role: 'Intern',
    school: 'Davis'
  },
  {
    teamName: "Myuze's Team",
    memberName: 'Julian Williams',
    id: '3',
    email: 'jwill@gmail.com',
    role: 'Intern',
    school: 'Berkeley'
  }
]

// Create an array of Employee classes based on role
var empArray = [];

testObject.forEach(member => {
  var empClass = parseEmployee(member);
  empArray.push(empClass)
});

// Create Employee Cards 
const htmlCards = renderCardsHTML(empArray);

// Create HTML body and add employee cards
const htmlBody = Body.addContent(htmlCards);

// Create Team Profile HTML
Render.createHTML(htmlBody);
