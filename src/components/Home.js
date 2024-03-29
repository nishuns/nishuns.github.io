const { Scroll } = require('./Scroll');

exports.Home = ({name, salutation, tagline}) => {
  return `
  <div class="page home">
    <div id="home" class="home">
      <div class="home__intro">
        <h1 class="salutation">${salutation},</h1>
        <h3 class="address">I'm ${name},</h3>
        <h3 class="quotation">${tagline}</h3>
      </div>
    </div>
  </div>
  `
}