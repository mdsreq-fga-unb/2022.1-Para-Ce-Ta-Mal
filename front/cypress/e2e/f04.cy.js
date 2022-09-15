import { faker } from '@faker-js/faker';

const firstRandom = faker.name.firstName();

describe('Feature 04 - Estoque ', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[placeholder="E-mail"]').type('cardosolucasrodrigues@gmail.com')
        cy.get('[placeholder="Senha"]').type('Kamiza10')
        cy.get('button').click()

        cy.get('.active').should('have.text', 'ElectroPharm')
        
    });

    it('Cadastrar produto', () => {
        cy.get('.electron-back > :nth-child(3)').click()
        
        cy.url().should('include', '/estoque')

        cy.get('.add-product').click()

        cy.url().should('include', 'cadastrar-produto')        

        cy.get('.nome-produto > .input-border').type(firstRandom + ' 20 comprimidos')
        cy.get('.ean-input > .input-border').type(Math.random(7000000000000))
        cy.get('.estoque-input > .input-border').type('123123')
        cy.get('.preco-custo-input > .input-border').type('20')
        cy.get('.preco-venda-input > .input-border').type('25')
        cy.get('#categoria').select('Medicamento')
        cy.get('.valor-maximo-desconto-input > .input-border').type('10')
        cy.get('.percentual-comissao-input > .input-border').type('2')
        cy.get(':nth-child(9) > .input-border').type('123')
        cy.get(':nth-child(10) > .input-border').type('https://picsum.photos/200')

        cy.get('.cadastrar-produto-button').click()
    });

    it('Editar produto', () => {
        cy.get('.electron-back > :nth-child(3)').click()
        
        cy.url().should('include', '/estoque')

        //cy.get(':nth-child(2) > p').next().next().click()

        cy.get(':nth-child(2) > div > [viewBox="0 0 576 512"] > path').click()

        cy.get('.nome-produto > .input-border').type(' EDITADOEDITADOEDITADOEDITADOEDITADO')

        cy.get('.cadastrar-produto-button').click()
    });

    it('Excluir produto', () => {
        cy.get('.electron-back > :nth-child(3)').click()
        
        cy.url().should('include', '/estoque')

        cy.get(':nth-child(2) > div > [viewBox="0 0 448 512"] > path').click()

        cy.get('.Toastify__toast-body').should('contain.text','Produto deletado com sucesso!' )
    });
});