# Desafio Front-end LuizaLabs

Por Leonardo Silvatti Silva \
Feito com React e Typescript

## Dependências usadas neste projeto

- React Router
- Axios
- SASS
- Jest
- CryptoJS
- React Testing Library
- Puppeteer

## Instalando as dependências

Para instalar as dependências usadas no projeto e executá-lo localmente, primeiramente é necessário cloná-lo para um diretório de sua preferência e após isso, entrar na raíz e executar o comando abaixo.

```sh
npm install
```

## Configurando o ambiente

Para que o projeto seja executado, algumas variáveis de ambiente devem ser configuradas antes de executar os scripts. Elas estão dentro do arquivo .env localizado na pasta principal do projeto. este arquivo vem como padrão deste jeito:

```
REACT_APP_MARVEL_BASE_URL=https://gateway.marvel.com
REACT_APP_MARVEL_PUBLIC_API_KEY=your_public_key
REACT_APP_MARVEL_PRIVATE_API_KEY=your_private_key
```

as variáveis `REACT_APP_MARVEL_PUBLIC_API_KEY` e `REACT_APP_MARVEL_PRIVATE_API_KEY` devem ser trocadas pelas chaves de API do usuário que irá executar o projeto. As chaves são disponibilizadas gratuitamente aos usuários da Marvel. para conseguí-las basta acessar [https://developer.marvel.com/account](https://developer.marvel.com/account), caso você não tenha uma conta, basta criar uma. O processo é rápido e livre de custos. Na página principal da conta, o site disponibilizará as chaves para que você as copie e cole no .env presente no repositório.

## Scripts disponíveis

Após instalar as dependências necessárias e configurar o ambiente, os seguintes scripts podem ser executados na pasta raíz:

### `npm start`

Executa o projeto em modo de desenvolvimento. \
Para acessar basta entrar no link [http://localhost:3000/luizalabs-frontend/](http://localhost:3000/luizalabs-frontend/) em um navegador.

### `npm test`

Executa a interface de testes unitários e de integração no modo de observação.

### `npm testE2E`

Executa o teste end-to-end. \
Realizei para esta prova um teste simples que executa os seguintes passos em um chromium visível ao utilizador (para fins de demonstraçäo e 30ms de slowmode):

- Entra na home
- Pesquisa um termo inválido
- Pesquisa novamente um termo válido
- Entra na página do herói
- Volta para a home pelo botão voltar
- Coloca um endereço inválido

Para o teste e2e ser realizado, o comando npm start deve estar sendo executado no momento, visto que o teste utiliza os endereços locais

### `npm run build`

Compila o aplicativo para produção na pasta `build`.

### `npm run predeploy` e `npm run deploy`

São Scripts usados para o deploy no gh-pages

## Considerações finais

Para o projeto, optei por utilizar as requests ao serviço da Marvel por meio de hooks customizados definidos por tipo de requisição necessária. Assim, teria um gerenciamento por tipo de dado que gostaria de obter. Como é um projeto em pequena escala, não houve a necessidade de criar contextos e todo o gerenciamento dos favoritos ocorre por meio do `localStorage`. Os testes foram feitos em alguns componentes para ilustrar o processo e o e2e foi feito usando o puppeteer simulando um fluxo simples afim de demonstração.
O delivery para o ambiente online (gh-pages) é feito por meio de scripts de deploy.
Por fim, o projeto também está acessível pelo link [https://lsilvatti.github.io/luizalabs-frontend/](https://lsilvatti.github.io/luizalabs-frontend/), porém devido a limitações do próprio Github Pages, as páginas não funcionam se acessadas diretamente (como uma página de busca com o sufixo `/busca/texto`, por exemplo), porém se acessado diretamente pelo link incial este deploy é totalmente navegável.
