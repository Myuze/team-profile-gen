function renderCardsHTML(employeeArray) {
  if (!typeof(employeeArray) === 'Array') return 'Array not provided.';
  
  let cardsHTML = `\t<div class='card-container'>`;
  
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
        roleSpecificItem = `<a href="https://github.com/${employee.github}">${employee.github}</a>`;
        break;

      case 'Intern':
        roleSpecificClass = `school'>School: `;
        roleSpecificItem = employee.school;
        break;

      default:
        console.log('Invalid Role');
    };

    cardsHTML += `\n\t\t<div class='card'>\n\t\t\t<div class='card-header'>\n\t\t\t\t<h2>${employee.name}</h2>\n\t\t\t\t<h3>${employee.getRole()}</h3>\n\t\t\t</div>\n\t\t\t<div class='card-contents'>\n\t\t\t\t<ul>\n\t\t\t\t\t<li class='id'>ID: ${employee.id}</li>\n\t\t\t\t\t<li class='email'>Email: <a href="mailto:${employee.email}">${employee.email}</a></li>\n\t\t\t\t\t\<li class='${roleSpecificClass}${roleSpecificItem}</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\t`
  });

  return cardsHTML + `\n\t</div>`;
};

function testCard() {
  var testCard = `<div class='card-container'>\n<div class='card'>\n<div class='card-header'>\n<h2>Florian Meneses</h1>\n<h3>Manager</h2>\n</div>\n<div class='card-contents'>\n<ul>\n<li>ID: 1</li>\n<li>Email: flmeneses.dev@gmail.com</li>\n<li>Office #: 100</li>\n</ul>\n</div>\n</div>\n</div>\n`

return testCard;
}

module.exports = renderCardsHTML;
