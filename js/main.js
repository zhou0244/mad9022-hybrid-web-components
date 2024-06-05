const log = console.log;

function init() {
  log("DOM loaded.");

  const maxInput = document.querySelector("max-input");
  const maxTextarea = document.querySelector("max-textarea");

  if (maxInput) {
    log("Component added.");
  }
  if (maxTextarea) {
    log("Component added.");
  }
}

document.addEventListener("DOMContentLoaded", init);
