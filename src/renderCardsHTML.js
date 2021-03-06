// Function to create card HTML for each employee object in an array
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
        roleSpecificItem = `<a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a>`;
        break;

      case 'Intern':
        roleSpecificClass = `school'>School: `;
        roleSpecificItem = employee.school;
        break;

      default:
        console.log('Invalid Role');
    };

    cardsHTML += `\n\t\t<div class='card${' ' + role.toLowerCase()}'>\n\t\t\t<div class='card-header'>\n\t\t\t\t<h2>${employee.name}</h2>\n\t\t\t\t<h3>${role}</h3>\n\t\t\t</div>\n\t\t\t<div class='card-contents'>\n\t\t\t\t<ul>\n\t\t\t\t\t<li class='id'>ID: ${employee.id}</li>\n\t\t\t\t\t<li class='email'>Email: <a href="mailto:${employee.email}">${employee.email}</a></li>\n\t\t\t\t\t\<li class='${roleSpecificClass}${roleSpecificItem}</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\t`
  });

  return cardsHTML + `\n\t</div>`;
};

module.exports = renderCardsHTML;
