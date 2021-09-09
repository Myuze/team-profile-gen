const { Questions } = require('./src/Questions');
const { RenderHTML } = require('./src/RenderHTML');
const question = new Questions();
const HTMLPath = './src/index.html';

question.getResponse()
.then((response) => {
  console.info(response)
  
}).catch((error) => error ? console.log(new Error(error)): console.log('SUCCESS'));