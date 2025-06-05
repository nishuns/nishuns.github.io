const { Header } = require('./components/header');
const { Home } = require('./components/Home');
const { About } = require('./components/About');
const { Skills } = require('./components/Skills');
const { Projects } = require('./components/Projects');
const { Body } = require('./components/Body');
const personal = require('./assets/data/personal.json');
const skills = require('./assets/data/skills.json');
const projects = require('./assets/data/projects.json');

const App = () => {
  return `
  ${Body(
    Header() +
    Home(personal) +
    About({ description: personal.description || '' }) +
    Skills(skills) +
    Projects(projects)
  )}`;
};

exports.App = App;
