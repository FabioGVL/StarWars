# StarWarsAPI

Os testes abaixo visam garantir a funcionalidade correta e a integridade dos dados fornecidos pela API.



## Testes/Validações

### Recuperação e validação de informações de personagens

Dado que acesso o endpoint `/people/{id}/`

Quando insiro ao final do endpoint um número de 1 a 83 (exceto 17)

E realizo a busca

E a API me retorna os dados unitários do personagem de ID buscado

Então verifico que o resultado obtido corresponde ao resultado esperado





### Validação do comportamento da API com ID inexistente 

Dado que acesso o endpoint `/people/{id}/`

Quando insiro um ID inexistente

E realizo a busca

Então verifico que a API retorna a mensagem de erro `"Not found"`





### Validação da paginação 

Dado acesso o endpoint `/people/?page=3`

Quando efetuo a busca

E a API retorna as informações da página

Então verifico que as informações de paginação retornadas estão de acordo com o resultado esperado





### Validação da listagem de personagens

Dado que insiro o endpoint "/people/?page=9"

Quando efetuo a busca

E a API retorna as informações da página

Então verifico que a listagem de personagens e contagem geral de personagens está de acordo com o resultado esperado





## Bugs encontrados

### Personagem inexistente

Dado que acesso o endpoint "/people/83"

Quando efetuo a busca

E a API me retorna as informações da página e do personagem `Tion Medon`

E verifico que no campo COUNT constam 82 personagens

E realizo a contagem geral dos personagens

Então verifico que os personagens estão mapeados do ID 1 ao 83, porém, o personagem e ID de número 17 não existem





## Passos para reproduzir/encontrar o erro

1. Acesse o site https://swapi.dev
   
2. Insira o endpoint `/people/?page=2`
   
3. Realize a busca
   
4. Aguarde a API retornar as informações
   
5. Gire o scroll do mouse para baixo
    
6. Verifique que os IDs passam do 16 para o 18
