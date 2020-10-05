const Intern = require("../scripts/Intern");

test("Can set school via constructor", () => {
  const testValue = "UofU";
  const e = new Intern("Fred", 1, "anon@anon.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Fred", 1, "anon@anon.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Fred", 1, "anon@anon.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});