it('Validação de paginação e checagem de personagens por página - 1', () => {
    cy.request({
        method:"GET",
        url: "/people/?page=1"
        }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.count).to.equal(82)
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
        expect(response.status).to.equal(200)
        expect(response.body.count).to.equal(82)
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
        expect(response.status).to.equal(200)
        expect(response.body.count).to.equal(82)
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
        expect(response.status).to.equal(200)
        expect(response.body.count).to.equal(82)
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
        expect(response.status).to.equal(200)
        expect(response.body.count).to.equal(82)
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
        expect(response.status).to.equal(200)
        expect(response.body.count).to.equal(82)
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
        expect(response.status).to.equal(200)
        expect(response.body.count).to.equal(82)
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
        expect(response.status).to.equal(200)
        expect(response.body.count).to.equal(82)
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
        expect(response.status).to.equal(200)
        expect(response.body.count).to.equal(82)
        expect(response.body.next).to.eq(null)
        expect(response.body.previous).to.eq("https://swapi.dev/api/people/?page=8")
        expect(response.body.results[0].name).to.eq("Sly Moore")
        expect(response.body.results[0].url).to.eq("https://swapi.dev/api/people/82/")
        expect(response.body.results[1].name).to.eq("Tion Medon")
        expect(response.body.results[1].url).to.eq("https://swapi.dev/api/people/83/")
    
    })

});