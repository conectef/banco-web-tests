describe('Transferencia', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })

    it('Deve transferir quando informo dados e valor validos', () => {
        // Act
        cy.realizarTransferencia('Fernanda Santos', 'Danilo Lima', '11')

        // Assert
        cy.verificarMansagemNoToast('Transferência realizada!')
    })

     it('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token', () => {
        // Act
        cy.realizarTransferencia('Fernanda Santos', 'Danilo Lima', '6000')

        // Assert
        cy.verificarMansagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})