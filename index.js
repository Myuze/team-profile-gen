const { Questions } = require('./src/Questions');
const { RenderHTML } = require('./src/RenderHTML');
const question = new Questions();
const HTMLPath = './src/index.html';

question.getResponse()
.then((response) => {
  console.info('index response: ', response)
  
}).catch((error) => error ? console.log(new Error(error)): console.log('SUCCESS'));

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
    memberName: 'Michael Rogers',
    id: '3',
    email: 'mrogers@gmail.com',
    role: 'Intern',
    school: 'Davis'
  }
]