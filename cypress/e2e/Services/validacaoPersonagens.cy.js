it('Validação das informações de Luke Skywalker', () => {
    cy.request({
        method:"GET",
        url: "people/1/"
    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.name).to.eq("Luke Skywalker")
        expect(response.body.height).to.eq("172")
        expect(response.body.mass).to.eq("77")
        expect(response.body.hair_color).to.eq("blond")
        expect(response.body.skin_color).to.eq("fair")
        expect(response.body.eye_color).to.eq("blue")
        expect(response.body.birth_year).to.eq("19BBY")
        expect(response.body.gender).to.eq("male")
        expect(response.body.homeworld).to.eq("https://swapi.dev/api/planets/1/")
        expect(response.body.films).to.deep.eq([
                                                    "https://swapi.dev/api/films/1/",
                                                    "https://swapi.dev/api/films/2/",
                                                    "https://swapi.dev/api/films/3/",
                                                    "https://swapi.dev/api/films/6/"
                                                                                     ])                                         
        expect(response.body.species).to.deep.eq([]) 

        expect(response.body.vehicles).to.deep.eq([
                                                    "https://swapi.dev/api/vehicles/14/",
                                                    "https://swapi.dev/api/vehicles/30/"
                                                                                     ])
        
        expect(response.body.starships).to.deep.eq([
                                                    "https://swapi.dev/api/starships/12/",
                                                    "https://swapi.dev/api/starships/22/" 
                                                                                     ])     
                                                                                     
        expect(response.body.created).to.eq("2014-12-09T13:50:51.644000Z") 
        expect(response.body.edited).to.eq("2014-12-20T21:17:56.891000Z") 
        expect(response.body.url).to.eq("https://swapi.dev/api/people/1/")                                                                             


    })
});


it('Validação das informações de C-3PO', () => {
    cy.request({
        method:"GET",
        url: "people/2/"
    }).then((response)=>{
        expect(response.status).to.equal(200)
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


it('Validação das informações de R2-D2', () => {
    cy.request({
        method:"GET",
        url: "people/3/"
    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.name).to.eq("R2-D2")
        expect(response.body.height).to.eq("96")
        expect(response.body.mass).to.eq("32")
        expect(response.body.hair_color).to.eq("n/a")
        expect(response.body.skin_color).to.eq("white, blue")
        expect(response.body.eye_color).to.eq("red")
        expect(response.body.birth_year).to.eq("33BBY")
        expect(response.body.gender).to.eq("n/a")
        expect(response.body.homeworld).to.eq("https://swapi.dev/api/planets/8/")
        expect(response.body.films).to.deep.eq([
                                                    "https://swapi.dev/api/films/1/",
                                                    "https://swapi.dev/api/films/2/",
                                                    "https://swapi.dev/api/films/3/",
                                                    "https://swapi.dev/api/films/4/",
                                                    "https://swapi.dev/api/films/9/",
                                                    "https://swapi.dev/api/films/6/" 
                                                                                    ])
        expect(response.body.species).to.deep.eq([
                                                    "https://swapi.dev/api/species/2/"
                                                                                    ]) 
        expect(response.body.vehicles).to.deep.eq([])     
        expect(response.body.starships).to.deep.eq([]) 
        expect(response.body.created).to.eq("2014-12-10T15:11:50.376000Z") 
        expect(response.body.edited).to.eq("2014-12-20T21:17:50.311000Z") 
        expect(response.body.url).to.eq("https://swapi.dev/api/people/3/")   

    })

});


it('Validação das informações de Darth Vader', () => {

    cy.request({
        method:"GET",
        url: "people/4/"}).then((response)=>{

            expect(response.status).to.equal(200)
            expect(response.body.name).to.eq("Darth Vader")
            expect(response.body.height).to.eq("202")
            expect(response.body.mass).to.eq("136")
            expect(response.body.hair_color).to.eq("none")
            expect(response.body.skin_color).to.eq("white")
            expect(response.body.eye_color).to.eq("yellow")
            expect(response.body.birth_year).to.eq("41.9BBY")
            expect(response.body.gender).to.eq("male")
            expect(response.body.homeworld).to.eq("https://swapi.dev/api/planets/1/")
            expect(response.body.films).to.deep.eq([
                                                    "https://swapi.dev/api/films/1/",
                                                    "https://swapi.dev/api/films/2/",
                                                    "https://swapi.dev/api/films/3/",
                                                    "https://swapi.dev/api/films/6/"
                                                                                    ])
            expect(response.body.species).to.deep.eq([]) 
            expect(response.body.vehicles).to.deep.eq([])     
            expect(response.body.starships).to.deep.eq([
                                                    "https://swapi.dev/api/starships/13/"
                                                                                    ])  
            expect(response.body.created).to.eq("2014-12-10T15:18:20.704000Z") 
            expect(response.body.edited).to.eq("2014-12-20T21:17:50.313000Z") 
            expect(response.body.url).to.eq("https://swapi.dev/api/people/4/")   
                                                                                
        })
}); 


it('Validação das informações de Leia Organa', () => {
    cy.request({
        method:"GET",
        url: "people/5/"
    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.name).to.eq("Leia Organa")
        expect(response.body.height).to.eq("150")
        expect(response.body.mass).to.eq("49")
        expect(response.body.hair_color).to.eq("brown")
        expect(response.body.skin_color).to.eq("light")
        expect(response.body.eye_color).to.eq("brown")
        expect(response.body.birth_year).to.eq("19BBY")
        expect(response.body.gender).to.eq("female")
        expect(response.body.homeworld).to.eq("https://swapi.dev/api/planets/2/")
        expect(response.body.films).to.deep.eq([
                                                    "https://swapi.dev/api/films/1/",
                                                    "https://swapi.dev/api/films/2/",
                                                    "https://swapi.dev/api/films/3/",
                                                    "https://swapi.dev/api/films/6/" 
                                                                                    ])
        expect(response.body.species).to.deep.eq([]) 
        expect(response.body.vehicles).to.deep.eq([
                                                    "https://swapi.dev/api/vehicles/30/"
                                                                                    ])     
        expect(response.body.starships).to.deep.eq([])
        expect(response.body.created).to.eq("2014-12-10T15:20:09:791000Z") 
        expect(response.body.edited).to.eq("2014-12-20T21:17:50.315000Z") 
        expect(response.body.url).to.eq("https://swapi.dev/api/people/5/")
    })

});


it('Validação das informações de Owen Lars', () => {
    cy.request({
        method:"GET",
        url: "people/6/"
    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.name).to.eq("Owen Lars")
        expect(response.body.height).to.eq("178")
        expect(response.body.mass).to.eq("120")
        expect(response.body.hair_color).to.eq("brown, grey")
        expect(response.body.skin_color).to.eq("light")
        expect(response.body.eye_color).to.eq("blue")
        expect(response.body.birth_year).to.eq("52BBY")
        expect(response.body.gender).to.eq("male")
        expect(response.body.homeworld).to.eq("https://swapi.dev/api/planets/1/")
        expect(response.body.films).to.deep.eq([
                                                    "https://swapi.dev/api/films/1/",
                                                    "https://swapi.dev/api/films/5/",
                                                    "https://swapi.dev/api/films/6/",
                                                                                     ])
        expect(response.body.species).to.deep.eq([]) 
        expect(response.body.vehicles).to.deep.eq([])     
        expect(response.body.starships).to.deep.eq([]) 
        expect(response.body.created).to.eq("2014-12-10T15:52:14.024000Z") 
        expect(response.body.edited).to.eq("2014-12-20T21:17:50.317000Z") 
        expect(response.body.url).to.eq("https://swapi.dev/api/people/6/")                                                                            

    })

});


it('Validação das informações de Beru Whitesun lars', () => {
    cy.request({
        method:"GET",
        url: "people/7/"
    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.name).to.eq("Beru Whitesun lars")
        expect(response.body.height).to.eq("165")
        expect(response.body.mass).to.eq("75")
        expect(response.body.hair_color).to.eq("brown")
        expect(response.body.skin_color).to.eq("light")
        expect(response.body.eye_color).to.eq("blue")
        expect(response.body.birth_year).to.eq("47BBY")
        expect(response.body.gender).to.eq("female")
        expect(response.body.homeworld).to.eq("https://swapi.dev/api/planets/1/")
        expect(response.body.films).to.deep.eq([
                                                    "https://swapi.dev/api/films/3/",
                                                    "https://swapi.dev/api/films/5/",
                                                    "https://swapi.dev/api/films/6/" 
                                                                                    ])
        expect(response.body.species).to.deep.eq([]) 
        expect(response.body.vehicles).to.deep.eq([])     
        expect(response.body.starships).to.deep.eq([]) 
        expect(response.body.created).to.eq("2014-12-10T15:53:41.121000Z") 
        expect(response.body.edited).to.eq("2014-12-20T21:17:50.319000Z") 
        expect(response.body.url).to.eq("https://swapi.dev/api/people/7/")                                                                           
    })

});


