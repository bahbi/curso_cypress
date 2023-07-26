describe('Página de login', () => {

    beforeEach(() => {
        cy.visit ('https://3076-cypress-alurapic-front.vercel.app/')
    })
    it('Preencher os campos de login corretamente para realizar login', () => {
        cy.login('carowl', "12345678")
    })

})



//describe('Página de login', () => {

   // beforeEach(() => {
        //cy.visit ('https://3076-cypress-alurapic-front.vercel.app/')
    //})

      //  it('Preencher os campos do login', () => {
       // cy.login('carowl','12345678')

    //})
  //})