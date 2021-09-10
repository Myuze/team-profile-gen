const parseEmployee = require('../lib/parseEmployee');

function renderCardsHTML(employeeArray) {
  if (!employeeArray) return;
  
  parseEmployee(employeeArray)

  const cardHeader = `<div class='card-header'>\n\t${employeeArray.name}\n${employeeArray.role}</div>`;
  const cardContent = `<div class='card-contents>`;
  const cardHTML = ``;

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

function testCard() {
  var testCard = `<div class='card-container'>\n<div class='card'>\n<div class='card-header'>\n<h2>Florian Meneses</h1>\n<h3>Manager</h2>\n</div>\n<div class='card-contents'>\n<ul>\n<li>ID: 1</li>\n<li>Email: flmeneses.dev@gmail.com</li>\n<li>Office #: 100</li>\n</ul>\n</div>\n</div>\n</div>\n`

return testCard;
}

module.exports = renderCardsHTML;