it('Validação das informações de R5-D4', () => {
    cy.request({
        method:"GET",
        url: "people/8/"
        }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.name).to.eq("R5-D4")
        expect(response.body.height).to.eq("97")
        expect(response.body.mass).to.eq("32")
        expect(response.body.hair_color).to.eq("n/a")
        expect(response.body.skin_color).to.eq("white, red")
        expect(response.body.eye_color).to.eq("red")
        expect(response.body.birth_year).to.eq("unknown")
        expect(response.body.gender).to.eq("n/a")
        expect(response.body.homeworld).to.eq("https://swapi.dev/api/planets/1/")
        expect(response.body.films).to.deep.eq([
                                                    "https://swapi.dev/api/films/5/" 
                                                                                    ])
        expect(response.body.species).to.deep.eq([
                                                    "https://swapi.dev/api/species/2/"
                                                                                    ]) 
        expect(response.body.vehicles).to.deep.eq([])     
        expect(response.body.starships).to.deep.eq([])
        expect(response.body.created).to.eq("2014-12-10T15:57:50:959000Z") 
        expect(response.body.edited).to.eq("2014-12-20T21:17:50.321000Z") 
        expect(response.body.url).to.eq("https://swapi.dev/api/people/8/")  

    })

});


it('Validação das informações de Biggs Darklighter', () => {
    cy.request({
        method:"GET",
        url: "people/9/"
        }).then((response)=>{
        expect(response.status).to.equal(200)
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
        expect(response.body.species).to.deep.eq([]) 
        expect(response.body.vehicles).to.deep.eq([])     
        expect(response.body.starships).to.deep.eq([
                                                    "https://swapi.dev/api/starships/12/"
                                                                                    ])
        expect(response.body.created).to.eq("2014-12-10T15:59:50.509000Z") 
        expect(response.body.edited).to.eq("2014-12-20T21:17:50.323000Z") 
        expect(response.body.url).to.eq("https://swapi.dev/api/people/9/")   

    })

});