// в package-json в test прописать: "test": "cypress-ntlm open"
// выполнять: npx cypress-ntlm run


describe('ТЗ - ПЛАТЕЖИ', () => {
      it('Вход в систему..', () => {
          cy.visit({
              method: 'GET',
              url: 'https://finance.dev.fabrique.studio/accounts/login/',
              failOnStatusCode: false,
              auth:
              {
                  username: Cypress.env('user1'),
                  password: Cypress.env('pass1'),
              },
              headers:
              {
                  'Authorization': 'Basic realm="traefik"',
                  'Content-Type': 'text/plain'
              }
          })
          cy.get("input[type='email']").type(Cypress.env('user2'))
          cy.get("input[type='password']").type(Cypress.env('pass2'))
          cy.get('.button__content').click();    
          
     })


// проверка что будут отображены ТОЛЬКО Оплаченные (не доделанна)
// но уже видно что багом в системе ВСЕ показывает и не оплаченные тоже
      it('платежи - фильтр - статус ОПЛАЧЕН', () => {
        cy.contains('Статус').click()
        cy.contains('Оплачен').click()

        cy.get('table').children('tbody').children('tr').children('td').children('div')
          .contains('Оплачен')

  })
})
