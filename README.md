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

*Dado que acesso o endpoint "/people/83" e efetuo a busca*

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
