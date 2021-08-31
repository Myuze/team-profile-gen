const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('Properties', () => {
    const member = new Intern('Shigu', 2, 'shigu@gmail.com');
    it('Should have the property "name", as a string', () => {
      expect(member.name).toEqual('Shigu');
      expect(typeof(member.name)).toBe('string');
    });
  });
});