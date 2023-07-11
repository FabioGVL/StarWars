it('Validação de limite de entrada - ID inexistente 0', () => {
    cy.request({
        failOnStatusCode: false,
        method:"GET",
        url: "people/0/"
        }).then((response)=>{
        expect(response.status).to.equal(404)
        expect(response.body.detail).to.eq("Not found")

    })

});


it('Validação de limite de entrada - ID inexistente 500', () => {
    cy.request({
        failOnStatusCode: false,
        method:"GET",
        url: "people/500/"
        }).then((response)=>{
        expect(response.status).to.equal(404)
        expect(response.body.detail).to.eq("Not found")

    })

});