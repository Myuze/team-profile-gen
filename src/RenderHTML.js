var teamSectionHTML = 'test'
const HTMLindex = 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
</head>
<body>
${teamSectionHTML}  
</body>
</html>`

function createHTML() {
  
};

function renderCards(employeeArray) {
  employeeArray.forEach(employee => {
    var role = employee.getRole();

    switch (role) {
      case 'Manager':
        break;
      case 'Engineer':
        break;
      case 'Intern':
        break;
      case 'Employee':
        break;
    };
  });
};

module.exports = {
  createHTML
}