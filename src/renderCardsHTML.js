function renderCardsHTML(employeeArray) {
  if (!typeof(employeeArray) === 'Array') return 'Array not provided.';
  
  let cardsHTML = ``;
  
  employeeArray.forEach(employee => {
    const role = employee.getRole();
    let roleSpecificItem = ``;
    let roleSpecificClass = '';
  
    switch (role) {
      case 'Manager':
        roleSpecificClass = `office-num'>Office #: `;
        roleSpecificItem = employee.officeNumber;
        break;

      case 'Engineer':
        roleSpecificClass = `github'>Github Username: `;
        roleSpecificItem = employee.github;
        break;

      case 'Intern':
        roleSpecificClass = `school'>School: `;
        roleSpecificItem = employee.school;
        break;

      default:
        console.log('Invalid Role');
    };

    cardsHTML += `<div class='card-container'>\n\t<div class='card'>\n\t<div class='card-header'>\n\t<h2>${employee.name}</h2>\n<h3>${employee.getRole()}</h3>\n</div><div class='card-contents'>\n\t<ul>\n\t<li class='id'>ID: ${employee.id}</li>\n<li class='email'>Email: ${employee.email}</li>\n<li class='${roleSpecificClass}${roleSpecificItem}\n</ul>\n</div>\n</div>\n</div>\n`
  });

  return cardsHTML;
};

function testCard() {
  var testCard = `<div class='card-container'>\n<div class='card'>\n<div class='card-header'>\n<h2>Florian Meneses</h1>\n<h3>Manager</h2>\n</div>\n<div class='card-contents'>\n<ul>\n<li>ID: 1</li>\n<li>Email: flmeneses.dev@gmail.com</li>\n<li>Office #: 100</li>\n</ul>\n</div>\n</div>\n</div>\n`

return testCard;
}

module.exports = renderCardsHTML;
