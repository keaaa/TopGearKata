const GearBox = require("../src/GearBox");

require("jest");

describe("GearBoxShould", () => {
  it("do nothing when rpm=0", () => {
    box = new GearBox();
    box.doIt(0);
    expect(box.gear).toBe(0);
  });
  it("gear up when rpm>2000", () => {
    box = new GearBox();
    box.doIt(3000);
    expect(box.gear).toBe(1);
  });
  it("gear down when rpm<500", () => {
    box = new GearBox(2);
    box.doIt(400);
    expect(box.gear).toBe(1);
  });
});
