const { GearBox, MAX_GEAR, MIN_GEAR } = require("../src/GearBox");

require("jest");

describe("GearBoxShould", () => {
  it("do nothing when rpm=0", () => {
    box = new GearBox();
    box.doIt(0);
    expect(box.gear).toBe(0);
  });
  it("gear up when gear is 0 and any rpm", () => {
    box = new GearBox(0);
    box.doIt(400);
    expect(box.gear).toBe(1);
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
  it("gear max when rpm>2000", () => {
    box = new GearBox(MAX_GEAR);
    box.doIt(2400);
    expect(box.gear).toBe(MAX_GEAR);
  });
  
});
