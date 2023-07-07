# <span style="color:blue">StarWarsAPI</span>

Os testes abaixo visam garantir a funcionalidade correta e a integridade dos dados fornecidos pela API.

*Todos os testes foram realizados utilizando a ferramenta de automação CYPRESS*


## **Testes/Validações**

### Recuperação e validação de informações de personagens

*Dado que acesso o endpoint `/people/{id}/`*

*Quando inserir ao final do endpoint um ID do número 1 ao 83 e realizar a busca*

*Então a API deverá retornar os dados unitários corretos do personagem de ID buscado*





### Recuperação e validação de espécies

*Dado que acesso o endpoint `/species/{id}/`*

*Quando inserir ao final do endpoint o ID da espécie associada a um personagem especifico e realizar a busca*

*Então a API deverá retornar os dados unitários corretos da espécie buscada*





### Recuperação e validação de veículos

*Dado que acesso o endpoint `/vehicles/{id}/`*

*Quando inserir ao final do endpoint o ID do veículo associado a um personagem específico e realizar a busca*

*Então a API deverá retornar os dados unitários corretos do veículo buscado*






### Recuperação e validação de espaçonaves

*Dado que acesso o endpoint `/starships/{id}/`*

*Quando inserir ao final do endpoint o ID da espaçonave associado a um personagem específico e realizar a busca*

*Então a API deverá retornar os dados unitários corretos do veículo buscado*





### Validação do comportamento da API com ID inexistente - Limite de entrada

*Dado que acesso o endpoint `/people/{id}/`*

*Quando inserir um ID inexistente e realizar a busca*

*Então a API deverá retornar a mensagem de erro `"Not found"`*





### Validação do comportamento da API com página inexistente - Limite de entrada

*Dado que acesso o endpoint `/people/?page={id}`*

*Quando inserir um ID inexistente e realizar a busca*

*Então a API deverá retornar a mensagem de erro `"Not found"`*





### Validação da paginação e listagem de personagens por página

*Dado que acesso o endpoint `/people/?page={id}`*

*Quando efetuar a busca e a API retornar as informações da página*

*Então as informações de paginação/personagens retornadas deverão estar de acordo com o resultado esperado*





## Bugs encontrados

### Personagem inexistente

*Dado que efetuo a busca do endpoint "/people/83"*

*E a API retorna o usuário existente `Tion Medon`*

*E verifico que no campo COUNT constam 82 personagens*

*Quando realizo a contagem geral dos personagens*

*Então verifico que os personagens estão mapeados do ID 1 ao 83, porém, o personagem de ID número 17 não existe*





## Passos para reproduzir/encontrar o erro

*1. Acesse o site https://swapi.dev*
   
*2. Insira o endpoint `/people/?page=2`*
   
*3. Realize a busca*
   
*4. Aguarde a API retornar as informações*
   
*5. Gire o scroll do mouse para baixo*
    
*6. Verifique que os IDs passam do 16 para o 18*





### Dados inconsistentes - Personagem R2-D2

*Dado que insiro os dados do personagem R2-D2 presentes na documentação para execução do teste de validação das informações dos personagens*

*Quando executo o teste o mesmo falha devido a inconsistência de dados entre a API e a Documentação*

*Então verifico que as informações contidas no campo FILMS estão divergentes*





## Passos para reproduzir reproduzir/encontrar o erro

 *1. Crie uma pasta no seu desktop, abra e execute o powershell dentro da mesma*

 *2. Obtenha o código da automação através do comando git clone https://github.com/FabioGVL/StarWarsAPI.git no PowerShell *

 *3. Abra o VsCode, clique em "File" e em seguida em "Open Folder"*

 *5. Acesse a pasta cypress/e2e/services/testeStarWarsApi.cy.js*

 *6. No VS code, clique em “terminal”, depois clique em “Novo terminal”*

 *7. Caso necessário, instale através do terminal o NPM (Gerenciador de pacotes) através do comando “npm install”* 

 *8. Executar o comando “npx cypress open” para abrir o framework (npx está sendo usado para executar cypress).*

 *9. Após abrir a pop-up do Cypress, clique em E2E Testing e escolha um dos três navegadores: Chrome, Edge ou Electron *

*10. Clique em testeStarWarsApi.cy.js*

*11. Aguarde a conclusão dos testes*

*12. Após a conclusão, o Cypress informará que o teste falhou*

*13. Acesse https://swapi.dev/api/people/3/ através do seu navegador ou insira a url no Postman*

*14. Faça o comparativo entre informações contidas no test crash do Cypress e na URL acima*



### Dados inconsistentes - Personagem Leia Organa

*Dado que insiro os dados do personagem Leia Organa presentes na documentação para execução do teste de validação das informações dos personagens*

