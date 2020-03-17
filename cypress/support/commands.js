// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// const COMMAND_DELAY = 1000;

// for (const command of ['visit', 'click', 'trigger', 'type', 'clear', 'reload', 'contains']) {
//     Cypress.Commands.overwrite(command, (originalFn, ...args) => {
//         const origVal = originalFn(...args);

//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(origVal);
//             }, COMMAND_DELAY);
//         });
//     });
// }

Cypress.Commands.add(
  "uploadFile",
  { prevSubject: true },
  (subject, fileName, fileType = "") => {
    cy.fixture(fileName, "binary").then(content => {
      return Cypress.Blob.binaryStringToBlob(content, fileType).then(blob => {
        const el = subject[0];
        const testFile = new File([blob], fileName, { type: fileType });
        const dataTransfer = new DataTransfer();

        dataTransfer.items.add(testFile);
        el.files = dataTransfer.files;
        cy.wrap(subject[0]).trigger("change", { force: true });
      });
    });
  }
);
