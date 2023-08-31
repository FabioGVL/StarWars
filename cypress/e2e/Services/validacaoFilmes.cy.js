it('Validação de filmes do personagem Luke SkyWalker', () => {
    cy.request({
        method:"GET",
        url: "films/1/"
    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.title).to.eq("A New Hope")
        expect(response.body.episode_id).to.equal(4)
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
        expect(response.status).to.equal(200)    
        expect(response.body.title).to.eq("The Empire Strikes Back")
        expect(response.body.episode_id).to.equal(5)
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
        expect(response.status).to.equal(200)
        expect(response.body.title).to.eq("Return of the Jedi")
        expect(response.body.episode_id).to.equal(6)
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
        expect(response.status).to.equal(200)
        expect(response.body.title).to.eq("Revenge of the Sith")
        expect(response.body.episode_id).to.equal(3)
        expect(response.body.director).to.eq("George Lucas")
        expect(response.body.producer).to.eq("Rick McCallum")
        expect(response.body.release_date).to.eq("2005-05-19")
        expect(response.body.characters[0]).to.eq("https://swapi.dev/api/people/1/")
        expect(response.body.created).to.eq("2014-12-20T18:49:38.403000Z")  
        expect(response.body.edited).to.eq("2014-12-20T20:47:52.073000Z")
        expect(response.body.url).to.eq("https://swapi.dev/api/films/6/")
 
    })

});


it('Validação de filmes do personagem C-3PO', () => {
    cy.request({
        method:"GET",
        url: "films/1/"
    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.title).to.eq("A New Hope")
        expect(response.body.episode_id).to.equal(4)
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
        expect(response.status).to.equal(200)    
        expect(response.body.title).to.eq("The Empire Strikes Back")
        expect(response.body.episode_id).to.equal(5)
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
           expect(response.status).to.equal(200)
           expect(response.body.title).to.eq("Return of the Jedi")
           expect(response.body.episode_id).to.equal(6)
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
           expect(response.status).to.equal(200)
           expect(response.body.title).to.eq("The Phantom Menace")
           expect(response.body.episode_id).to.equal(1)
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
           expect(response.status).to.equal(200)
           expect(response.body.title).to.eq("Attack of the Clones")
           expect(response.body.episode_id).to.equal(2)
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
           expect(response.status).to.equal(200)
           expect(response.body.title).to.eq("Revenge of the Sith")
           expect(response.body.episode_id).to.equal(3)
           expect(response.body.director).to.eq("George Lucas")
           expect(response.body.producer).to.eq("Rick McCallum")
           expect(response.body.release_date).to.eq("2005-05-19")
           expect(response.body.characters[1]).to.eq("https://swapi.dev/api/people/2/")
           expect(response.body.created).to.eq("2014-12-20T18:49:38.403000Z")  
           expect(response.body.edited).to.eq("2014-12-20T20:47:52.073000Z")
           expect(response.body.url).to.eq("https://swapi.dev/api/films/6/")
  
    })

});


it('Validação de filmes do personagem R2-D2', () => {
    cy.request({
        method:"GET",
        url: "films/1/"
    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.title).to.eq("A New Hope")
        expect(response.body.episode_id).to.equal(4)
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
        expect(response.status).to.equal(200)    
        expect(response.body.title).to.eq("The Empire Strikes Back")
        expect(response.body.episode_id).to.equal(5)
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
           expect(response.status).to.equal(200)
           expect(response.body.title).to.eq("Return of the Jedi")
           expect(response.body.episode_id).to.equal(6)
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
           expect(response.status).to.equal(200)
           expect(response.body.title).to.eq("The Phantom Menace")
           expect(response.body.episode_id).to.equal(1)
           expect(response.body.director).to.eq("George Lucas")
           expect(response.body.producer).to.eq("Rick McCallum")
           expect(response.body.release_date).to.eq("1999-05-19")
           expect(response.body.characters[1]).to.eq("https://swapi.dev/api/people/3/")
           expect(response.body.created).to.eq("2014-12-19T16:52:55.740000Z")  
           expect(response.body.edited).to.eq("2014-12-20T10:54:07.216000Z")
           expect(response.body.url).to.eq("https://swapi.dev/api/films/4/") 

    cy.request({
            method:"GET", 
            url: "films/9/"})
           
           }).then((response)=>{
           expect(response.status).to.equal(404)
           expect(response.body.detail).to.eq("Not found") 

    cy.request({
            method:"GET", 
            url: "films/6/"})
           
           }).then((response)=>{
           expect(response.status).to.equal(200)
           expect(response.body.title).to.eq("Revenge of the Sith")
           expect(response.body.episode_id).to.equal(3)
           expect(response.body.director).to.eq("George Lucas")
           expect(response.body.producer).to.eq("Rick McCallum")
           expect(response.body.release_date).to.eq("2005-05-19")
           expect(response.body.characters[2]).to.eq("https://swapi.dev/api/people/3/")
           expect(response.body.created).to.eq("2014-12-20T18:49:38.403000Z")  
           expect(response.body.edited).to.eq("2014-12-20T20:47:52.073000Z")
           expect(response.body.url).to.eq("https://swapi.dev/api/films/6/")

    })

});