*Quando executo o teste o mesmo falha devido a inconsistência de dados entre a API e a Documentação*

*Então verifico que as informações contidas no campo CREATED estão divergentes*





## Passos para reproduzir reproduzir/encontrar o erro

 *1. Crie uma pasta no seu desktop, abra e execute o powershell dentro da mesma*

 *2. Obtenha o código da automação através do comando git clone https://github.com/FabioGVL/StarWarsAPI.git no PowerShell *

 *3. Abra o VsCode, clique em "File" e em seguida em "Open Folder"*

 *5. Acesse a pasta cypress/e2e/services/testeStarWarsApi.cy.js*

 *6. No VS code, clique em “terminal”, depois clique em “Novo terminal”*

 *7. Caso necessário, instale através do terminal o NPM (Gerenciador de pacotes) através do comando “npm install”* 

 *8. Executar o comando “npx cypress open” para abrir o framework (npx está sendo usado para executar cypress).*

 *9. Após abrir a pop-up do Cypress, clique em E2E Testing e escolha um dos três navegadores: Chrome, Edge ou Electron *

*10. Clique em testeStarWarsApi.cy.js*

*11. Aguarde a conclusão dos testes*

*12. Após a conclusão, o Cypress informará que o teste falhou*

*13. Acesse https://swapi.dev/api/people/3/ através do seu navegador ou insira a url no Postman*

*14. Faça o comparativo entre informações contidas no test crash do Cypress e na URL acima*





### Dados inconsistentes - Personagem Beru Whitesun lars

*Dado que insiro os dados do personagem Beru Whitesun lars presentes na documentação para execução do teste de validação das informações dos personagens*

*Quando executo o teste o mesmo falha devido a inconsistência de dados entre a API e a Documentação*

*Então verifico que as informações contidas no campo FILMS estão divergentes*





## Passos para reproduzir reproduzir/encontrar o erro

 *1. Crie uma pasta no seu desktop, abra e execute o powershell dentro da mesma*

 *2. Obtenha o código da automação através do comando git clone https://github.com/FabioGVL/StarWarsAPI.git no PowerShell *

 *3. Abra o VsCode, clique em "File" e em seguida em "Open Folder"*

 *5. Acesse a pasta cypress/e2e/services/testeStarWarsApi.cy.js*

 *6. No VS code, clique em “terminal”, depois clique em “Novo terminal”*

 *7. Caso necessário, instale através do terminal o NPM (Gerenciador de pacotes) através do comando “npm install”* 

 *8. Executar o comando “npx cypress open” para abrir o framework (npx está sendo usado para executar cypress).*

 *9. Após abrir a pop-up do Cypress, clique em E2E Testing e escolha um dos três navegadores: Chrome, Edge ou Electron *

*10. Clique em testeStarWarsApi.cy.js*

*11. Aguarde a conclusão dos testes*

*12. Após a conclusão, o Cypress informará que o teste falhou*

*13. Acesse https://swapi.dev/api/people/3/ através do seu navegador ou insira a url no Postman*

*14. Faça o comparativo entre informações contidas no test crash do Cypress e na URL acima*





### Dados inconsistentes - Personagem R5-D4

*Dado que insiro os dados do personagem R5-D4 presentes na documentação para execução do teste de validação das informações dos personagens*

*Quando executo o teste o mesmo falha devido a inconsistência de dados entre a API e a Documentação*

*Então verifico que as informações contidas no campo FILMS estão divergentes*





## Passos para reproduzir reproduzir/encontrar o erro

 *1. Crie uma pasta no seu desktop, abra e execute o powershell dentro da mesma*

 *2. Obtenha o código da automação através do comando git clone https://github.com/FabioGVL/StarWarsAPI.git no PowerShell *

 *3. Abra o VsCode, clique em "File" e em seguida em "Open Folder"*

 *5. Acesse a pasta cypress/e2e/services/testeStarWarsApi.cy.js*

 *6. No VS code, clique em “terminal”, depois clique em “Novo terminal”*

 *7. Caso necessário, instale através do terminal o NPM (Gerenciador de pacotes) através do comando “npm install”* 

 *8. Executar o comando “npx cypress open” para abrir o framework (npx está sendo usado para executar cypress).*

 *9. Após abrir a pop-up do Cypress, clique em E2E Testing e escolha um dos três navegadores: Chrome, Edge ou Electron *

*10. Clique em testeStarWarsApi.cy.js*

*11. Aguarde a conclusão dos testes*

*12. Após a conclusão, o Cypress informará que o teste falhou*

*13. Acesse https://swapi.dev/api/people/3/ através do seu navegador ou insira a url no Postman*

*14. Faça o comparativo entre informações contidas no test crash do Cypress e na URL acima*