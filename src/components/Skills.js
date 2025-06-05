exports.Skills = (skills) => {
  const list = skills.map(s => `<li class="skill"><span>${s.name}</span> - ${s.level}</li>`).join('');
  return `
  <div class="page skills" id="skills">
    <h2>Skills</h2>
    <ul class="skills__list">${list}</ul>
  </div>
  `;
};
