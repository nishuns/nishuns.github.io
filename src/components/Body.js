const { Head } = require('./Head');

exports.Body = (content) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  ${Head()}
  <body>
    <div id="app">
      ${content}
    </div>
    ${Scripts()}
  </body>
  </html>
  `;
};

const Scripts = () => {
  return `
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" crossorigin="anonymous"></script>
    <script src="./scripts/scroll.js"></script>
  `;
};
