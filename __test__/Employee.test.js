const Employee = require('../lib/Employee');

describe('Employee', () => {
  const memName = 'Gorge';
  const memId = 1;
  const memEmail = 'gorge@gmail.com';

  const member = new Employee(memName, memId, memEmail);

  describe('Properties', () => {
    it('Should have the property "name", as a string', () => {
      expect(member.name).toEqual(memName);
      expect(typeof(member.name)).toBe('string');
    });
    
    it('Should have the property "id", as a number', () => {
      expect(member.id).toEqual(memId);
      expect(typeof(member.id)).toBe('number');
    });
    
    it('Should have the property "email", as a string', () => {
      expect(member.email).toEqual(memEmail);
      expect(typeof(member.email)).toBe('string');
    });
  });

  describe('Methods', () => {
    it('Should have the method "getName", which returns the "name" value.', () => {
      const result = member.getName();

      expect(result).toEqual(memName);
    });

    it('Should have the method "getId", which returns the "id" value.', () => {
      const result = member.getId();

      expect(result).toEqual(memId);
    });

    it('Should have the method "getEmail", which returns the "email" value.', () => {
      const result = member.getEmail(memEmail);

      expect(result).toEqual(memEmail);
    });
    
    it('Should have the method "getRole", which returns the role "Employee" value, as a string.', () => {
      const result = member.getRole();

      expect(result).toEqual('Employee');
      expect(typeof(result)).toBe('string');
    });
  });
});
