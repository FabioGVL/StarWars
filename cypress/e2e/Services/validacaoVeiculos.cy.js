it('Validação de veículos associados ao personagem Luke SkyWalker', () => {
    cy.request({
        method:"GET",
        url: "vehicles/14/"
    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.name).to.eq("Snowspeeder")
        expect(response.body.model).to.eq("t-47 airspeeder")
        expect(response.body.manufacturer).to.eq("Incom corporation")
        expect(response.body.cost_in_credits).to.eq("unknown")
        expect(response.body.length).to.eq("4.5")
        expect(response.body.max_atmosphering_speed).to.eq("650")
        expect(response.body.crew).to.eq("2")
        expect(response.body.passengers).to.eq("0")
        expect(response.body.cargo_capacity).to.eq("10")
        expect(response.body.consumables).to.eq("none")
        expect(response.body.vehicle_class).to.eq("airspeeder")
        expect(response.body.pilots[0]).to.eq("https://swapi.dev/api/people/1/")
        expect(response.body.films[0]).to.eq("https://swapi.dev/api/films/2/")
        expect(response.body.created).to.eq("2014-12-15T12:22:12Z")
        expect(response.body.edited).to.eq("2014-12-20T21:30:21.672000Z")
        expect(response.body.url).to.eq("https://swapi.dev/api/vehicles/14/")

    cy.request({
        method:"GET", 
        url: "vehicles/30/"})
           
    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.name).to.eq("Imperial Speeder Bike")
        expect(response.body.model).to.eq("74-Z speeder bike")
        expect(response.body.manufacturer).to.eq("Aratech Repulsor Company")
        expect(response.body.cost_in_credits).to.eq("8000")
        expect(response.body.length).to.eq("3")
        expect(response.body.max_atmosphering_speed).to.eq("360")
        expect(response.body.crew).to.eq("1")
        expect(response.body.passengers).to.eq("1")
        expect(response.body.cargo_capacity).to.eq("4")
        expect(response.body.consumables).to.eq("1 day")
        expect(response.body.vehicle_class).to.eq("speeder")
        expect(response.body.pilots[0]).to.eq("https://swapi.dev/api/people/1/")
        expect(response.body.films[0]).to.eq("https://swapi.dev/api/films/3/")
        expect(response.body.created).to.eq("2014-12-18T11:20:04.625000Z")
        expect(response.body.edited).to.eq("2014-12-20T21:30:21.693000Z")
        expect(response.body.url).to.eq("https://swapi.dev/api/vehicles/30/")

    })
    
});


it('Validação de veículos associados ao personagem C-3PO', () => {
    cy.request({
        method:"GET",
        url: "people/2/"
    }).then((response)=>{
        expect(response.body.vehicles).to.deep.eq([])

    })
    
});    


it('Validação de veículos associados ao personagem R2-D2', () => {
    cy.request({
        method:"GET",
        url: "people/3/"
    }).then((response)=>{
        expect(response.body.starships).to.deep.eq([])

    })
    
}); 


it('Validação de veículos associados ao personagem Darth Vader', () => {
    cy.request({
        method:"GET",
        url: "people/4/"
    }).then((response)=>{
    expect(response.body.vehicles).to.deep.eq([])
                
    })

});   


it('Validação de veículos associados ao personagem Leia Organa', () => {
    
    cy.request({
        method:"GET", 
        url: "vehicles/30/"
           
    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.name).to.eq("Imperial Speeder Bike")
        expect(response.body.model).to.eq("74-Z speeder bike")
        expect(response.body.manufacturer).to.eq("Aratech Repulsor Company")
        expect(response.body.cost_in_credits).to.eq("8000")
        expect(response.body.length).to.eq("3")
        expect(response.body.max_atmosphering_speed).to.eq("360")
        expect(response.body.crew).to.eq("1")
        expect(response.body.passengers).to.eq("1")
        expect(response.body.cargo_capacity).to.eq("4")
        expect(response.body.consumables).to.eq("1 day")
        expect(response.body.vehicle_class).to.eq("speeder")
        expect(response.body.pilots[1]).to.eq("https://swapi.dev/api/people/5/")
        expect(response.body.films[0]).to.eq("https://swapi.dev/api/films/3/")
        expect(response.body.created).to.eq("2014-12-18T11:20:04.625000Z")
        expect(response.body.edited).to.eq("2014-12-20T21:30:21.693000Z")
        expect(response.body.url).to.eq("https://swapi.dev/api/vehicles/30/")

    })
    
});     


it('Validação de veículos associados ao personagem Owen Lars', () => {
    cy.request({
        method:"GET",
        url: "people/6/"
    }).then((response)=>{
    expect(response.body.vehicles).to.deep.eq([])
                
    })

});


it('Validação de veículos associados ao personagem Beru Whitesun lars', () => {
    cy.request({
        method:"GET",
        url: "people/7/"
    }).then((response)=>{
    expect(response.body.vehicles).to.deep.eq([])
                
    })

});   


it('Validação de veículos associados ao personagem R5-D4', () => {
    cy.request({
        method:"GET",
        url: "people/8/"
        }).then((response)=>{
        expect(response.body.vehicles).to.deep.eq([])
                
    })

});


it('Validação de veículos associados ao personagem Biggs Darklighter', () => {
    cy.request({
        method:"GET",
        url: "people/9/"
        }).then((response)=>{
        expect(response.body.vehicles).to.deep.eq([])
                
    })

});  