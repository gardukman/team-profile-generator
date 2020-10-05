const path = require("path");
const fs = require("fs");

const constructDir = path.resolve(__dirname, "../Constructors");

const htmlRender = employees => {
  const html = [];
  console.log("render called");
  html.push(...employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager))
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
  );

  return renderMain(html.join(""));

};

const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(constructDir, "manager.html"), "utf8");
  template = switchPlaceholder(template, "name", manager.getName());
  template = switchPlaceholder(template, "email", manager.getEmail());
  template = switchPlaceholder(template, "role", manager.getRole());
  template = switchPlaceholder(template, "id", manager.getId());
  template = switchPlaceholder(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(constructDir, "engineer.html"), "utf8");
  template = switchPlaceholder(template, "name", engineer.getName());
  template = switchPlaceholder(template, "email", engineer.getEmail());
  template = switchPlaceholder(template, "role", engineer.getRole());
  template = switchPlaceholder(template, "id", engineer.getId());
  template = switchPlaceholder(template, "github", engineer.getGithub());
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(constructDir, "intern.html"), "utf8");
  template = switchPlaceholder(template, "name", intern.getName());
  template = switchPlaceholder(template, "email", intern.getEmail());
  template = switchPlaceholder(template, "role", intern.getRole());
  template = switchPlaceholder(template, "id", intern.getId());
  template = switchPlaceholder(template, "school", intern.getSchool());
  return template;
};

const renderMain = html => {
  const template = fs.readFileSync(path.resolve(constructDir, "main.html"), "utf8");
  return switchPlaceholder(template, "team", html);
};

const switchPlaceholder = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = htmlRender;