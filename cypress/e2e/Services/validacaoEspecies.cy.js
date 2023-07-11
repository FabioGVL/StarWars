it('Validação de espécies associadas ao personagem Luke SkyWalker', () => {
    cy.request({
        method:"GET",
        url: "people/1/"
    }).then((response)=>{
    expect(response.body.species).to.deep.eq([])
                
    })

});


it('Validação de espécies associadas ao personagem C-3PO', () => {
    cy.request({
        method:"GET",
        url: "species/2/"
    }).then((response)=>{
    expect(response.status).to.equal(200)    
    expect(response.body.name).to.eq("Droid")
    expect(response.body.classification).to.eq("artificial")
    expect(response.body.designation).to.eq("sentient")
    expect(response.body.average_height).to.eq("n/a")
    expect(response.body.skin_colors).to.eq("n/a")
    expect(response.body.hair_colors).to.eq("n/a")
    expect(response.body.eye_colors).to.eq("n/a")
    expect(response.body.average_lifespan).to.eq("indefinite")
    expect(response.body.homeworld).to.eq(null)
    expect(response.body.language).to.eq("n/a")
    expect(response.body.people[0]).to.eq("https://swapi.dev/api/people/2/")
    expect(response.body.films).to.deep.eq([
                                            "https://swapi.dev/api/films/1/",
                                            "https://swapi.dev/api/films/2/",
                                            "https://swapi.dev/api/films/3/",
                                            "https://swapi.dev/api/films/4/",
                                            "https://swapi.dev/api/films/5/",
                                            "https://swapi.dev/api/films/6/"])
    expect(response.body.created).to.eq("2014-12-10T15:16:16.259000Z")
    expect(response.body.edited).to.eq("2014-12-20T21:36:42.139000Z")
    expect(response.body.url).to.eq("https://swapi.dev/api/species/2/")
                
    })

});


it('Validação de espécies associadas ao personagem R2-D2 ', () => {
    cy.request({
        method:"GET",
        url: "species/2/"
    }).then((response)=>{
    expect(response.status).to.equal(200)    
    expect(response.body.name).to.eq("Droid")
    expect(response.body.classification).to.eq("artificial")
    expect(response.body.designation).to.eq("sentient")
    expect(response.body.average_height).to.eq("n/a")
    expect(response.body.skin_colors).to.eq("n/a")
    expect(response.body.hair_colors).to.eq("n/a")
    expect(response.body.eye_colors).to.eq("n/a")
    expect(response.body.average_lifespan).to.eq("indefinite")
    expect(response.body.homeworld).to.eq(null)
    expect(response.body.language).to.eq("n/a")
    expect(response.body.people[1]).to.eq("https://swapi.dev/api/people/3/")
    expect(response.body.films).to.deep.eq([
                                            "https://swapi.dev/api/films/1/",
                                            "https://swapi.dev/api/films/2/",
                                            "https://swapi.dev/api/films/3/",
                                            "https://swapi.dev/api/films/4/",
                                            "https://swapi.dev/api/films/5/",
                                            "https://swapi.dev/api/films/6/"])
    expect(response.body.created).to.eq("2014-12-10T15:16:16.259000Z")
    expect(response.body.edited).to.eq("2014-12-20T21:36:42.139000Z")
    expect(response.body.url).to.eq("https://swapi.dev/api/species/2/")
                
    })

});


it('Validação de espécies associadas ao personagem Darth Vader', () => {
    cy.request({
        method:"GET",
        url: "people/4/"
    }).then((response)=>{
    expect(response.body.species).to.deep.eq([])
                
    })

});


it('Validação de espécies associadas ao personagem Leia Organa', () => {
    cy.request({
        method:"GET",
        url: "people/5/"
    }).then((response)=>{
    expect(response.body.species).to.deep.eq([])
                
    })

});


it('Validação de espécies associadas ao personagem Owen Lars', () => {
    cy.request({
        method:"GET",
        url: "people/6/"
    }).then((response)=>{
    expect(response.body.species).to.deep.eq([])
                
    })

});


it('Validação de espécies associadas ao personagem Beru Whitesun lars', () => {
    cy.request({
        method:"GET",
        url: "people/7/"
    }).then((response)=>{
    expect(response.body.species).to.deep.eq([])
                
    })

});


it('Validação de espécies associadas ao personagem R5-D4', () => {
    cy.request({
        method:"GET",
        url: "species/2/"
    }).then((response)=>{
    expect(response.status).to.equal(200)    
    expect(response.body.name).to.eq("Droid")
    expect(response.body.classification).to.eq("artificial")
    expect(response.body.designation).to.eq("sentient")
    expect(response.body.average_height).to.eq("n/a")
    expect(response.body.skin_colors).to.eq("n/a")
    expect(response.body.hair_colors).to.eq("n/a")
    expect(response.body.eye_colors).to.eq("n/a")
    expect(response.body.average_lifespan).to.eq("indefinite")
    expect(response.body.homeworld).to.eq(null)
    expect(response.body.language).to.eq("n/a")
    expect(response.body.people[2]).to.eq("https://swapi.dev/api/people/8/")
    expect(response.body.films).to.deep.eq([
                                            "https://swapi.dev/api/films/1/",
                                            "https://swapi.dev/api/films/2/",
                                            "https://swapi.dev/api/films/3/",
                                            "https://swapi.dev/api/films/4/",
                                            "https://swapi.dev/api/films/5/",
                                            "https://swapi.dev/api/films/6/"])
    expect(response.body.created).to.eq("2014-12-10T15:16:16.259000Z")
    expect(response.body.edited).to.eq("2014-12-20T21:36:42.139000Z")
    expect(response.body.url).to.eq("https://swapi.dev/api/species/2/")
                
    })

});


it('Validação de espécies associadas ao personagem Biggs Darklighter', () => {
    cy.request({
        method:"GET",
        url: "people/9/"
        }).then((response)=>{
        expect(response.body.species).to.deep.eq([])
                
    })

});