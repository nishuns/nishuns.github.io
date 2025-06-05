const { Scroll } = require("./Scroll");

exports.Projects = (projects) => {
  const list = projects.map(p => `
    <div class="project">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      ${p.link ? `<a href="${p.link}" target="_blank">View</a>` : ''}
    </div>`).join('');
  return `
  <div class="page projects" id="projects">
    <div class="fizz"></div>
    ${list}
    ${Scroll()}
  </div>`;
};
