it('Validação das informações de Luke Skywalker', () => {
    cy.request({
        method:"GET",
        url: "people/1/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq("Luke Skywalker")
        expect(response.body.height).to.eq("172")
        expect(response.body.mass).to.eq("77")
        expect(response.body.hair_color).to.eq("blond")
        expect(response.body.skin_color).to.eq("fair")
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
        expect(response.body.species).to.deep.equal([]) 

        expect(response.body.vehicles).to.deep.equal([
                                                    "https://swapi.dev/api/vehicles/14/",
                                                    "https://swapi.dev/api/vehicles/30/"
                                                                                     ])
        
        expect(response.body.starships).to.deep.equal([
                                                    "https://swapi.dev/api/starships/12/",
                                                    "https://swapi.dev/api/starships/22/" 
                                                                                     ])     
                                                                                     
        expect(response.body.created).to.eq("2014-12-09T13:50:51.644000Z") 
        expect(response.body.edited).to.eq("2014-12-20T21:17:56.891000Z") 
        expect(response.body.url).to.eq("https://swapi.dev/api/people/1/")                                                                             


    })
});


it('Validação de filmes do personagem Luke SkyWalker', () => {
    cy.request({
        method:"GET",
        url: "films/1/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.title).to.eq("A New Hope")
        expect(response.body.episode_id).to.eq(4)
        expect(response.body.director).to.eq("George Lucas")
        expect(response.body.producer).to.eq("Gary Kurtz, Rick McCallum")
        expect(response.body.release_date).to.eq("1977-05-25")
        expect(response.body.characters[0]).to.eq("https://swapi.dev/api/people/1/")
        expect(response.body.created).to.eq("2014-12-10T14:23:31.880000Z")  
        expect(response.body.edited).to.eq("2014-12-20T19:49:45.256000Z")
        expect(response.body.url).to.eq("https://swapi.dev/api/films/1/") 
         
    cy.request({
         method:"GET", 
         url: "films/2/"})
        
        }).then((response)=>{
        expect(response.status).to.eq(200)    
        expect(response.body.title).to.eq("The Empire Strikes Back")
        expect(response.body.episode_id).to.eq(5)
        expect(response.body.director).to.eq("Irvin Kershner")
        expect(response.body.producer).to.eq("Gary Kurtz, Rick McCallum")
        expect(response.body.release_date).to.eq("1980-05-17")
        expect(response.body.characters[0]).to.eq("https://swapi.dev/api/people/1/")
        expect(response.body.created).to.eq("2014-12-12T11:26:24.656000Z")  
        expect(response.body.edited).to.eq("2014-12-15T13:07:53.386000Z")
        expect(response.body.url).to.eq("https://swapi.dev/api/films/2/") 

    cy.request({
        method:"GET", 
        url: "films/3/"})
           
        }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.title).to.eq("Return of the Jedi")
        expect(response.body.episode_id).to.eq(6)
        expect(response.body.director).to.eq("Richard Marquand")
        expect(response.body.producer).to.eq("Howard G. Kazanjian, George Lucas, Rick McCallum")
        expect(response.body.release_date).to.eq("1983-05-25")
        expect(response.body.characters[0]).to.eq("https://swapi.dev/api/people/1/")
        expect(response.body.created).to.eq("2014-12-18T10:39:33.255000Z")  
        expect(response.body.edited).to.eq("2014-12-20T09:48:37.462000Z")
        expect(response.body.url).to.eq("https://swapi.dev/api/films/3/")

    cy.request({
            method:"GET", 
            url: "films/6/"})
           
        }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.title).to.eq("Revenge of the Sith")
        expect(response.body.episode_id).to.eq(3)
        expect(response.body.director).to.eq("George Lucas")
        expect(response.body.producer).to.eq("Rick McCallum")
        expect(response.body.release_date).to.eq("2005-05-19")
        expect(response.body.characters[0]).to.eq("https://swapi.dev/api/people/1/")
        expect(response.body.created).to.eq("2014-12-20T18:49:38.403000Z")  
        expect(response.body.edited).to.eq("2014-12-20T20:47:52.073000Z")
        expect(response.body.url).to.eq("https://swapi.dev/api/films/6/")
 
    })

});


it('Validação de espécies associadas ao personagem Luke SkyWalker', () => {
    cy.request({
        method:"GET",
        url: "people/1/"
    }).then((response)=>{
    expect(response.body.species).to.deep.equal([])
                
    })

});


