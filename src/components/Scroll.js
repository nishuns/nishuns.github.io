exports.Scroll = (link) => {
  const text = 'Scroll Down';
  return `<a href="${link || '#'}" class="scroll-down">${text}</a>`;
};