it('Validação de filmes do personagem Darth Vader', () => {
    cy.request({
        method:"GET",
        url: "films/1/"
    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.title).to.eq("A New Hope")
        expect(response.body.episode_id).to.equal(4)
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
        expect(response.status).to.equal(200)    
        expect(response.body.title).to.eq("The Empire Strikes Back")
        expect(response.body.episode_id).to.equal(5)
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
           expect(response.status).to.equal(200)
           expect(response.body.title).to.eq("Return of the Jedi")
           expect(response.body.episode_id).to.equal(6)
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
           expect(response.status).to.equal(200)
           expect(response.body.title).to.eq("Revenge of the Sith")
           expect(response.body.episode_id).to.equal(3)
           expect(response.body.director).to.eq("George Lucas")
           expect(response.body.producer).to.eq("Rick McCallum")
           expect(response.body.release_date).to.eq("2005-05-19")
           expect(response.body.characters[3]).to.eq("https://swapi.dev/api/people/4/")
           expect(response.body.created).to.eq("2014-12-20T18:49:38.403000Z")  
           expect(response.body.edited).to.eq("2014-12-20T20:47:52.073000Z")
           expect(response.body.url).to.eq("https://swapi.dev/api/films/6/")
        
    })

});


it('Validação de filmes da personagem Leia Organa ', () => {
    cy.request({
            method:"GET",
            url: "films/1/"
        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.title).to.eq("A New Hope")
            expect(response.body.episode_id).to.equal(4)
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
            expect(response.status).to.equal(200)    
            expect(response.body.title).to.eq("The Empire Strikes Back")
            expect(response.body.episode_id).to.equal(5)
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
               expect(response.status).to.equal(200)
               expect(response.body.title).to.eq("Return of the Jedi")
               expect(response.body.episode_id).to.equal(6)
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
               expect(response.status).to.equal(200)
               expect(response.body.title).to.eq("Revenge of the Sith")
               expect(response.body.episode_id).to.equal(3)
               expect(response.body.director).to.eq("George Lucas")
               expect(response.body.producer).to.eq("Rick McCallum")
               expect(response.body.release_date).to.eq("2005-05-19")
               expect(response.body.characters[4]).to.eq("https://swapi.dev/api/people/5/")
               expect(response.body.created).to.eq("2014-12-20T18:49:38.403000Z")  
               expect(response.body.edited).to.eq("2014-12-20T20:47:52.073000Z")
               expect(response.body.url).to.eq("https://swapi.dev/api/films/6/")
    
     })

});


it('Validação de filmes da personagem Owen Lars', () => {
    cy.request({
            method:"GET",
            url: "films/1/"
        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.title).to.eq("A New Hope")
            expect(response.body.episode_id).to.equal(4)
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
            expect(response.status).to.equal(200)
            expect(response.body.title).to.eq("Attack of the Clones")
            expect(response.body.episode_id).to.equal(2)
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
            expect(response.status).to.equal(200)
            expect(response.body.title).to.eq("Revenge of the Sith")
            expect(response.body.episode_id).to.equal(3)
            expect(response.body.director).to.eq("George Lucas")
            expect(response.body.producer).to.eq("Rick McCallum")
            expect(response.body.release_date).to.eq("2005-05-19")
            expect(response.body.characters[5]).to.eq("https://swapi.dev/api/people/6/")
            expect(response.body.created).to.eq("2014-12-20T18:49:38.403000Z")  
            expect(response.body.edited).to.eq("2014-12-20T20:47:52.073000Z")
            expect(response.body.url).to.eq("https://swapi.dev/api/films/6/")
    
    })

});


it('Validação de filmes da personagem Beru Whitesun lars', () => {
    cy.request({
        method:"GET", 
        url: "films/3/"
            }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.characters).to.deep.eq([])
    

    cy.request({
            method:"GET", 
            url: "films/5/"})
            }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.title).to.eq("Attack of the Clones")
            expect(response.body.episode_id).to.equal(2)
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
            expect(response.status).to.equal(200)
            expect(response.body.title).to.eq("Revenge of the Sith")
            expect(response.body.episode_id).to.equal(3)
            expect(response.body.director).to.eq("George Lucas")
            expect(response.body.producer).to.eq("Rick McCallum")
            expect(response.body.release_date).to.eq("2005-05-19")
            expect(response.body.characters[6]).to.eq("https://swapi.dev/api/people/7/")
            expect(response.body.created).to.eq("2014-12-20T18:49:38.403000Z")  
            expect(response.body.edited).to.eq("2014-12-20T20:47:52.073000Z")
            expect(response.body.url).to.eq("https://swapi.dev/api/films/6/")
    
            
    })

});


it('Validação de filmes do personagem R5-D4', () => {
    
    cy.request({
        method:"GET", 
        url: "films/5/"
               
        }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.characters).to.deep.eq([])
    })

});


it('Validação de filmes do personagem Biggs Darklighter', () => {
    cy.request({
            method:"GET",
            url: "films/1/"
            }).then((response)=>{
            expect(response.status).to.equal(200)
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