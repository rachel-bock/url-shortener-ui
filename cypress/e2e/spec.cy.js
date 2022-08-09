describe('Testing URL Shortener', () => {

  beforeEach(() =>{
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {fixture: 'urlsData.json'});
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {fixture: 'afterData.json'});
    cy.visit('http://localhost:3000');
  })

  it('Views page title', () => {
    cy.get('h1').contains('URL Shortener');
  });

  it('Views the existing shortened URLs', () => {       
    cy.get('section').should('have.length', 1);
    cy.get('.url').contains('Awesome');
  });

  it('Shows the form with the proper input fields', () => {
    cy.get('[placeholder="Title..."]').should('have.attr', 'name', 'title');
    cy.get('[placeholder="URL to Shorten..."]').should('have.attr', 'name', 'urlToShorten');
  });

  it('Should reflect user input in form', () => {
    cy.get('[placeholder="Title..."]')
      .type('Hello')
      .should('have.attr', 'value', 'Hello');
    cy.get('[placeholder="URL to Shorten..."]')
      .type('http://www.example.com')
      .should('have.attr', 'value', 'http://www.example.com');
  });

  it('Should update the page with a new url when user submits inputs in form', () => {
    cy.get('[placeholder="Title..."]')
      .type('Hello')
      .should('have.attr', 'value', 'Hello');
    cy.get('[placeholder="URL to Shorten..."]')
      .type('https://www.example.com')
      .should('have.value', 'https://www.example.com');
    cy.get('button').click();
    cy.contains('Hello');
  });
})