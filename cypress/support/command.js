Cypress.Commands.add("printMessage", () => {
  cy.log("hello word");
});

Cypress.Commands.add("sentRequest", (type,endpoint,body) => {
  cy.request({
    method: type,
    url: endpoint,
    body: body,
    headers: {
      Authorization: "pk_302443215_165TQHSI0882JAP2EDEYNFMW68UQ3EVK"
    },
    body: body
    failOnStatusCode: false,
  })
})


