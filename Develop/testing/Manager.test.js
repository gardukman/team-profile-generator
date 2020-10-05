const Manager = require("../scripts/Manager");
const Employee = require("../scripts/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Fred", 1, "anon@anon.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Fred", 1, "anon@anon.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOfficeRoomNumber()", () => {
  const testValue = 100;
  const e = new Manager("Fred", 1, "anon@anon.com", testValue);
  expect(e.getOfficeRoomNumber()).toBe(testValue);
});