it('Validação de espaçonaves associadas ao personagem Luke SkyWalker', () => {
    cy.request({
        method:"GET",
        url: "starships/12/"
    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.name).to.eq("X-wing")
        expect(response.body.model).to.eq("T-65 X-wing")
        expect(response.body.manufacturer).to.eq("Incom Corporation")
        expect(response.body.cost_in_credits).to.eq("149999")
        expect(response.body.length).to.eq("12.5")
        expect(response.body.max_atmosphering_speed).to.eq("1050")
        expect(response.body.crew).to.eq("1")
        expect(response.body.passengers).to.eq("0")
        expect(response.body.cargo_capacity).to.eq("110")
        expect(response.body.consumables).to.eq("1 week")
        expect(response.body.hyperdrive_rating).to.eq("1.0")
        expect(response.body.MGLT).to.eq("100")
        expect(response.body.starship_class).to.eq("Starfighter")
        expect(response.body.pilots[0]).to.eq("https://swapi.dev/api/people/1/")
        expect(response.body.films[0]).to.eq("https://swapi.dev/api/films/1/")
        expect(response.body.created).to.eq("2014-12-12T11:19:05.340000Z")
        expect(response.body.edited).to.eq("2014-12-20T21:23:49.886000Z")
        expect(response.body.url).to.eq("https://swapi.dev/api/starships/12/")
    
    cy.request({
        method:"GET", 
        url: "starships/22/"})
    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.name).to.eq("Imperial shuttle")
        expect(response.body.model).to.eq("Lambda-class T-4a shuttle")
        expect(response.body.manufacturer).to.eq("Sienar Fleet Systems")
        expect(response.body.cost_in_credits).to.eq("240000")
        expect(response.body.length).to.eq("20")
        expect(response.body.max_atmosphering_speed).to.eq("850")
        expect(response.body.crew).to.eq("6")
        expect(response.body.passengers).to.eq("20")
        expect(response.body.cargo_capacity).to.eq("80000")
        expect(response.body.consumables).to.eq("2 months")
        expect(response.body.hyperdrive_rating).to.eq("1.0")
        expect(response.body.MGLT).to.eq("50")
        expect(response.body.starship_class).to.eq("Armed government transport")
        expect(response.body.pilots[0]).to.eq("https://swapi.dev/api/people/1/")
        expect(response.body.films[0]).to.eq("https://swapi.dev/api/films/2/")
        expect(response.body.created).to.eq("2014-12-15T13:04:47.235000Z")
        expect(response.body.edited).to.eq("2014-12-20T21:23:49.900000Z")
        expect(response.body.url).to.eq("https://swapi.dev/api/starships/22/")
                
    })

});


it('Validação de espaçonaves associadas ao personagem C-3PO', () => {
    cy.request({
        method:"GET",
        url: "people/2/"
    }).then((response)=>{
        expect(response.body.starships).to.deep.eq([])
                
    })

});


it('Validação de espaçonaves associadas ao personagem R2-D2', () => {
    cy.request({
        method:"GET",
        url: "people/3/"
    }).then((response)=>{
        expect(response.body.starships).to.deep.eq([])

    })
    
}); 


it('Validação de espaçonaves associadas ao personagem Darth Vader', () => {
    cy.request({
        method:"GET",
        url: "starships/13/" 
    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.name).to.eq("TIE Advanced x1")
        expect(response.body.model).to.eq("Twin Ion Engine Advanced x1")
        expect(response.body.manufacturer).to.eq("Sienar Fleet Systems")
        expect(response.body.cost_in_credits).to.eq("unknown")
        expect(response.body.length).to.eq("9.2")
        expect(response.body.max_atmosphering_speed).to.eq("1200")
        expect(response.body.crew).to.eq("1")
        expect(response.body.passengers).to.eq("0")
        expect(response.body.cargo_capacity).to.eq("150")
        expect(response.body.consumables).to.eq("5 days")
        expect(response.body.hyperdrive_rating).to.eq("1.0")
        expect(response.body.MGLT).to.eq("105")
        expect(response.body.starship_class).to.eq("Starfighter")
        expect(response.body.pilots[0]).to.eq("https://swapi.dev/api/people/4/")
        expect(response.body.films[0]).to.eq("https://swapi.dev/api/films/1/")
        expect(response.body.created).to.eq("2014-12-12T11:21:32.991000Z")
        expect(response.body.edited).to.eq("2014-12-20T21:23:49.889000Z")
        expect(response.body.url).to.eq("https://swapi.dev/api/starships/13/")
                
    })

});


it('Validação de espaçonaves associadas ao personagem Leia Organa', () => {
    cy.request({
        method:"GET",
        url: "people/5/"
    }).then((response)=>{
    expect(response.body.starships).to.deep.eq([])
                
    })

});


it('Validação de espaçonaves associadas ao personagem Owen Lars', () => {
    cy.request({
        method:"GET",
        url: "people/6/"
    }).then((response)=>{
    expect(response.body.starships).to.deep.eq([])
                
    })

});


it('Validação de espaçonaves associadas ao personagem Beru Whitesun lars', () => {
    cy.request({
        method:"GET",
        url: "people/7/"
    }).then((response)=>{
    expect(response.body.starships).to.deep.eq([])
                
    })

});   


it('Validação de espaçonaves associadas ao personagem R5-D4', () => {
    cy.request({
        method:"GET",
        url: "people/8/"
        }).then((response)=>{
        expect(response.body.starships).to.deep.eq([])
                
    })

});


it('Validação de espaçonaves associadas ao personagem Biggs Darklighter', () => {
    cy.request({
        method:"GET",
        url: "starships/12/"
        }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.name).to.eq("X-wing")
        expect(response.body.model).to.eq("T-65 X-wing")
        expect(response.body.manufacturer).to.eq("Incom Corporation")
        expect(response.body.cost_in_credits).to.eq("149999")
        expect(response.body.length).to.eq("12.5")
        expect(response.body.max_atmosphering_speed).to.eq("1050")
        expect(response.body.crew).to.eq("1")
        expect(response.body.passengers).to.eq("0")
        expect(response.body.cargo_capacity).to.eq("110")
        expect(response.body.consumables).to.eq("1 week")
        expect(response.body.hyperdrive_rating).to.eq("1.0")
        expect(response.body.MGLT).to.eq("100")
        expect(response.body.starship_class).to.eq("Starfighter")
        expect(response.body.pilots[1]).to.eq("https://swapi.dev/api/people/9/")
        expect(response.body.films[0]).to.eq("https://swapi.dev/api/films/1/")
        expect(response.body.created).to.eq("2014-12-12T11:19:05.340000Z")
        expect(response.body.edited).to.eq("2014-12-20T21:23:49.886000Z")
        expect(response.body.url).to.eq("https://swapi.dev/api/starships/12/")
    
    })

});    