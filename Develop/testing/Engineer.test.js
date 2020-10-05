const Engineer = require("../scripts/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUsername";
  const e = new Engineer("Fred", 1, "anon@anon.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Fred", 1, "anon@anon.com", "GitHubUsername");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUsername";
  const e = new Engineer("Fred", 1, "anon@anon.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});