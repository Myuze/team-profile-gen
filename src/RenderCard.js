class RenderCard extends RenderHTML {
  constructor(employeeObject) {
    super()
    this.employeeName = employeeObject.memberName;
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
