const refRoot = document.querySelector("#root");

const viewportWidth = document.documentElement.clientWidth;
const viewportHeight = document.documentElement.clientHeight;

refRoot.innerHTML = `<iframe src="https://scratch.mit.edu/projects/980197549/embed" allowtransparency="true" width="${viewportWidth}" height="${viewportHeight}" frameborder="0" scrolling="no" allowfullscreen></iframe>`;
