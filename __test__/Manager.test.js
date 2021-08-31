const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('Properties', () => {
    const member = new Manager('Shigu', 2, 'shigu@gmail.com');
    it('Should have the property "name", as a string', () => {
      expect(member.name).toEqual('Shigu');
      expect(typeof(member.name)).toBe('string');
    });
  });
});