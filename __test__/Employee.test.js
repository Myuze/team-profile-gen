const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('Properties', () => {
    
    it('Should have the property "name", as a string', () => {
      const member = new Employee('Gorge', 1, 'gorge@gmail.com');
      expect(member.name).toEqual('Gorge');
      expect(typeof(member.name)).toBe('string');
    });
    
    it('Should have the property "id", as a number', () => {
      const member = new Employee('Gorge', 1, 'gorge@gmail.com');
      expect(member.id).toEqual(1);
      expect(typeof(member.id)).toBe('number');
    });
    
    it('Should have the property "email", as a string', () => {
      const member = new Employee('Gorge', 1, 'gorge@gmail.com');
      expect(member.email).toEqual('gorge@gmail.com');
      expect(typeof(member.email)).toBe('string');
    });
  });
});