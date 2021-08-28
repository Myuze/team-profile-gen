const { it, expect } = require('@jest/globals');
const { describe } = require('yargs');
const TeamMember = require('../TeamMember');

describe("TeamMember", () => {

  it("Should have the property", () => {
      const tmember = new TeamMember('Gorge');

      expect(tmember.name).toEqual('Gorge');
  })
})