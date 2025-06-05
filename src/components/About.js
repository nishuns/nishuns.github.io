const { Scroll } = require("./Scroll");

exports.About = ({ description }) => {
  return `
  <div class="page about" id="about">
    <div class="fizz"></div>
    <p class="about__text">${description}</p>
    ${Scroll('#skills')}
  </div>`;
};
