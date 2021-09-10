const Questions = require('./src/Questions');
const renderCardsHTML = require('./src/renderCardsHTML');
const RenderBodyHTML = require('./src/RenderBodyHTML');
const RenderHTML = require('./src/RenderHTML');
const parseEmployee = require('./lib/parseEmployee');

const question = new Questions();
const HTMLPath = './src/index.html';

// question.getResponse()
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
    memberName: 'Evalyn Nguyen',
    id: '2',
    email: 'lotus@gmail.com',
    role: 'Engineer',
    github: 'ironwoodlotus'
  },
  {
    teamName: "Myuze's Team",
    memberName: 'Alice Nguyen',
    id: '2',
    email: 'awonder@gmail.com',
    role: 'Engineer',
    github: 'aliceinwonderland'
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

// Create Employees classes based on role
var empArray = [];
testObject.forEach(member => {
  var empClass = parseEmployee(member);
  empArray.push(empClass)
});

// Create Employee Cards 
const htmlCards = renderCardsHTML(empArray);

// Create HTML body and add employee cards
const body = new RenderBodyHTML(htmlCards);
const htmlBody = body.addContent();

// Create Team Profile HTML
const render = new RenderHTML(htmlBody);
render.createHTML();
W