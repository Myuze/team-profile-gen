const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  describe('Properties', () => {
    const member = new Engineer('Shigu', 2, 'shigu@gmail.com');
    it('Should have the property "name", as a string', () => {
      expect(member.name).toEqual('Shigu');
      expect(typeof(member.name)).toBe('string');
    });
  });
});