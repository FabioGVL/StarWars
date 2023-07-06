it('Validação da Pesquisa por Luke Skywalker', () => {
    cy.request({
        method:"GET",
        url: "people/1/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq("Luke Skywalker")
        expect(response.body.height).to.eq("172")
        expect(response.body.mass).to.eq("77")
        expect(response.body.hair_color).to.eq("blond")
        expect(response.body.eye_color).to.eq("blue")
        expect(response.body.birth_year).to.eq("19BBY")
        expect(response.body.gender).to.eq("male")
        expect(response.body.homeworld).to.eq("https://swapi.dev/api/planets/1/")
        expect(response.body.films).to.deep.equal([
                                                    "https://swapi.dev/api/films/1/",
                                                    "https://swapi.dev/api/films/2/",
                                                    "https://swapi.dev/api/films/3/",
                                                    "https://swapi.dev/api/films/6/"
                                                ])
    })
});


it('Validação da Pesquisa por C-3PO', () => {
    cy.request({
        method:"GET",
        url: "people/2/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq("C-3PO")
        expect(response.body.height).to.eq("167")
        expect(response.body.mass).to.eq("75")
        expect(response.body.hair_color).to.eq("n/a")
        expect(response.body.skin_color).to.eq("gold")
        expect(response.body.eye_color).to.eq("yellow")
        expect(response.body.gender).to.eq("n/a")
        expect(response.body.homeworld).to.eq("https://swapi.dev/api/planets/1/")
        expect(response.body.films).to.deep.equal([
                                                    "https://swapi.dev/api/films/1/",
                                                    "https://swapi.dev/api/films/2/",
                                                    "https://swapi.dev/api/films/3/",
                                                    "https://swapi.dev/api/films/4/",
                                                    "https://swapi.dev/api/films/5/",
                                                    "https://swapi.dev/api/films/6/"
                                                ])
    })
});


it('Validação da Pesquisa por R2-D2', () => {
    cy.request({
        method:"GET",
        url: "people/3/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq("R2-D2")
        expect(response.body.height).to.eq("96")
        expect(response.body.mass).to.eq("32")
        expect(response.body.hair_color).to.eq("n/a")
        expect(response.body.skin_color).to.eq("white, blue")
        expect(response.body.eye_color).to.eq("red")
        expect(response.body.birth_year).to.eq("33BBY")
        expect(response.body.gender).to.eq("n/a")
        expect(response.body.homeworld).to.eq("https://swapi.dev/api/planets/8/")
        expect(response.body.films).to.deep.equal([
                                                    "https://swapi.dev/api/films/1/",
                                                    "https://swapi.dev/api/films/2/",
                                                    "https://swapi.dev/api/films/3/",
                                                    "https://swapi.dev/api/films/4/",
                                                    "https://swapi.dev/api/films/5/",
                                                    "https://swapi.dev/api/films/6/" ])
    })
});


it('Validação da Pesquisa por Darth Vader', () => {

    cy.request({
        method:"GET",
        url: "people/4/"}).then((response)=>{

            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq("Darth Vader")
            expect(response.body.height).to.eq("202")
            expect(response.body.mass).to.eq("136")
            expect(response.body.hair_color).to.eq("none")
            expect(response.body.skin_color).to.eq("white")
            expect(response.body.eye_color).to.eq("yellow")
            expect(response.body.birth_year).to.eq("41.9BBY")
            expect(response.body.gender).to.eq("male")
            expect(response.body.homeworld).to.eq("https://swapi.dev/api/planets/1/")
            expect(response.body.films).to.deep.equal([
                                                    "https://swapi.dev/api/films/1/",
                                                    "https://swapi.dev/api/films/2/",
                                                    "https://swapi.dev/api/films/3/",
                                                    "https://swapi.dev/api/films/6/"])



        })
    
}); 


it('Validação da Pesquisa por Leia Organa', () => {
    cy.request({
        method:"GET",
        url: "people/5/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq("Leia Organa")
        expect(response.body.height).to.eq("150")
        expect(response.body.mass).to.eq("49")
        expect(response.body.hair_color).to.eq("brown")
        expect(response.body.skin_color).to.eq("light")
        expect(response.body.eye_color).to.eq("brown")
        expect(response.body.birth_year).to.eq("19BBY")
        expect(response.body.gender).to.eq("female")
        expect(response.body.homeworld).to.eq("https://swapi.dev/api/planets/2/")
        expect(response.body.films).to.deep.equal([
                                                    "https://swapi.dev/api/films/1/",
                                                    "https://swapi.dev/api/films/2/",
                                                    "https://swapi.dev/api/films/3/",
                                                    "https://swapi.dev/api/films/6/"
                                                ])
    })


});