it('Validação de veículos associados ao personagem Luke SkyWalker', () => {
    cy.request({
        method:"GET",
        url: "vehicles/14/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
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
        expect(response.status).to.eq(200)
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
  

it('Validação de espaçonaves associadas ao personagem Luke SkyWalker', () => {
    cy.request({
        method:"GET",
        url: "starships/12/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
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
        expect(response.status).to.eq(200)
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


it('Validação das informações de C-3PO', () => {
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
        expect(response.body.birth_year).to.eq("112BBY")
        expect(response.body.gender).to.eq("n/a")
        expect(response.body.homeworld).to.eq("https://swapi.dev/api/planets/1/")
        expect(response.body.films).to.deep.eq([
                                                "https://swapi.dev/api/films/1/",
                                                "https://swapi.dev/api/films/2/",
                                                "https://swapi.dev/api/films/3/",
                                                "https://swapi.dev/api/films/4/",
                                                "https://swapi.dev/api/films/5/",
                                                "https://swapi.dev/api/films/6/" 
                                                                                     ])
        expect(response.body.species).to.deep.eq([
                                                    "https://swapi.dev/api/species/2/"
                                                                                     ]) 
        expect(response.body.vehicles).to.deep.eq([])     
        expect(response.body.starships).to.deep.eq([])  
        expect(response.body.created).to.eq("2014-12-10T15:10:51.357000Z") 
        expect(response.body.edited).to.eq("2014-12-20T21:17:50.309000Z") 
        expect(response.body.url).to.eq("https://swapi.dev/api/people/2/")  

    })

});


it('Validação de filmes do personagem C-3PO', () => {
    cy.request({
        method:"GET",
        url: "films/1/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.title).to.eq("A New Hope")
        expect(response.body.episode_id).to.eq(4)
        expect(response.body.director).to.eq("George Lucas")
        expect(response.body.producer).to.eq("Gary Kurtz, Rick McCallum")
        expect(response.body.release_date).to.eq("1977-05-25")
        expect(response.body.characters[1]).to.eq("https://swapi.dev/api/people/2/")
        expect(response.body.created).to.eq("2014-12-10T14:23:31.880000Z")  
        expect(response.body.edited).to.eq("2014-12-20T19:49:45.256000Z")
        expect(response.body.url).to.eq("https://swapi.dev/api/films/1/") 

    cy.request({
         method:"GET", 
         url: "films/2/"})
        
        }).then((response)=>{
        expect(response.status).to.eq(200)    
        expect(response.body.title).to.eq("The Empire Strikes Back")
        expect(response.body.episode_id).to.eq(5)
        expect(response.body.director).to.eq("Irvin Kershner")
        expect(response.body.producer).to.eq("Gary Kurtz, Rick McCallum")
        expect(response.body.release_date).to.eq("1980-05-17")
        expect(response.body.characters[1]).to.eq("https://swapi.dev/api/people/2/")
        expect(response.body.created).to.eq("2014-12-12T11:26:24.656000Z")  
        expect(response.body.edited).to.eq("2014-12-15T13:07:53.386000Z")
        expect(response.body.url).to.eq("https://swapi.dev/api/films/2/") 

    cy.request({
            method:"GET", 
            url: "films/3/"})
           
           }).then((response)=>{
           expect(response.status).to.eq(200)
           expect(response.body.title).to.eq("Return of the Jedi")
           expect(response.body.episode_id).to.eq(6)
           expect(response.body.director).to.eq("Richard Marquand")
           expect(response.body.producer).to.eq("Howard G. Kazanjian, George Lucas, Rick McCallum")
           expect(response.body.release_date).to.eq("1983-05-25")
           expect(response.body.characters[1]).to.eq("https://swapi.dev/api/people/2/")
           expect(response.body.created).to.eq("2014-12-18T10:39:33.255000Z")  
           expect(response.body.edited).to.eq("2014-12-20T09:48:37.462000Z")
           expect(response.body.url).to.eq("https://swapi.dev/api/films/3/")

    cy.request({
            method:"GET", 
            url: "films/4/"})
           
           }).then((response)=>{
           expect(response.status).to.eq(200)
           expect(response.body.title).to.eq("The Phantom Menace")
           expect(response.body.episode_id).to.eq(1)
           expect(response.body.director).to.eq("George Lucas")
           expect(response.body.producer).to.eq("Rick McCallum")
           expect(response.body.release_date).to.eq("1999-05-19")
           expect(response.body.characters[0]).to.eq("https://swapi.dev/api/people/2/")
           expect(response.body.created).to.eq("2014-12-19T16:52:55.740000Z")  
           expect(response.body.edited).to.eq("2014-12-20T10:54:07.216000Z")
           expect(response.body.url).to.eq("https://swapi.dev/api/films/4/") 

    cy.request({
            method:"GET", 
            url: "films/5/"})
           
           }).then((response)=>{
           expect(response.status).to.eq(200)
           expect(response.body.title).to.eq("Attack of the Clones")
           expect(response.body.episode_id).to.eq(2)
           expect(response.body.director).to.eq("George Lucas")
           expect(response.body.producer).to.eq("Rick McCallum")
           expect(response.body.release_date).to.eq("2002-05-16")
           expect(response.body.characters[0]).to.eq("https://swapi.dev/api/people/2/")
           expect(response.body.created).to.eq("2014-12-20T10:57:57.886000Z")  
           expect(response.body.edited).to.eq("2014-12-20T20:18:48.516000Z")
           expect(response.body.url).to.eq("https://swapi.dev/api/films/5/") 

    cy.request({
            method:"GET", 
            url: "films/6/"})
           
           }).then((response)=>{
           expect(response.status).to.eq(200)
           expect(response.body.title).to.eq("Revenge of the Sith")
           expect(response.body.episode_id).to.eq(3)
           expect(response.body.director).to.eq("George Lucas")
           expect(response.body.producer).to.eq("Rick McCallum")
           expect(response.body.release_date).to.eq("2005-05-19")
           expect(response.body.characters[1]).to.eq("https://swapi.dev/api/people/2/")
           expect(response.body.created).to.eq("2014-12-20T18:49:38.403000Z")  
           expect(response.body.edited).to.eq("2014-12-20T20:47:52.073000Z")
           expect(response.body.url).to.eq("https://swapi.dev/api/films/6/")
  
    })

});


it('Validação de espécies associadas ao personagem C-3PO', () => {
    cy.request({
        method:"GET",
        url: "species/2/"
    }).then((response)=>{
    expect(response.status).to.eq(200)    
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


it('Validação de veículos associados ao personagem C-3PO', () => {
    cy.request({
        method:"GET",
        url: "people/2/"
    }).then((response)=>{
        expect(response.body.vehicles).to.deep.eq([])

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


it('Validação das informações de R2-D2', () => {
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
                                                    "https://swapi.dev/api/films/9/",
                                                    "https://swapi.dev/api/films/6/" 
                                                                                    ])
        expect(response.body.species).to.deep.equal([
                                                    "https://swapi.dev/api/species/2/"
                                                                                    ]) 
        expect(response.body.vehicles).to.deep.equal([])     
        expect(response.body.starships).to.deep.equal([]) 
        expect(response.body.created).to.eq("2014-12-10T15:11:50.376000Z") 
        expect(response.body.edited).to.eq("2014-12-20T21:17:50.311000Z") 
        expect(response.body.url).to.eq("https://swapi.dev/api/people/3/")   

    })

});


it('Validação de filmes do personagem R2-D2', () => {
    cy.request({
        method:"GET",
        url: "films/1/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.title).to.eq("A New Hope")
        expect(response.body.episode_id).to.eq(4)
        expect(response.body.director).to.eq("George Lucas")
        expect(response.body.producer).to.eq("Gary Kurtz, Rick McCallum")
        expect(response.body.release_date).to.eq("1977-05-25")
        expect(response.body.characters[2]).to.eq("https://swapi.dev/api/people/3/")
        expect(response.body.created).to.eq("2014-12-10T14:23:31.880000Z")  
        expect(response.body.edited).to.eq("2014-12-20T19:49:45.256000Z")
        expect(response.body.url).to.eq("https://swapi.dev/api/films/1/")

    cy.request({
         method:"GET", 
         url: "films/2/"})
        
        }).then((response)=>{
        expect(response.status).to.eq(200)    
        expect(response.body.title).to.eq("The Empire Strikes Back")
        expect(response.body.episode_id).to.eq(5)
        expect(response.body.director).to.eq("Irvin Kershner")
        expect(response.body.producer).to.eq("Gary Kurtz, Rick McCallum")
        expect(response.body.release_date).to.eq("1980-05-17")
        expect(response.body.characters[2]).to.eq("https://swapi.dev/api/people/3/")
        expect(response.body.created).to.eq("2014-12-12T11:26:24.656000Z")  
        expect(response.body.edited).to.eq("2014-12-15T13:07:53.386000Z")
        expect(response.body.url).to.eq("https://swapi.dev/api/films/2/")

    cy.request({
            method:"GET", 
            url: "films/3/"})
           
           }).then((response)=>{
           expect(response.status).to.eq(200)
           expect(response.body.title).to.eq("Return of the Jedi")
           expect(response.body.episode_id).to.eq(6)
           expect(response.body.director).to.eq("Richard Marquand")
           expect(response.body.producer).to.eq("Howard G. Kazanjian, George Lucas, Rick McCallum")
           expect(response.body.release_date).to.eq("1983-05-25")
           expect(response.body.characters[2]).to.eq("https://swapi.dev/api/people/3/")
           expect(response.body.created).to.eq("2014-12-18T10:39:33.255000Z")  
           expect(response.body.edited).to.eq("2014-12-20T09:48:37.462000Z")
           expect(response.body.url).to.eq("https://swapi.dev/api/films/3/")

    cy.request({
            method:"GET", 
            url: "films/4/"})
           
           }).then((response)=>{
           expect(response.status).to.eq(200)
           expect(response.body.title).to.eq("The Phantom Menace")
           expect(response.body.episode_id).to.eq(1)
           expect(response.body.director).to.eq("George Lucas")
           expect(response.body.producer).to.eq("Rick McCallum")
           expect(response.body.release_date).to.eq("1999-05-19")
           expect(response.body.characters[1]).to.eq("https://swapi.dev/api/people/3/")
           expect(response.body.created).to.eq("2014-12-19T16:52:55.740000Z")  
           expect(response.body.edited).to.eq("2014-12-20T10:54:07.216000Z")
           expect(response.body.url).to.eq("https://swapi.dev/api/films/4/") 

    cy.request({
            method:"GET", 
            url: "films/5/"})
           
           }).then((response)=>{
           expect(response.status).to.eq(200)
           expect(response.body.title).to.eq("Attack of the Clones")
           expect(response.body.episode_id).to.eq(2)
           expect(response.body.director).to.eq("George Lucas")
           expect(response.body.producer).to.eq("Rick McCallum")
           expect(response.body.release_date).to.eq("2002-05-16")
           expect(response.body.characters[1]).to.eq("https://swapi.dev/api/people/3/")
           expect(response.body.created).to.eq("2014-12-20T10:57:57.886000Z")  
           expect(response.body.edited).to.eq("2014-12-20T20:18:48.516000Z")
           expect(response.body.url).to.eq("https://swapi.dev/api/films/5/") 

    cy.request({
            method:"GET", 
            url: "films/6/"})
           
           }).then((response)=>{
           expect(response.status).to.eq(200)
           expect(response.body.title).to.eq("Revenge of the Sith")
           expect(response.body.episode_id).to.eq(3)
           expect(response.body.director).to.eq("George Lucas")
           expect(response.body.producer).to.eq("Rick McCallum")
           expect(response.body.release_date).to.eq("2005-05-19")
           expect(response.body.characters[2]).to.eq("https://swapi.dev/api/people/3/")
           expect(response.body.created).to.eq("2014-12-20T18:49:38.403000Z")  
           expect(response.body.edited).to.eq("2014-12-20T20:47:52.073000Z")
           expect(response.body.url).to.eq("https://swapi.dev/api/films/6/")

    })

});


it('Validação de espécies associadas ao personagem R2-D2 ', () => {
    cy.request({
        method:"GET",
        url: "species/2/"
    }).then((response)=>{
    expect(response.status).to.eq(200)    
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


it('Validação de veículos associados ao personagem R2-D2', () => {
    cy.request({
        method:"GET",
        url: "people/3/"
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


it('Validação das informações de Darth Vader', () => {

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
                                                    "https://swapi.dev/api/films/6/"
                                                                                    ])
            expect(response.body.species).to.deep.equal([]) 
            expect(response.body.vehicles).to.deep.equal([])     
            expect(response.body.starships).to.deep.equal([
                                                    "https://swapi.dev/api/starships/13/"
                                                                                    ])  
            expect(response.body.created).to.eq("2014-12-10T15:18:20.704000Z") 
            expect(response.body.edited).to.eq("2014-12-20T21:17:50.313000Z") 
            expect(response.body.url).to.eq("https://swapi.dev/api/people/4/")   
                                                                                
        })
}); 


it('Validação de filmes do personagem Darth Vader', () => {
    cy.request({
        method:"GET",
        url: "films/1/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.title).to.eq("A New Hope")
        expect(response.body.episode_id).to.eq(4)
        expect(response.body.director).to.eq("George Lucas")
        expect(response.body.producer).to.eq("Gary Kurtz, Rick McCallum")
        expect(response.body.release_date).to.eq("1977-05-25")
        expect(response.body.characters[3]).to.eq("https://swapi.dev/api/people/4/")
        expect(response.body.created).to.eq("2014-12-10T14:23:31.880000Z")  
        expect(response.body.edited).to.eq("2014-12-20T19:49:45.256000Z")
        expect(response.body.url).to.eq("https://swapi.dev/api/films/1/")

    cy.request({
         method:"GET", 
         url: "films/2/"})
        
        }).then((response)=>{
        expect(response.status).to.eq(200)    
        expect(response.body.title).to.eq("The Empire Strikes Back")
        expect(response.body.episode_id).to.eq(5)
        expect(response.body.director).to.eq("Irvin Kershner")
        expect(response.body.producer).to.eq("Gary Kurtz, Rick McCallum")
        expect(response.body.release_date).to.eq("1980-05-17")
        expect(response.body.characters[3]).to.eq("https://swapi.dev/api/people/4/")
        expect(response.body.created).to.eq("2014-12-12T11:26:24.656000Z")  
        expect(response.body.edited).to.eq("2014-12-15T13:07:53.386000Z")
        expect(response.body.url).to.eq("https://swapi.dev/api/films/2/")

    cy.request({
            method:"GET", 
            url: "films/3/"})
           
           }).then((response)=>{
           expect(response.status).to.eq(200)
           expect(response.body.title).to.eq("Return of the Jedi")
           expect(response.body.episode_id).to.eq(6)
           expect(response.body.director).to.eq("Richard Marquand")
           expect(response.body.producer).to.eq("Howard G. Kazanjian, George Lucas, Rick McCallum")
           expect(response.body.release_date).to.eq("1983-05-25")
           expect(response.body.characters[3]).to.eq("https://swapi.dev/api/people/4/")
           expect(response.body.created).to.eq("2014-12-18T10:39:33.255000Z")  
           expect(response.body.edited).to.eq("2014-12-20T09:48:37.462000Z")
           expect(response.body.url).to.eq("https://swapi.dev/api/films/3/")


    cy.request({
            method:"GET", 
            url: "films/6/"})
           
           }).then((response)=>{
           expect(response.status).to.eq(200)
           expect(response.body.title).to.eq("Revenge of the Sith")
           expect(response.body.episode_id).to.eq(3)
           expect(response.body.director).to.eq("George Lucas")
           expect(response.body.producer).to.eq("Rick McCallum")
           expect(response.body.release_date).to.eq("2005-05-19")
           expect(response.body.characters[3]).to.eq("https://swapi.dev/api/people/4/")
           expect(response.body.created).to.eq("2014-12-20T18:49:38.403000Z")  
           expect(response.body.edited).to.eq("2014-12-20T20:47:52.073000Z")
           expect(response.body.url).to.eq("https://swapi.dev/api/films/6/")
        
    })

});


it('Validação de espécies associadas ao personagem Darth Vader', () => {
    cy.request({
        method:"GET",
        url: "people/4/"
    }).then((response)=>{
    expect(response.body.species).to.deep.equal([])
                
    })

});


it('Validação de veículos associados ao personagem Darth Vader', () => {
    cy.request({
        method:"GET",
        url: "people/4/"
    }).then((response)=>{
    expect(response.body.vehicles).to.deep.equal([])
                
    })

});        
  

it('Validação de espaçonaves associadas ao personagem Darth Vader', () => {
    cy.request({
        method:"GET",
        url: "starships/13/" 
    }).then((response)=>{
        expect(response.status).to.eq(200)
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


it('Validação das informações de Leia Organa', () => {
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
        expect(response.body.species).to.deep.equal([]) 
        expect(response.body.vehicles).to.deep.equal([
                                                    "https://swapi.dev/api/vehicles/30/"
                                                                                    ])     
        expect(response.body.starships).to.deep.equal([])
        expect(response.body.created).to.eq("2014-12-10T15:20:09:791000Z") 
        expect(response.body.edited).to.eq("2014-12-20T21:17:50.315000Z") 
        expect(response.body.url).to.eq("https://swapi.dev/api/people/5/")
    })

});


it('Validação de filmes da personagem Leia Organa ', () => {
    cy.request({
            method:"GET",
            url: "films/1/"
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq("A New Hope")
            expect(response.body.episode_id).to.eq(4)
            expect(response.body.director).to.eq("George Lucas")
            expect(response.body.producer).to.eq("Gary Kurtz, Rick McCallum")
            expect(response.body.release_date).to.eq("1977-05-25")
            expect(response.body.characters[4]).to.eq("https://swapi.dev/api/people/5/")
            expect(response.body.created).to.eq("2014-12-10T14:23:31.880000Z")  
            expect(response.body.edited).to.eq("2014-12-20T19:49:45.256000Z")
            expect(response.body.url).to.eq("https://swapi.dev/api/films/1/")
    
        cy.request({
             method:"GET", 
             url: "films/2/"})
            
            }).then((response)=>{
            expect(response.status).to.eq(200)    
            expect(response.body.title).to.eq("The Empire Strikes Back")
            expect(response.body.episode_id).to.eq(5)
            expect(response.body.director).to.eq("Irvin Kershner")
            expect(response.body.producer).to.eq("Gary Kurtz, Rick McCallum")
            expect(response.body.release_date).to.eq("1980-05-17")
            expect(response.body.characters[4]).to.eq("https://swapi.dev/api/people/5/")
            expect(response.body.created).to.eq("2014-12-12T11:26:24.656000Z")  
            expect(response.body.edited).to.eq("2014-12-15T13:07:53.386000Z")
            expect(response.body.url).to.eq("https://swapi.dev/api/films/2/")
    
        cy.request({
                method:"GET", 
                url: "films/3/"})
               
               }).then((response)=>{
               expect(response.status).to.eq(200)
               expect(response.body.title).to.eq("Return of the Jedi")
               expect(response.body.episode_id).to.eq(6)
               expect(response.body.director).to.eq("Richard Marquand")
               expect(response.body.producer).to.eq("Howard G. Kazanjian, George Lucas, Rick McCallum")
               expect(response.body.release_date).to.eq("1983-05-25")
               expect(response.body.characters[4]).to.eq("https://swapi.dev/api/people/5/")
               expect(response.body.created).to.eq("2014-12-18T10:39:33.255000Z")  
               expect(response.body.edited).to.eq("2014-12-20T09:48:37.462000Z")
               expect(response.body.url).to.eq("https://swapi.dev/api/films/3/")
    
    
        cy.request({
                method:"GET", 
                url: "films/6/"})
               
               }).then((response)=>{
               expect(response.status).to.eq(200)
               expect(response.body.title).to.eq("Revenge of the Sith")
               expect(response.body.episode_id).to.eq(3)
               expect(response.body.director).to.eq("George Lucas")
               expect(response.body.producer).to.eq("Rick McCallum")
               expect(response.body.release_date).to.eq("2005-05-19")
               expect(response.body.characters[4]).to.eq("https://swapi.dev/api/people/5/")
               expect(response.body.created).to.eq("2014-12-20T18:49:38.403000Z")  
               expect(response.body.edited).to.eq("2014-12-20T20:47:52.073000Z")
               expect(response.body.url).to.eq("https://swapi.dev/api/films/6/")
    
     })

});


it('Validação de espécies associadas ao personagem Leia Organa', () => {
    cy.request({
        method:"GET",
        url: "people/5/"
    }).then((response)=>{
    expect(response.body.species).to.deep.equal([])
                
    })

});


it('Validação de veículos associados ao personagem Leia Organa', () => {
    
    cy.request({
        method:"GET", 
        url: "vehicles/30/"
           
    }).then((response)=>{
        expect(response.status).to.eq(200)
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
  

it('Validação de espaçonaves associadas ao personagem Leia Organa', () => {
    cy.request({
        method:"GET",
        url: "people/5/"
    }).then((response)=>{
    expect(response.body.starships).to.deep.equal([])
                
    })

});


it('Validação das informações de Owen Lars', () => {
    cy.request({
        method:"GET",
        url: "people/6/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq("Owen Lars")
        expect(response.body.height).to.eq("178")
        expect(response.body.mass).to.eq("120")
        expect(response.body.hair_color).to.eq("brown, grey")
        expect(response.body.skin_color).to.eq("light")
        expect(response.body.eye_color).to.eq("blue")
        expect(response.body.birth_year).to.eq("52BBY")
        expect(response.body.gender).to.eq("male")
        expect(response.body.homeworld).to.eq("https://swapi.dev/api/planets/1/")
        expect(response.body.films).to.deep.equal([
                                                    "https://swapi.dev/api/films/1/",
                                                    "https://swapi.dev/api/films/5/",
                                                    "https://swapi.dev/api/films/6/",
                                                                                     ])
        expect(response.body.species).to.deep.equal([]) 
        expect(response.body.vehicles).to.deep.equal([])     
        expect(response.body.starships).to.deep.equal([]) 
        expect(response.body.created).to.eq("2014-12-10T15:52:14.024000Z") 
        expect(response.body.edited).to.eq("2014-12-20T21:17:50.317000Z") 
        expect(response.body.url).to.eq("https://swapi.dev/api/people/6/")                                                                            

    })

});


it('Validação de filmes da personagem Owen Lars', () => {
    cy.request({
            method:"GET",
            url: "films/1/"
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq("A New Hope")
            expect(response.body.episode_id).to.eq(4)
            expect(response.body.director).to.eq("George Lucas")
            expect(response.body.producer).to.eq("Gary Kurtz, Rick McCallum")
            expect(response.body.release_date).to.eq("1977-05-25")
            expect(response.body.characters[5]).to.eq("https://swapi.dev/api/people/6/")
            expect(response.body.created).to.eq("2014-12-10T14:23:31.880000Z")  
            expect(response.body.edited).to.eq("2014-12-20T19:49:45.256000Z")
            expect(response.body.url).to.eq("https://swapi.dev/api/films/1/")
            
    

    cy.request({
            method:"GET", 
            url: "films/5/"})
               
            }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq("Attack of the Clones")
            expect(response.body.episode_id).to.eq(2)
            expect(response.body.director).to.eq("George Lucas")
            expect(response.body.producer).to.eq("Rick McCallum")
            expect(response.body.release_date).to.eq("2002-05-16")
            expect(response.body.characters[2]).to.eq("https://swapi.dev/api/people/6/")
            expect(response.body.created).to.eq("2014-12-20T10:57:57.886000Z")  
            expect(response.body.edited).to.eq("2014-12-20T20:18:48.516000Z")
            expect(response.body.url).to.eq("https://swapi.dev/api/films/5/") 
        
    
    cy.request({
            method:"GET", 
            url: "films/6/"})
               
            }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq("Revenge of the Sith")
            expect(response.body.episode_id).to.eq(3)
            expect(response.body.director).to.eq("George Lucas")
            expect(response.body.producer).to.eq("Rick McCallum")
            expect(response.body.release_date).to.eq("2005-05-19")
            expect(response.body.characters[5]).to.eq("https://swapi.dev/api/people/6/")
            expect(response.body.created).to.eq("2014-12-20T18:49:38.403000Z")  
            expect(response.body.edited).to.eq("2014-12-20T20:47:52.073000Z")
            expect(response.body.url).to.eq("https://swapi.dev/api/films/6/")
    
    })

});


it('Validação de espécies associadas ao personagem Owen Lars', () => {
    cy.request({
        method:"GET",
        url: "people/6/"
    }).then((response)=>{
    expect(response.body.species).to.deep.equal([])
                
    })

});


it('Validação de veículos associados ao personagem Owen Lars', () => {
    cy.request({
        method:"GET",
        url: "people/6/"
    }).then((response)=>{
    expect(response.body.vehicles).to.deep.equal([])
                
    })

});        
  

it('Validação de espaçonaves associadas ao personagem Owen Lars', () => {
    cy.request({
        method:"GET",
        url: "people/6/"
    }).then((response)=>{
    expect(response.body.starships).to.deep.equal([])
                
    })

});


it('Validação das informações de Beru Whitesun lars', () => {
    cy.request({
        method:"GET",
        url: "people/7/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq("Beru Whitesun lars")
        expect(response.body.height).to.eq("165")
        expect(response.body.mass).to.eq("75")
        expect(response.body.hair_color).to.eq("brown")
        expect(response.body.skin_color).to.eq("light")
        expect(response.body.eye_color).to.eq("blue")
        expect(response.body.birth_year).to.eq("47BBY")
        expect(response.body.gender).to.eq("female")
        expect(response.body.homeworld).to.eq("https://swapi.dev/api/planets/1/")
        expect(response.body.films).to.deep.equal([
                                                    "https://swapi.dev/api/films/3/",
                                                    "https://swapi.dev/api/films/5/",
                                                    "https://swapi.dev/api/films/6/" 
                                                                                    ])
        expect(response.body.species).to.deep.equal([]) 
        expect(response.body.vehicles).to.deep.equal([])     
        expect(response.body.starships).to.deep.equal([]) 
        expect(response.body.created).to.eq("2014-12-10T15:53:41.121000Z") 
        expect(response.body.edited).to.eq("2014-12-20T21:17:50.319000Z") 
        expect(response.body.url).to.eq("https://swapi.dev/api/people/7/")                                                                           
    })

});


it('Validação de filmes da personagem Beru Whitesun lars', () => {
    cy.request({
            method:"GET",
            url: "films/1/"
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq("A New Hope")
            expect(response.body.episode_id).to.eq(4)
            expect(response.body.director).to.eq("George Lucas")
            expect(response.body.producer).to.eq("Gary Kurtz, Rick McCallum")
            expect(response.body.release_date).to.eq("1977-05-25")
            expect(response.body.characters[6]).to.eq("https://swapi.dev/api/people/7/")
            expect(response.body.created).to.eq("2014-12-10T14:23:31.880000Z")  
            expect(response.body.edited).to.eq("2014-12-20T19:49:45.256000Z")
            expect(response.body.url).to.eq("https://swapi.dev/api/films/1/")
    

    cy.request({
            method:"GET", 
            url: "films/5/"})
               
            }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq("Attack of the Clones")
            expect(response.body.episode_id).to.eq(2)
            expect(response.body.director).to.eq("George Lucas")
            expect(response.body.producer).to.eq("Rick McCallum")
            expect(response.body.release_date).to.eq("2002-05-16")
            expect(response.body.characters[3]).to.eq("https://swapi.dev/api/people/7/")
            expect(response.body.created).to.eq("2014-12-20T10:57:57.886000Z")  
            expect(response.body.edited).to.eq("2014-12-20T20:18:48.516000Z")
            expect(response.body.url).to.eq("https://swapi.dev/api/films/5/") 
        
    
    cy.request({
            method:"GET", 
            url: "films/6/"})
               
            }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq("Revenge of the Sith")
            expect(response.body.episode_id).to.eq(3)
            expect(response.body.director).to.eq("George Lucas")
            expect(response.body.producer).to.eq("Rick McCallum")
            expect(response.body.release_date).to.eq("2005-05-19")
            expect(response.body.characters[6]).to.eq("https://swapi.dev/api/people/7/")
            expect(response.body.created).to.eq("2014-12-20T18:49:38.403000Z")  
            expect(response.body.edited).to.eq("2014-12-20T20:47:52.073000Z")
            expect(response.body.url).to.eq("https://swapi.dev/api/films/6/")
    
            
    })

});


it('Validação de espécies associadas ao personagem Beru Whitesun lars', () => {
    cy.request({
        method:"GET",
        url: "people/7/"
    }).then((response)=>{
    expect(response.body.species).to.deep.equal([])
                
    })

});


it('Validação de veículos associados ao personagem Beru Whitesun lars', () => {
    cy.request({
        method:"GET",
        url: "people/7/"
    }).then((response)=>{
    expect(response.body.vehicles).to.deep.equal([])
                
    })

});        
  

it('Validação de espaçonaves associadas ao personagem Beru Whitesun lars', () => {
    cy.request({
        method:"GET",
        url: "people/7/"
    }).then((response)=>{
    expect(response.body.starships).to.deep.equal([])
                
    })

});        
  

it('Validação das informações de R5-D4', () => {
    cy.request({
        method:"GET",
        url: "people/8/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq("R5-D4")
        expect(response.body.height).to.eq("97")
        expect(response.body.mass).to.eq("32")
        expect(response.body.hair_color).to.eq("n/a")
        expect(response.body.skin_color).to.eq("white, red")
        expect(response.body.eye_color).to.eq("red")
        expect(response.body.birth_year).to.eq("unknown")
        expect(response.body.gender).to.eq("n/a")
        expect(response.body.homeworld).to.eq("https://swapi.dev/api/planets/1/")
        expect(response.body.films).to.deep.equal([
                                                    "https://swapi.dev/api/films/5/" 
                                                                                    ])
        expect(response.body.species).to.deep.equal([
                                                    "https://swapi.dev/api/species/2/"
                                                                                    ]) 
        expect(response.body.vehicles).to.deep.equal([])     
        expect(response.body.starships).to.deep.equal([])
        expect(response.body.created).to.eq("2014-12-10T15:57:50:959000Z") 
        expect(response.body.edited).to.eq("2014-12-20T21:17:50.321000Z") 
        expect(response.body.url).to.eq("https://swapi.dev/api/people/8/")  

    })

});


it('Validação de filmes do personagem R5-D4', () => {
    cy.request({
            method:"GET",
            url: "films/1/"
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq("A New Hope")
            expect(response.body.episode_id).to.eq(4)
            expect(response.body.director).to.eq("George Lucas")
            expect(response.body.producer).to.eq("Gary Kurtz, Rick McCallum")
            expect(response.body.release_date).to.eq("1977-05-25")
            expect(response.body.characters[7]).to.eq("https://swapi.dev/api/people/8/")
            expect(response.body.created).to.eq("2014-12-10T14:23:31.880000Z")  
            expect(response.body.edited).to.eq("2014-12-20T19:49:45.256000Z")
            expect(response.body.url).to.eq("https://swapi.dev/api/films/1/")

    })

});


it('Validação de espécies associadas ao personagem R5-D4', () => {
    cy.request({
        method:"GET",
        url: "species/2/"
    }).then((response)=>{
    expect(response.status).to.eq(200)    
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


it('Validação de veículos associados ao personagem R5-D4', () => {
    cy.request({
        method:"GET",
        url: "people/8/"
    }).then((response)=>{
    expect(response.body.vehicles).to.deep.equal([])
                
    })

});
  

it('Validação de espaçonaves associadas ao personagem R5-D4', () => {
    cy.request({
        method:"GET",
        url: "people/8/"
    }).then((response)=>{
    expect(response.body.starships).to.deep.equal([])
                
    })

});


it('Validação das informações de Biggs Darklighter', () => {
    cy.request({
        method:"GET",
        url: "people/9/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq("Biggs Darklighter")
        expect(response.body.height).to.eq("183")
        expect(response.body.mass).to.eq("84")
        expect(response.body.hair_color).to.eq("black")
        expect(response.body.skin_color).to.eq("light")
        expect(response.body.eye_color).to.eq("brown")
        expect(response.body.birth_year).to.eq("24BBY")
        expect(response.body.gender).to.eq("male")
        expect(response.body.homeworld).to.eq("https://swapi.dev/api/planets/1/")
        expect(response.body.films).to.deep.equal([
                                                    "https://swapi.dev/api/films/1/" 
                                                                                    ])
        expect(response.body.species).to.deep.equal([]) 
        expect(response.body.vehicles).to.deep.equal([])     
        expect(response.body.starships).to.deep.equal([
                                                    "https://swapi.dev/api/starships/12/"
                                                                                    ])
        expect(response.body.created).to.eq("2014-12-10T15:59:50.509000Z") 
        expect(response.body.edited).to.eq("2014-12-20T21:17:50.323000Z") 
        expect(response.body.url).to.eq("https://swapi.dev/api/people/9/")   

    })

});


it('Validação de filmes do personagem Biggs Darklighter', () => {
    cy.request({
            method:"GET",
            url: "films/1/"
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq("A New Hope")
            expect(response.body.episode_id).to.eq(4)
            expect(response.body.director).to.eq("George Lucas")
            expect(response.body.producer).to.eq("Gary Kurtz, Rick McCallum")
            expect(response.body.release_date).to.eq("1977-05-25")
            expect(response.body.characters[8]).to.eq("https://swapi.dev/api/people/9/")
            expect(response.body.created).to.eq("2014-12-10T14:23:31.880000Z")  
            expect(response.body.edited).to.eq("2014-12-20T19:49:45.256000Z")
            expect(response.body.url).to.eq("https://swapi.dev/api/films/1/")

    })

});


it('Validação de espécies associadas ao personagem Biggs Darklighter', () => {
    cy.request({
        method:"GET",
        url: "people/9/"
    }).then((response)=>{
    expect(response.body.species).to.deep.equal([])
                
    })

});


it('Validação de veículos associados ao personagem Biggs Darklighter', () => {
    cy.request({
        method:"GET",
        url: "people/9/"
    }).then((response)=>{
    expect(response.body.vehicles).to.deep.equal([])
                
    })

});       
  

it('Validação de espaçonaves associadas ao personagem Biggs Darklighter', () => {
    cy.request({
        method:"GET",
        url: "starships/12/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
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


it('Validação de limite de entrada - ID inexistente 0', () => {
    cy.request({
        failOnStatusCode: false,
        method:"GET",
        url: "people/0/"
    }).then((response)=>{
        expect(response.status).to.eq(404)
        expect(response.body.detail).to.eq("Not found")

    })

});


it('Validação de limite de entrada - ID inexistente 500', () => {
    cy.request({
        failOnStatusCode: false,
        method:"GET",
        url: "people/500/"
    }).then((response)=>{
        expect(response.status).to.eq(404)
        expect(response.body.detail).to.eq("Not found")

    })

});


it('Validação de limite de entrada - Página 0', () => {
    cy.request({
        failOnStatusCode: false,
        method:"GET",
        url: "/people/?page=0"
    }).then((response)=>{
        expect(response.status).to.eq(404)
        expect(response.body.detail).to.eq("Not found")

    })

});


it('Validação de limite de entrada - Página 10', () => {
    cy.request({
        failOnStatusCode: false,
        method:"GET",
        url: "/people/?page=10"
    }).then((response)=>{
        expect(response.status).to.eq(404)
        expect(response.body.detail).to.eq("Not found")

    })

});


it('Validação de paginação e checagem de personagens por página - 1', () => {
    cy.request({
        method:"GET",
        url: "/people/?page=1"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.count).to.eq(82)
        expect(response.body.next).to.eq("https://swapi.dev/api/people/?page=2")
        expect(response.body.previous).to.eq(null)
        expect(response.body.results[0].name).to.eq("Luke Skywalker")
        expect(response.body.results[0].url).to.eq("https://swapi.dev/api/people/1/")
        expect(response.body.results[1].name).to.eq("C-3PO")
        expect(response.body.results[1].url).to.eq("https://swapi.dev/api/people/2/")
        expect(response.body.results[2].name).to.eq("R2-D2")
        expect(response.body.results[2].url).to.eq("https://swapi.dev/api/people/3/")
        expect(response.body.results[3].name).to.eq("Darth Vader")
        expect(response.body.results[3].url).to.eq("https://swapi.dev/api/people/4/")
        expect(response.body.results[4].name).to.eq("Leia Organa")
        expect(response.body.results[4].url).to.eq("https://swapi.dev/api/people/5/")
        expect(response.body.results[5].name).to.eq("Owen Lars")
        expect(response.body.results[5].url).to.eq("https://swapi.dev/api/people/6/")
        expect(response.body.results[6].name).to.eq("Beru Whitesun lars")
        expect(response.body.results[6].url).to.eq("https://swapi.dev/api/people/7/")
        expect(response.body.results[7].name).to.eq("R5-D4")
        expect(response.body.results[7].url).to.eq("https://swapi.dev/api/people/8/")
        expect(response.body.results[8].name).to.eq("Biggs Darklighter")
        expect(response.body.results[8].url).to.eq("https://swapi.dev/api/people/9/")
        expect(response.body.results[9].name).to.eq("Obi-Wan Kenobi")
        expect(response.body.results[9].url).to.eq("https://swapi.dev/api/people/10/")
        
    })

});


it('Validação de paginação e listagem de personagens por página - 2', () => {
    cy.request({
        method:"GET",
        url: "/people/?page=2"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.count).to.eq(82)
        expect(response.body.next).to.eq("https://swapi.dev/api/people/?page=3")
        expect(response.body.previous).to.eq("https://swapi.dev/api/people/?page=1")
        expect(response.body.results[0].name).to.eq("Anakin Skywalker")
        expect(response.body.results[0].url).to.eq("https://swapi.dev/api/people/11/")
        expect(response.body.results[1].name).to.eq("Wilhuff Tarkin")
        expect(response.body.results[1].url).to.eq("https://swapi.dev/api/people/12/")
        expect(response.body.results[2].name).to.eq("Chewbacca")
        expect(response.body.results[2].url).to.eq("https://swapi.dev/api/people/13/")
        expect(response.body.results[3].name).to.eq("Han Solo")
        expect(response.body.results[3].url).to.eq("https://swapi.dev/api/people/14/")
        expect(response.body.results[4].name).to.eq("Greedo")
        expect(response.body.results[4].url).to.eq("https://swapi.dev/api/people/15/")
        expect(response.body.results[5].name).to.eq("Jabba Desilijic Tiure")
        expect(response.body.results[5].url).to.eq("https://swapi.dev/api/people/16/")
        expect(response.body.results[6].name).to.eq()
        expect(response.body.results[6].url).to.eq()
        expect(response.body.results[7].name).to.eq("Wedge Antilles")
        expect(response.body.results[7].url).to.eq("https://swapi.dev/api/people/18/")
        expect(response.body.results[8].name).to.eq("Jek Tono Porkins")
        expect(response.body.results[8].url).to.eq("https://swapi.dev/api/people/19/")
        expect(response.body.results[9].name).to.eq("Yoda")
        expect(response.body.results[9].url).to.eq("https://swapi.dev/api/people/20/")
        expect(response.body.results[10].name).to.eq("Palpatine")
        expect(response.body.results[10].url).to.eq("https://swapi.dev/api/people/21/")
        
        
    })

});


it('Validação de paginação e listagem de personagens por página - 3', () => {
    cy.request({
        method:"GET",
        url: "/people/?page=3"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.count).to.eq(82)
        expect(response.body.next).to.eq("https://swapi.dev/api/people/?page=4")
        expect(response.body.previous).to.eq("https://swapi.dev/api/people/?page=2")
        expect(response.body.results[0].name).to.eq("Boba Fett")
        expect(response.body.results[0].url).to.eq("https://swapi.dev/api/people/22/")
        expect(response.body.results[1].name).to.eq("IG-88")
        expect(response.body.results[1].url).to.eq("https://swapi.dev/api/people/23/")
        expect(response.body.results[2].name).to.eq("Bossk")
        expect(response.body.results[2].url).to.eq("https://swapi.dev/api/people/24/")
        expect(response.body.results[3].name).to.eq("Lando Calrissian")
        expect(response.body.results[3].url).to.eq("https://swapi.dev/api/people/25/")
        expect(response.body.results[4].name).to.eq("Lobot")
        expect(response.body.results[4].url).to.eq("https://swapi.dev/api/people/26/")
        expect(response.body.results[5].name).to.eq("Ackbar")
        expect(response.body.results[5].url).to.eq("https://swapi.dev/api/people/27/")
        expect(response.body.results[6].name).to.eq("Mon Mothma")
        expect(response.body.results[6].url).to.eq("https://swapi.dev/api/people/28/")
        expect(response.body.results[7].name).to.eq("Arvel Crynyd")
        expect(response.body.results[7].url).to.eq("https://swapi.dev/api/people/29/")
        expect(response.body.results[8].name).to.eq("Wicket Systri Warrick")
        expect(response.body.results[8].url).to.eq("https://swapi.dev/api/people/30/")
        expect(response.body.results[9].name).to.eq("Nien Nunb")
        expect(response.body.results[9].url).to.eq("https://swapi.dev/api/people/31/")
        
    })

});


it('Validação de paginação e listagem de personagens por página - 4', () => {
    cy.request({
        method:"GET",
        url: "/people/?page=4"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.count).to.eq(82)
        expect(response.body.next).to.eq("https://swapi.dev/api/people/?page=5")
        expect(response.body.previous).to.eq("https://swapi.dev/api/people/?page=3")
        expect(response.body.results[0].name).to.eq("Qui-Gon Jinn")
        expect(response.body.results[0].url).to.eq("https://swapi.dev/api/people/32/")
        expect(response.body.results[1].name).to.eq("Nute Gunray")
        expect(response.body.results[1].url).to.eq("https://swapi.dev/api/people/33/")
        expect(response.body.results[2].name).to.eq("Finis Valorum")
        expect(response.body.results[2].url).to.eq("https://swapi.dev/api/people/34/")
        expect(response.body.results[3].name).to.eq("Padmé Amidala")
        expect(response.body.results[3].url).to.eq("https://swapi.dev/api/people/35/")
        expect(response.body.results[4].name).to.eq("Jar Jar Binks")
        expect(response.body.results[4].url).to.eq("https://swapi.dev/api/people/36/")
        expect(response.body.results[5].name).to.eq("Roos Tarpals")
        expect(response.body.results[5].url).to.eq("https://swapi.dev/api/people/37/")
        expect(response.body.results[6].name).to.eq("Rugor Nass")
        expect(response.body.results[6].url).to.eq("https://swapi.dev/api/people/38/")
        expect(response.body.results[7].name).to.eq("Ric Olié")
        expect(response.body.results[7].url).to.eq("https://swapi.dev/api/people/39/")
        expect(response.body.results[8].name).to.eq("Watto")
        expect(response.body.results[8].url).to.eq("https://swapi.dev/api/people/40/")
        expect(response.body.results[9].name).to.eq("Sebulba")
        expect(response.body.results[9].url).to.eq("https://swapi.dev/api/people/41/")
            
    })

});


it('Validação de paginação e listagem de personagens por página - 5', () => {
    cy.request({
        method:"GET",
        url: "/people/?page=5"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.count).to.eq(82)
        expect(response.body.next).to.eq("https://swapi.dev/api/people/?page=6")
        expect(response.body.previous).to.eq("https://swapi.dev/api/people/?page=4")
        expect(response.body.results[0].name).to.eq("Quarsh Panaka")
        expect(response.body.results[0].url).to.eq("https://swapi.dev/api/people/42/")
        expect(response.body.results[1].name).to.eq("Shmi Skywalker")
        expect(response.body.results[1].url).to.eq("https://swapi.dev/api/people/43/")
        expect(response.body.results[2].name).to.eq("Darth Maul")
        expect(response.body.results[2].url).to.eq("https://swapi.dev/api/people/44/")
        expect(response.body.results[3].name).to.eq("Bib Fortuna")
        expect(response.body.results[3].url).to.eq("https://swapi.dev/api/people/45/")
        expect(response.body.results[4].name).to.eq("Ayla Secura")
        expect(response.body.results[4].url).to.eq("https://swapi.dev/api/people/46/")
        expect(response.body.results[5].name).to.eq("Ratts Tyerel")
        expect(response.body.results[5].url).to.eq("https://swapi.dev/api/people/47/")
        expect(response.body.results[6].name).to.eq("Dud Bolt")
        expect(response.body.results[6].url).to.eq("https://swapi.dev/api/people/48/")
        expect(response.body.results[7].name).to.eq("Gasgano")
        expect(response.body.results[7].url).to.eq("https://swapi.dev/api/people/49/")
        expect(response.body.results[8].name).to.eq("Ben Quadinaros")
        expect(response.body.results[8].url).to.eq("https://swapi.dev/api/people/50/")
        expect(response.body.results[9].name).to.eq("Mace Windu")
        expect(response.body.results[9].url).to.eq("https://swapi.dev/api/people/51/")
        
    })

});


it('Validação de paginação e listagem de personagens por página - 6', () => {
    cy.request({
        method:"GET",
        url: "/people/?page=6"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.count).to.eq(82)
        expect(response.body.next).to.eq("https://swapi.dev/api/people/?page=7")
        expect(response.body.previous).to.eq("https://swapi.dev/api/people/?page=5")
        expect(response.body.results[0].name).to.eq("Ki-Adi-Mundi")
        expect(response.body.results[0].url).to.eq("https://swapi.dev/api/people/52/")
        expect(response.body.results[1].name).to.eq("Kit Fisto")
        expect(response.body.results[1].url).to.eq("https://swapi.dev/api/people/53/")
        expect(response.body.results[2].name).to.eq("Eeth Koth")
        expect(response.body.results[2].url).to.eq("https://swapi.dev/api/people/54/")
        expect(response.body.results[3].name).to.eq("Adi Gallia")
        expect(response.body.results[3].url).to.eq("https://swapi.dev/api/people/55/")
        expect(response.body.results[4].name).to.eq("Saesee Tiin")
        expect(response.body.results[4].url).to.eq("https://swapi.dev/api/people/56/")
        expect(response.body.results[5].name).to.eq("Yarael Poof")
        expect(response.body.results[5].url).to.eq("https://swapi.dev/api/people/57/")
        expect(response.body.results[6].name).to.eq("Plo Koon")
        expect(response.body.results[6].url).to.eq("https://swapi.dev/api/people/58/")
        expect(response.body.results[7].name).to.eq("Mas Amedda")
        expect(response.body.results[7].url).to.eq("https://swapi.dev/api/people/59/")
        expect(response.body.results[8].name).to.eq("Gregar Typho")
        expect(response.body.results[8].url).to.eq("https://swapi.dev/api/people/60/")
        expect(response.body.results[9].name).to.eq("Cordé")
        expect(response.body.results[9].url).to.eq("https://swapi.dev/api/people/61/")
        
    })

});


it('Validação de paginação e listagem de personagens por página - 7', () => {
    cy.request({
        method:"GET",
        url: "/people/?page=7"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.count).to.eq(82)
        expect(response.body.next).to.eq("https://swapi.dev/api/people/?page=8")
        expect(response.body.previous).to.eq("https://swapi.dev/api/people/?page=6")
        expect(response.body.results[0].name).to.eq("Cliegg Lars")
        expect(response.body.results[0].url).to.eq("https://swapi.dev/api/people/62/")
        expect(response.body.results[1].name).to.eq("Poggle the Lesser")
        expect(response.body.results[1].url).to.eq("https://swapi.dev/api/people/63/")
        expect(response.body.results[2].name).to.eq("Luminara Unduli")
        expect(response.body.results[2].url).to.eq("https://swapi.dev/api/people/64/")
        expect(response.body.results[3].name).to.eq("Barriss Offee")
        expect(response.body.results[3].url).to.eq("https://swapi.dev/api/people/65/")
        expect(response.body.results[4].name).to.eq("Dormé")
        expect(response.body.results[4].url).to.eq("https://swapi.dev/api/people/66/")
        expect(response.body.results[5].name).to.eq("Dooku")
        expect(response.body.results[5].url).to.eq("https://swapi.dev/api/people/67/")
        expect(response.body.results[6].name).to.eq("Bail Prestor Organa")
        expect(response.body.results[6].url).to.eq("https://swapi.dev/api/people/68/")
        expect(response.body.results[7].name).to.eq("Jango Fett")
        expect(response.body.results[7].url).to.eq("https://swapi.dev/api/people/69/")
        expect(response.body.results[8].name).to.eq("Zam Wesell")
        expect(response.body.results[8].url).to.eq("https://swapi.dev/api/people/70/")
        expect(response.body.results[9].name).to.eq("Dexter Jettster")
        expect(response.body.results[9].url).to.eq("https://swapi.dev/api/people/71/")
        
    })

});


it('Validação de paginação e listagem de personagens por página - 8', () => {
    cy.request({
        method:"GET",
        url: "/people/?page=8"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.count).to.eq(82)
        expect(response.body.next).to.eq("https://swapi.dev/api/people/?page=9")
        expect(response.body.previous).to.eq("https://swapi.dev/api/people/?page=7")
        expect(response.body.results[0].name).to.eq("Lama Su")
        expect(response.body.results[0].url).to.eq("https://swapi.dev/api/people/72/")
        expect(response.body.results[1].name).to.eq("Taun We")
        expect(response.body.results[1].url).to.eq("https://swapi.dev/api/people/73/")
        expect(response.body.results[2].name).to.eq("Jocasta Nu")
        expect(response.body.results[2].url).to.eq("https://swapi.dev/api/people/74/")
        expect(response.body.results[3].name).to.eq("R4-P17")
        expect(response.body.results[3].url).to.eq("https://swapi.dev/api/people/75/")
        expect(response.body.results[4].name).to.eq("Wat Tambor")
        expect(response.body.results[4].url).to.eq("https://swapi.dev/api/people/76/")
        expect(response.body.results[5].name).to.eq("San Hill")
        expect(response.body.results[5].url).to.eq("https://swapi.dev/api/people/77/")
        expect(response.body.results[6].name).to.eq("Shaak Ti")
        expect(response.body.results[6].url).to.eq("https://swapi.dev/api/people/78/")
        expect(response.body.results[7].name).to.eq("Grievous")
        expect(response.body.results[7].url).to.eq("https://swapi.dev/api/people/79/")
        expect(response.body.results[8].name).to.eq("Tarfful")
        expect(response.body.results[8].url).to.eq("https://swapi.dev/api/people/80/")
        expect(response.body.results[9].name).to.eq("Raymus Antilles")
        expect(response.body.results[9].url).to.eq("https://swapi.dev/api/people/81/")
        
    })

});



it('Validação de paginação e listagem de personagens por página - 9', () => {
    cy.request({
        method:"GET",
        url: "/people/?page=9"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.count).to.eq(82)
        expect(response.body.next).to.eq(null)
        expect(response.body.previous).to.eq("https://swapi.dev/api/people/?page=8")
        expect(response.body.results[0].name).to.eq("Sly Moore")
        expect(response.body.results[0].url).to.eq("https://swapi.dev/api/people/82/")
        expect(response.body.results[1].name).to.eq("Tion Medon")
        expect(response.body.results[1].url).to.eq("https://swapi.dev/api/people/83/")
    
    })

});