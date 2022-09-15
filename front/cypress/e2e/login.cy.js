describe('empty spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    
  });
  it('Cadastro com senhas diferentes', () => {

    cy.get('p').click()

    cy.get('[placeholder="Nome Completo"]').type('Fulano de Tal')
    cy.get('[placeholder="E-mail"]').type('email@teste.com')
    cy.get('[placeholder="Senha"]').type('123456')
    cy.get('[placeholder="Confirmar Senha"]').type('123457')

    cy.get('button').click()

    cy.contains('As senhas precisam ser iguais!').should('be.visible')
  })

  it('Cadastro sem todos os campos serem preenchidos', () => {

    cy.get('p').click()

    cy.get('[placeholder="Nome Completo"]').type('Fulano de Tal')
    cy.get('[placeholder="E-mail"]').type('email@teste.com')
    cy.get('[placeholder="Senha"]').type('123456')

    cy.get('button').click()

    cy.contains('Todos os campos devem ser preenchidos!').should('be.visible')
  })

  it('Login errado', () => {
    cy.get('[placeholder="E-mail"]').type('cardosolucasrodrigues@gmail.com')
    cy.get('[placeholder="Senha"]').type('senha')
    cy.get('button').click()

    cy.contains('E-mail ou senha errados!').should('be.visible')
  });

  it('Login correto', () => {
    cy.get('[placeholder="E-mail"]').type('cardosolucasrodrigues@gmail.com')
    cy.get('[placeholder="Senha"]').type('Kamiza10')
    cy.get('button').click()

    cy.get('.active').should('have.text', 'ElectroPharm')    
  });

  it('Logout', () => {
    cy.get('[placeholder="E-mail"]').type('cardosolucasrodrigues@gmail.com')
    cy.get('[placeholder="Senha"]').type('Kamiza10')
    cy.get('button').click()

    cy.get('.active').should('have.text', 'ElectroPharm')    
    cy.get('.topnav > svg').click()
  })

  it('Já possuo uma conta, fazer login', () => {
    cy.get('p').click()
    cy.get('[placeholder="Nome Completo"]').should('be.visible')

    cy.get('p').click()
  });
});
