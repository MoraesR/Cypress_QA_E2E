



describe('Testes de Regressão - Site Cnarios', () => {
  
  beforeEach(() => {
    // Visita o site antes de cada teste
    cy.visit('https://www.cnarios.com/')
  })

  it('Deve validar se a Home carregou corretamente', () => {
    // Verifica se o título da página contém a palavra-chave
    cy.title().should('contain', 'Cnarios')
    
    // Verifica se o menu de navegação está visível
    cy.get('nav').should('be.visible')
  })

  it('Deve verificar se o botão contato existe', () => {
    // Rola a página até o formulário ou clica no link "Contato"
    cy.contains('Contact Us').click()
    cy.contains('Features').click()

    // cy.get('.css-1m1nqz6 > [href="/#features"]').click()
    cy.wait(3000)
  })

  it('Retorna a home ou rola de volta', () => {
    cy.visit('https://www.cnarios.com/')
    cy.wait(2000)
  })
  
    it('Acessa o botão Start Exploring e deposi retorna a home', () => {
    cy.get('button.MuiButton-containedPrimary').click()
    cy.wait(2000)
    cy.get('.py-8 > a > .MuiButtonBase-root').click()
    })
    })