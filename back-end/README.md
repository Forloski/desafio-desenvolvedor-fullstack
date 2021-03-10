# Back-End API Teste EQI
> API que cria/atualiza usuários e salva simulações na Database.

API desenvolvida em NodeJS (Express), utilizando TypeScript.

Foi desenvolvida como parte do teste requisitado pela EQI.


## Configuração para Desenvolvimento
Instalar as dependências com:
```sh
npm install 
```
Criar uma Database Postgres (de maneira que preferir). 
Exemplo meu usando Docker:
```sh
docker run --name eqi_test -e POSTGRES_PASSWORD=docker -p 5432:5432 
-d postgres
```
Rodar as migrations da database:
```sh
npm run typeorm -- migration:run
```

Para inicializar a API:
```sh
npm run devServer
```

## Exemplo de uso

### Rotas para criação/atualização de usuário

Nenhuma rota requer autorização.

* **Rota de criação/atualização de usuários**

Cria um candidato dentro do banco de dados com os dados informados e retorna um objeto com os dados criados.
Caso ja haja um usuário com o e-mail informado, atualiza os outros dados e retorna um objeto com os dados criados.
```sh
POST {apiURL}/users
```
 Espera que seja enviado um HTTP request com o seguinte body:

     {
	    "name":  "string", // required
	    "email":  "string", // required
	    "phone":  "string" // required
    }
    
 Caso a criação tenha sucesso retorna no body da resposta:

     {
    	"id": "string", 
        "name":  "string",
        "email":  "string",
        "phone":  "string",
        "createdAt": "date",
        "updatedAt": "date",
     }

### Rotas para entidade de simulações

Nenhuma rota requer autorização.

* **Rota de criação de simulação**

Cria uma simulação na database.

```sh
POST {apiURL}/simulations
```
 Espera que seja enviado um HTTP request com o seguinte body:

     {
	    "userId":  "string", // required
	    "investmentTime":  "string", // required
	    "initialDeposit":  "string",// required
	    "monthlyDeposit":  "string" // required
    }
    
 Caso a criação tenha sucesso retorna no body da resposta:

     {
	    "id":  "string",
        "userId":  "string",
        "investmentTime":  "string",
	    "initialDeposit":  "string",
	    "monthlyDeposit":  "string",
	    "createdAt": "date",
        "updatedAt": "date"
	 }

* **Rota de leitura de simulações**

Lê todas as simulações salvas por um usuário.

```sh
GET {apiURL}/simulations/{id do usuário}
```
 Caso a haja simulações para o id de usuário fornecido retorna no body da resposta:

     [
	    {
		    "id":  "string",
	        "userId":  "string",
	        "investmentTime":  "string",
		    "initialDeposit":  "string",
		    "monthlyDeposit":  "string",
		    "createdAt": "date",
	        "updatedAt": "date"
		 },
		 ...
		 {
		    "id":  "string",
	        "userId":  "string",
	        "investmentTime":  "string",
		    "initialDeposit":  "string",
		    "monthlyDeposit":  "string",
		    "createdAt": "date",
	        "updatedAt": "date"
		 }
	 ]
