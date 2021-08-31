const Intern = require('../lib/Intern');

describe('Intern', () => {
  const memName = 'Shigu';
  const memId = 1;
  const memEmail = 'shigu@gmail.com';
  const memSchool = 'DeVry';

  const member = new Intern(memName, memId, memEmail, memSchool);

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

    it('Should have the property "school", as a string', () => {
      expect(member.school).toEqual(memSchool);
      expect(typeof(member.school)).toBe('string');
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

    it('Should have the method "getSchool", which returns the "school" value.', () => {
      const result = member.getSchool();

      expect(result).toEqual(memSchool);
    });
    
    it('Should have the method "getRole", which returns the role "Intern" value, as a string.', () => {
      const result = member.getRole();

      expect(result).toEqual('Intern');
      expect(typeof(result)).toBe('string');
    });
  });
});