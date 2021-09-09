const RenderHTML = require('./RenderHTML');

class RenderCard {
  constructor(employeeObject) {
    this.employeeName = employeeObject.memberName;
    this.cardHeader = `<div class='card-header'></div>`
    this.cardContent = `<div class='card-contents></div>`
    this.cardHTML = ``;
  }

  renderCards(employeeArray) {
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
}

module.exports = RenderCard;
