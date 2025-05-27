/* eslint:disable */

/**
 * CodingAssignments Refactoring: GearBox
 *
 * This is a refactoring challenge where the candidate can look at a single-method
 * case, where the method is untested, needs refactoring, and is hard to read. Oh,
 * and contains bugs;-)
 *
 * The assignment is as follows:
 *
 * This is the code for our customer's new environmentally friendly electric car.
 * The car is very dependent on software for almost everything, and the part that we're
 * working on is the automatic gear box. The code you see is the automatic gear box, which
 * currently shifts up if the engine goes over 2000 rpm, and down if it goes under 500.
 *
 * For our this new car, it's been determined that the choice of gear can be much
 * more efficient if we could just set more specific ranges of rpm for each gear.
 * Future versions of the car could then use actual measurements of fuel consumption
 * to configure those ranges on the fly!
 * Your assignment is to make the gearbox accept a range of rpms for each gear (and
 * of course use that range to shift gears!)
 *
 */
const MAX_GEAR = 6;
const MIN_GEAR = 0;
class GearBox {
  constructor(gear = MIN_GEAR, rpm = 0) {
    this.gear = gear;
    this.rpm = rpm;
  }

  doIt(rpm) {
    if (this.gear < 1 && rpm > 0) {
      this.gear++;
    } else if (this.gear > MIN_GEAR && this.gear < MAX_GEAR) {
      if (rpm > 2000) this.gear++;
      else if (rpm < 500) {
        this.gear--;
      }
    }
    
    this.rpm = rpm;
  }
}

module.exports = { GearBox, MAX_GEAR, MIN_GEAR };
