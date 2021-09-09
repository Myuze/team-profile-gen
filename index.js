const { Questions } = require('./src/Questions');
const RenderCard = require('./src/RenderCard');
const { createHTML } = require('./src/RenderHTML');
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

var empArray = [];
testObject.forEach(member => {
  console.log(member)
  var empClass = parseEmployee(member);
  empArray.push(empClass)

});

console.log(empArray)