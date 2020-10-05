const Employee = require("../scripts/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name from constructor arguments", () => {
  const name = "Sally";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id from constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Fred", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email from constructor argument", () => {
  const testValue = "anon@anon.com";
  const e = new Employee("Fred", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name from getName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id from getId()", () => {
  const testValue = 100;
  const e = new Employee("Fred", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email from getEmail()", () => {
  const testValue = "anon@anon.com";
  const e = new Employee("Fred", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
