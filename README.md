# API Sobre Livros

Por desafio, aprendizado e experiência prática, resolvi desenvolver essa API simples sem framework.

A produtividade foi o principal empecilho, mas serviu os meus propósitos.

Esmiucei melhor o protocolo HTTP, observei as nuances entre Cliente e o Servidor, lidei com os contratempos referente ao desenvolvimento mais "puro" etc.

## 🚀 Começando

### 📋 Pré-requisitos

```
Ter Node.JS e a porta 3000 do localhost livre (ou especificar).
```

### 🔧 Instalação

Para iniciar:

```
No console do VS Code, digite:

yarn - Para baixar a dependência.

Há dois scripts para iniciar o servidor:
yarn dev - Para desenvolvimento.
yarn start - Para produção.
```

Para Interagir com a API:

```
No navegador, estão disponíveis 5 rotas:

http://localhost:[PORTA]/path/ - Exemplo.

GET: /books/ - Retorna um JSON com todos os livros salvos.
GET: /books/1012 - Retorna um JSON com um livro específico.
POST: /books/ - Cria um livro a partir de um JSON.
PATCH: /books/3117 - Modifica um livro específico a partir de um JSON.
DELETE: /books/3221 - Deleta um livro específico.
```

## 🛠️ Construído com

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de Programação.
- [Node.JS](https://nodejs.org/pt-br/) - Ambiente de Execução JavaScript.
- [Yarn](https://yarnpkg.com/) - Gerenciador de Pacotes.
- [Nodemon](https://nodemon.io/) - Utilitário de Desenvolvimento.

## ✒️ Autor

- **Jonathan Mendes** - [GitHub](https://github.com/DevJonathanMendes)

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.md](https://github.com/DevJonathanMendes/APIBook/blob/master/LICENSE.md) para detalhes.
